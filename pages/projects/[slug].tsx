import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getProjectBySlug, getAllProjects } from "@/lib/api";
import type ProjectType from "@/interfaces/project";
import Header from "@/components/Header";
import style from "./projects.module.scss";
import classnames from "classnames/bind";
import Image from "next/image";
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import CustomHead from "@/components/CustomHead";
import GoogleAd from "@/components/GoogleAd";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";
import remarkDirective from "remark-directive";
import { myRemarkPlugin } from "../posts/[category]/[slug]";
import { useEffect, useState } from "react";
import { setInterval } from "timers";

const md = markdownIt({ html: true }).use(highlightjs);

const cx = classnames.bind(style);
const components = { Image, GoogleAd };

type Props = {
  project: ProjectType;
  moreProjects: ProjectType[];
  preview?: boolean;
  content: any;
};

export default function Project({ project, content }: Props) {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const [isReadyClose, setIsReadyClose] = useState(false);
  const [countdown, setCountdown] = useState(10);
  const title = `${project.title} | Cozy Coding`;
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
  }, [countdown]);

  const onClickLink = (e) => {
    setIsClicked(true);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      {router.isFallback ? (
        " Loading…"
      ) : (
        <>
          <CustomHead type="project" project={project} />
          <div className={cx("container")}>
            <Header />
            <div className={cx("inner")}>
              <article>
                <div className={cx("title_area")}>
                  <h2 className={cx("project_title")}>{project.title}</h2>
                  <Image
                    className={cx("view_badge")}
                    src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fcozy-world.vercel.app${router.asPath}&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=views&edge_flat=false`}
                    alt=""
                    width={"50"}
                    height={"50"}
                  />
                </div>
                <p className={cx("project_description")}>
                  {project.description}
                </p>
                {project.url && (
                  <>
                    <h3 className={cx("demo_title")}>Demo</h3>
                    <div className={cx("ifram_wrap")}>
                      <iframe
                        className={cx("iframe")}
                        src={project.url}
                        width={"200%"}
                      />
                    </div>
                  </>
                )}

                <GoogleAd></GoogleAd>
                <p className={cx("amazon_text")}>
                  Some product links are affiliate links which means <br />
                  if you something we'll receive a small commission.
                </p>
                {!isClicked && (
                  <div className={cx("amazon_wrap")}>
                    <div className={cx("amazon_content")}>
                      <a
                        className={cx("amazon_link")}
                        href="https://amzn.to/4fMfjrh"
                        target="_blank"
                        onClick={onClickLink}
                      >
                        <span>{"Visit Amazon and check the code"}</span>
                      </a>
                      {countdown > 0 ? (
                        <p className={cx("close_button")}>{countdown}</p>
                      ) : (
                        <button
                          type="button"
                          className={cx("close_button")}
                          onClick={onClickLink}
                        >
                          <span className={cx("close_icon")}></span>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                <div className={cx("post_content")}>
                  <MDXRemote {...content} components={components} />
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
  const project = getProjectBySlug(params.slug, [
    "title",
    "date",
    "url",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "description",
  ]);
  // const content = await markdownToHtml(project.content || "");

  const content = await serialize(project.content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
      remarkPlugins: [remarkDirective, myRemarkPlugin],
    },
  });

  return {
    props: {
      project: {
        ...project,
      },
      content,
    },
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects(["slug"]);
  let paths = [];

  for (let i in projects) {
    const project = projects[i];
    paths.push({
      params: {
        slug: project.slug,
      },
    });
  }
  return {
    paths,
    fallback: false,
  };
}
