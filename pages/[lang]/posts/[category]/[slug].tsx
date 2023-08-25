import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPosts } from "../../../../lib/api";
import type PostType from "../../../../interfaces/post";
import Header from "@/components/Header";
import style from "../posts.module.scss";
import classnames from "classnames/bind";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import remarkDirective from "remark-directive";
import { visit } from "unist-util-visit";

import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import markdownContainer from "markdown-it-container";
import { LANG_LOCALE, SITE_NAME, SITE_URL } from "@/lib/constants";
import CustomHead from "@/components/CustomHead";
import GoogleAd from "@/components/GoogleAd";
import moment from "moment";
import Link from "next/link";
const md = markdownIt({ html: true }).use(highlightjs).use(markdownContainer, "tip");

const cx = classnames.bind(style);
const components = { Image, GoogleAd };
type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
  content: any;
};

export default function Post({ post, content }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  console.log(post);
  return (
    <>
      {router.isFallback ? (
        " Loading…"
      ) : (
        <>
          <CustomHead type="post" post={post} />
          <Header></Header>
          <main className={cx("container")}>
            <div className={cx("inner")}>
              <div className={cx("meta")}>
                <span className={cx("date")}>Posted on {moment(post.date).format("MMM D")}</span>
                <img
                  className={cx("view_badge")}
                  src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fcozy-world.vercel.app${router.asPath}&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=views&edge_flat=false`}
                  alt=""
                />
              </div>
              <h1 className={cx("post_title")}>{post.title}</h1>
              <ul className={cx("tag_area")}>
                {post.tag.map((text) => (
                  <Link href={`/${router.query.lang}/tags/${text}`} className={cx("tag")}>
                    #{text}
                  </Link>
                ))}
                <li></li>
              </ul>
              <article className={cx("post_content")}>
                {/* <div dangerouslySetInnerHTML={{ __html: md.render(post.content) }}></div> */}

                <MDXRemote {...content} components={components} />
              </article>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export function myRemarkPlugin() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === "textDirective" || node.type === "leafDirective" || node.type === "containerDirective") {
        if (node.name === "tip") {
          const data = node.data || (node.data = {});
          const tagName = node.type === "textDirective" ? "span" : "div";

          data.hName = tagName;
          // data.hProperties = h(tagName, node.attributes).properties;
          data.hProperties = { className: ["tip"] };
        }

        if (node.name === "warning") {
          const data = node.data || (node.data = {});
          const tagName = node.type === "textDirective" ? "span" : "div";

          data.hName = tagName;
          data.hProperties = { className: ["warning"] };
        }
      }
    });
  };
}

type Params = {
  params: {
    slug: string;
    category: string;
    lang: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const [post] = await getPosts({ category: params.category, file: params.slug, fields: ["title", "description", "date", "slug", "author", "content", "ogImage", "coverImage", "category", "date", "tag"], lang: params.lang });
  console.log(post.title);
  // console.log(post.content);
  // const content = await markdownToHtml(post.content || "");
  const content = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
      remarkPlugins: [remarkDirective, myRemarkPlugin],
    },
  });
  return {
    props: {
      post: {
        ...post,
      },
      content,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts({ fields: ["slug", "category", "lang"] });
  let paths = [];
  for (let i in posts) {
    const post = posts[i];

    paths.push({
      params: {
        lang: post.lang,
        category: post.category,
        slug: post.slug,
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
}
