import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getProjectBySlug, getAllProjects } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import type ProjectType from "../../interfaces/project";
import Header from "@/components/Header";
import style from "./projects.module.scss";
import classnames from "classnames/bind";
import markdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
const md = markdownIt({ html: true }).use(highlightjs);

const cx = classnames.bind(style);

type Props = {
  project: ProjectType;
  moreProjects: ProjectType[];
  preview?: boolean;
};

export default function Project({ project }: Props) {
  const router = useRouter();
  const title = `${project.title} | Next.js Blog Example with ${CMS_NAME}`;
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  console.log(project.content);
  return (
    <>
      {router.isFallback ? (
        " Loading…"
      ) : (
        <div className={cx("container")}>
          <Header />
          <div className={cx("inner")}>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={project.ogImage.url} />
              </Head>
              <h2 className={cx("project_title")}>{project.title}</h2>
              <p className={cx("project_description")}>{project.description}</p>
              <h3 className={cx("demo_title")}>Demo</h3>
              <div className={cx("ifram_wrap")}>
                <iframe className={cx("iframe")} src={project.url} width={"200%"} />
              </div>
              {/* <div className={cx("post_content")} dangerouslySetInnerHTML={{ __html: project.content }}></div> */}
              {/* <div className={cx("post_content")} dangerouslySetInnerHTML={{ __html: md.render(project.content) }}></div> */}
              <div className={cx("post_content")} dangerouslySetInnerHTML={{ __html: md.render(project.content) }}></div>
              {/* {md.render(project.content)} */}
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

  return {
    paths: projects.map((project) => {
      return {
        params: {
          slug: project.slug,
        },
      };
    }),
    fallback: false,
  };
}