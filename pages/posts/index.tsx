import { useRouter } from "next/router";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import Header from "@/components/Header";
import style from "./posts.module.scss";
import classnames from "classnames/bind";
import PostList from "@/components/PostList";
import SectionTitle from "@/components/SectionTitle";
import PostType from "@/interfaces/post";

const cx = classnames.bind(style);

type Props = {
  posts: PostType[];
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ posts }: Props) {
  const router = useRouter();
  const title = ` Next.js Blog Example with ${CMS_NAME}`;
  // if (!router.isFallback && !project?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return (
    <>
      {router.isFallback ? (
        " Loading…"
      ) : (
        <div className={cx("container", "-list")}>
          <Header />
          <div className={cx("inner")}>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                {/* <meta property="og:image" content={project.ogImage.url} /> */}
              </Head>
              <SectionTitle title="Posts"></SectionTitle>
              <div className={cx("project_list")}>
                <PostList postList={posts}></PostList>
              </div>
            </article>
          </div>
        </div>
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
  const allPosts = getAllPosts(["title", "date", "slug", "author", "coverImage", "description", "ogImage"]);

  return {
    props: {
      posts: allPosts,
    },
  };
}
