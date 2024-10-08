import { useRouter } from "next/router";
import { getPostCategories, getPosts } from "../../lib/api";
import Header from "@/components/Header";
import style from "./tags.module.scss";
import classnames from "classnames/bind";
import PostList from "@/components/PostList";
import SectionTitle from "@/components/SectionTitle";
import PostType from "@/interfaces/post";
import CategoryList from "@/components/CategoryList";
import CustomHead from "@/components/CustomHead";

const cx = classnames.bind(style);

type Props = {
  posts: PostType[];
  categories: string[];
  morePosts: PostType[];
  preview?: boolean;
};

export default function Tag({ posts, categories }: Props) {
  const router = useRouter();
  const title = `Cozy Coding | Post`;
  // if (!router.isFallback && !project?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return (
    <>
      {router.isFallback ? (
        " Loading…"
      ) : (
        <>
          <CustomHead type="home" />
          <div className={cx("container", "-list")}>
            <Header />
            <div className={cx("inner")}>
              <article>
                <SectionTitle title="Posts"></SectionTitle>
                <CategoryList categoryList={categories}></CategoryList>
                <div className={cx("project_list")}>
                  <PostList postList={posts}></PostList>
                </div>
              </article>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export async function getStaticProps() {
  const allPosts = await getPosts({ fields: ["title", "date", "slug", "author", "coverImage", "description", "ogImage", "category", "tag"] });
  const categories = await getPostCategories();
  return {
    props: {
      posts: allPosts,
      categories: categories,
    },
  };
}
