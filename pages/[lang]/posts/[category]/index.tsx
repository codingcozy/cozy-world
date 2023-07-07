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

const cx = classnames.bind(style);

type Props = {
  posts: PostType[];
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ posts }: Props) {
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
          <CustomHead type="home" />
          <div className={cx("container", "-list")}>
            <Header />
            <div className={cx("inner")}>
              <article className="mb-32">
                <SectionTitle title="Posts"></SectionTitle>
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
    category: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const allPosts = await getPosts({ category: params.category, fields: ["title", "date", "slug", "author", "coverImage", "description", "ogImage", "category", "tag"], lang: params.lang });
  return {
    props: {
      posts: allPosts,
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
        lang: "ko",
        category,
      },
    });

    paths.push({
      params: {
        lang: "en",
        category,
      },
    });

    paths.push({
      params: {
        lang: "ja",
        category,
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
}
