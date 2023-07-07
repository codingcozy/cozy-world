import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPosts } from "../../../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../../../lib/markdownToHtml";
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
import { h } from "hastscript";

import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import markdownContainer from "markdown-it-container";
import { LANG_LOCALE, SITE_NAME, SITE_URL } from "@/lib/constants";
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
  const title = `${post.title} | Cozy Coder`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  console.log(router.query.lang);
  console.log(post);
  return (
    <>
      {router.isFallback ? (
        " Loading…"
      ) : (
        <>
          <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" data-gatsby-head="true" />
            <meta property="og:url" content="" data-gatsby-head="true" />
            <meta property="og:type" content="website" data-gatsby-head="true" />
            <meta property="og:site_name" content={`${post.title} | ${SITE_NAME}`} data-gatsby-head="true" />
            <meta property="og:title" content={`${post.title} | ${SITE_NAME}`} data-gatsby-head="true" />
            <meta property="og:description" content={post.description} data-gatsby-head="true" />
            <meta property="og:image" content={post.ogImage.url} data-gatsby-head="true" />
            <meta property="og:locale" content={LANG_LOCALE["en"]} data-gatsby-head="true" />
            <meta name="twitter:card" content="summary_large_image" data-gatsby-head="true" />
            <meta property="twitter:domain" content="cozy-coder.com" data-gatsby-head="true" />
            <meta property="twitter:url" content={`${SITE_URL}/${router.asPath}`} data-gatsby-head="true" />
            <meta name="twitter:title" content={`${post.title} | ${SITE_NAME}`} data-gatsby-head="true" />
            <meta name="twitter:description" content={post.description} data-gatsby-head="true" />
            <meta name="twitter:image" content={post.ogImage.url} data-gatsby-head="true" />
            <meta name="twitter:label1" content={post.category} data-gatsby-head="true" />
            <meta name="twitter:data1" content={`Dev | ${SITE_NAME}`} data-gatsby-head="true" />
            <meta name="article:published_time" content={post.date} data-gatsby-head="true" />
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

function myRemarkPlugin() {
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
  const [post] = await getPosts({ category: params.category, file: params.slug, fields: ["title", "date", "slug", "author", "content", "ogImage", "coverImage", "category", "date"], lang: params.lang });
  // console.log(post);
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
        lang: "ko",
        category: post.category,
        slug: post.slug,
      },
    });

    paths.push({
      params: {
        lang: "en",
        category: post.category,
        slug: post.slug,
      },
    });

    paths.push({
      params: {
        lang: "ja",
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
