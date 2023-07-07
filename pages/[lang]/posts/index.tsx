import { useRouter } from "next/router";
import { getPostCategories, getPosts } from "../../../lib/api";
import Head from "next/head";
import Header from "@/components/Header";
import style from "./posts.module.scss";
import classnames from "classnames/bind";
import PostList from "@/components/PostList";
import SectionTitle from "@/components/SectionTitle";
import PostType from "@/interfaces/post";
import CategoryList from "@/components/CategoryList";
import { LANG_LIST } from "@/lib/constants";

const cx = classnames.bind(style);

type Props = {
  posts: PostType[];
  categories: string[];
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ posts, categories }: Props) {
  const router = useRouter();
  const title = `Cozy Coder | Post`;
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
    lang: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const allPosts = await getPosts({ fields: ["title", "date", "slug", "author", "coverImage", "description", "ogImage", "category", "tag"], lang: params.lang });
  const categories = await getPostCategories();

  return {
    props: {
      posts: allPosts,
      categories: categories,
    },
  };
}
export async function getStaticPaths() {
  return {
    paths: LANG_LIST.map((lang) => ({
      params: {
        lang,
      },
    })),
    fallback: false,
  };
}
