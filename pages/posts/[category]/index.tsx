import { useRouter } from "next/router";
import Head from "next/head";
import Header from "@/components/Header";
import style from "../posts.module.scss";
import classnames from "classnames/bind";
import PostList from "@/components/PostList";
import SectionTitle from "@/components/SectionTitle";
import PostType from "@/interfaces/post";
import { getPosts, getPostCategories } from "@/lib/api";
import CustomHead from "@/components/CustomHead";
import CategoryList from "@/components/CategoryList";

const cx = classnames.bind(style);

type Props = {
  posts: PostType[];
  categories: string[];
  category: string;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ posts, categories, category }: Props) {
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
              <article className="mb-32">
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

type Params = {
  params: {
    category: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const allPosts = await getPosts({ category: params.category, fields: ["title", "date", "slug", "author", "coverImage", "description", "ogImage", "category", "tag"] });
  const categories = await getPostCategories();

  return {
    props: {
      posts: allPosts,
      category: params.category,
      categories,
    },
  };
}

export async function getStaticPaths() {
  const categories = await getPostCategories();
  let paths = [];
  for (let i in categories) {
    const category = categories[i];

    paths.push({
      params: {
        category,
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
}
