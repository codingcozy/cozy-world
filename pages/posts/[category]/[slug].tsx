import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPosts } from "../../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../../lib/markdownToHtml";
import type PostType from "../../../interfaces/post";
import Header from "@/components/Header";
import style from "../posts.module.scss";
import classnames from "classnames/bind";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypeHighlight from "rehype-highlight";
import remarkDirective from "remark-directive";
import { visit } from "unist-util-visit";
import { h } from "hastscript";

import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import markdownContainer from "markdown-it-container";
const md = markdownIt({ html: true }).use(highlightjs).use(markdownContainer, "tip");
// const md = markdownIt({ html: true });

const cx = classnames.bind(style);
const components = { Image };
type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
  content: any;
};

export default function Post({ post, content }: Props) {
  const router = useRouter();
  const title = `${post.title} | Cozy World`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      {router.isFallback ? (
        " Loading…"
      ) : (
        <>
          <Head>
            <title>{title}</title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <Header></Header>
          <main className={cx("container")}>
            <div className={cx("inner")}>
              <article className={cx("post_content")}>
                {/* <div dangerouslySetInnerHTML={{ __html: md.render(post.content) }}></div> */}

                <MDXRemote {...content} components={components} />
                {/* <div dangerouslySetInnerHTML={{ __html: post.content }}></div> */}
              </article>
            </div>
          </main>
        </>
      )}
    </>
  );
}

type Params = {
  params: {
    slug: string;
    category: string;
  };
};

function myRemarkPlugin() {
  return (tree: any) => {
    visit(tree, (node) => {
      if (node.type === "textDirective" || node.type === "leafDirective" || node.type === "containerDirective") {
        if (node.name === "tip") {
          const data = node.data || (node.data = {});
          const tagName = node.type === "textDirective" ? "span" : "div";

          data.hName = tagName;
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

export async function getStaticProps({ params }: Params) {
  const [post] = await getPosts({ category: params.category, file: params.slug, fields: ["title", "date", "slug", "author", "content", "ogImage", "coverImage", "category"] });
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
  const posts = await getPosts({ fields: ["slug", "category"] });
  return {
    paths: posts.map((post) => {
      return {
        params: {
          category: post.category,
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
