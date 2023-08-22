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
import CustomHead from "@/components/CustomHead";
import { useEffect } from "react";
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
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  useEffect(() => {
    let contentAd = `<ins class="adsbygoogle" style="display: block" data-ad-client="ca-pub-4877378276818686" data-ad-slot="1107185301" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
    const adEls = document.getElementsByClassName("content-ad");
    for (let i = 0; i < adEls.length; i++) {
      const adEl = adEls[i];
      adEl.innerHTML = contentAd;
    }
  }, []);

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
  const [post] = await getPosts({ category: params.category, file: params.slug, fields: ["title", "description", "date", "slug", "author", "content", "ogImage", "coverImage", "category", "date"], lang: params.lang });
  console.log(post.content);
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
