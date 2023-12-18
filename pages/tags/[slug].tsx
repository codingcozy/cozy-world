import { useRouter } from "next/router";
import { getPostCategories, getPosts } from "@/lib/api";
import Head from "next/head";
import Header from "@/components/Header";
import style from "./tags.module.scss";
import classnames from "classnames/bind";
import PostList from "@/components/PostList";
import SectionTitle from "@/components/SectionTitle";
import PostType from "@/interfaces/post";
import CategoryList from "@/components/CategoryList";
import CustomHead from "@/components/CustomHead";
import path from "path";

const cx = classnames.bind(style);

type Props = {
  posts: PostType[];
  tag: string;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Tag({ posts, tag }: Props) {
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
                <SectionTitle title={`#${tag}`}></SectionTitle>
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
  const allPosts = await getPosts({ tag: params.slug, fields: ["title", "date", "slug", "author", "coverImage", "description", "ogImage", "category", "tag"] });
  return {
    props: {
      posts: allPosts,
      tag: params.slug,
    },
  };
}
export async function getStaticPaths() {
  const posts = await getPosts({ fields: ["slug", "category", "tag"] });
  let tags: string[] = [];
  for (let i in posts) {
    const post = posts[i];
    if (post.tag) tags = [...tags, ...post.tag];
  }
  tags = tags.filter((tag, index) => tags.indexOf(tag) === index);
  // console.log(tags);

  let paths: any[] = [];

  tags.map((tag) => {
    paths.push({
      params: {
        slug: tag,
      },
    });
  });
  return {
    paths,
    fallback: false,
  };
}
