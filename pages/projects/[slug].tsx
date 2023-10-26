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
  const title = `${project.title} | Cozy Coder`;
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

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
                <p className={cx("project_description")}>{project.description}</p>
                <h3 className={cx("demo_title")}>Demo</h3>
                <div className={cx("ifram_wrap")}>
                  <iframe className={cx("iframe")} src={project.url} width={"200%"} />
                </div>
                <GoogleAd></GoogleAd>
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
  const project = getProjectBySlug(params.slug, ["title", "date", "url", "slug", "author", "content", "ogImage", "coverImage", "description"]);
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
