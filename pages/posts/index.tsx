import { useRouter } from "next/router";
import { getPostCategories, getPosts } from "../../lib/api";
import Head from "next/head";
import Header from "@/components/Header";
import style from "./posts.module.scss";
import classnames from "classnames/bind";
import PostList from "@/components/PostList";
import SectionTitle from "@/components/SectionTitle";
import PostType from "@/interfaces/post";
import CategoryList from "@/components/CategoryList";

const cx = classnames.bind(style);

type Props = {
  posts: PostType[];
  categories: string[];
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ posts, categories }: Props) {
  const router = useRouter();
  const title = `Cozy World | Post`;
  // if (!router.isFallback && !project?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return (
    <>
      {router.isFallback ? (
        " Loading…"
      ) : (
        <>
          <Head>
            <title>{title}</title>
            {/* <meta property="og:image" content={project.ogImage.url} /> */}
          </Head>
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

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const allPosts = await getPosts({ fields: ["title", "date", "slug", "author", "coverImage", "description", "ogImage", "category"] });
  const categories = await getPostCategories();

  return {
    props: {
      posts: allPosts,
      categories: categories,
    },
  };
}
