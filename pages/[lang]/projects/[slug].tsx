import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getProjectBySlug, getAllProjects } from "../../../lib/api";
import Head from "next/head";
import type ProjectType from "../../../interfaces/project";
import Header from "@/components/Header";
import style from "./projects.module.scss";
import classnames from "classnames/bind";
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import CustomHead from "@/components/CustomHead";
const md = markdownIt({ html: true }).use(highlightjs);

const cx = classnames.bind(style);

type Props = {
  project: ProjectType;
  moreProjects: ProjectType[];
  preview?: boolean;
};

export default function Project({ project }: Props) {
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
              <article className="mb-32">
                <div className={cx("title_area")}>
                  <h2 className={cx("project_title")}>{project.title}</h2>
                  <img
                    className={cx("view_badge")}
                    src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fcozy-world.vercel.app${router.asPath}&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=views&edge_flat=false`}
                    alt=""
                  />
                </div>
                <p className={cx("project_description")}>{project.description}</p>
                <h3 className={cx("demo_title")}>Demo</h3>
                <div className={cx("ifram_wrap")}>
                  <iframe className={cx("iframe")} src={project.url} width={"200%"} />
                </div>

                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4877378276818686" crossOrigin="anonymous"></script>
                <ins className="adsbygoogle" style={{ display: "block" }} data-ad-client="ca-pub-4877378276818686" data-ad-slot="1107185301" data-ad-format="auto" data-full-width-responsive="true"></ins>
                <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
                {/* <div className={cx("post_content")} dangerouslySetInnerHTML={{ __html: project.content }}></div> */}
                {/* <div className={cx("post_content")} dangerouslySetInnerHTML={{ __html: md.render(project.content) }}></div> */}
                <div className={cx("post_content")} dangerouslySetInnerHTML={{ __html: md.render(project.content) }}></div>
                {/* {md.render(project.content)} */}
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

  return {
    props: {
      project: {
        ...project,
        // content,
      },
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
        lang: "ko",
        slug: project.slug,
      },
    });

    paths.push({
      params: {
        lang: "en",
        slug: project.slug,
      },
    });

    paths.push({
      params: {
        lang: "ja",
        slug: project.slug,
      },
    });
  }
  return {
    paths,
    fallback: false,
  };
}
