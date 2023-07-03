import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getProjectBySlug, getAllProjects } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import type ProjectType from "../../interfaces/project";
import Header from "@/components/Header";
import style from "./projects.module.scss";
import classnames from "classnames/bind";
import ProjectList from "@/components/ProjectList";
import SectionTitle from "@/components/SectionTitle";

const cx = classnames.bind(style);

type Props = {
  projects: ProjectType[];
  moreProjects: ProjectType[];
  preview?: boolean;
};

export default function Project({ projects }: Props) {
  const router = useRouter();
  const title = `Cozy World | Projects`;
  // if (!router.isFallback && !project?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  return (
    <>
      {router.isFallback ? (
        " Loading…"
      ) : (
        <>
          <Head>
            <title>{title}</title>
            {/* <meta property="og:image" content={project.ogImage.url} /> */}
          </Head>
          <div className={cx("container", "-list")}>
            <Header />
            <div className={cx("inner")}>
              <article className="mb-32">
                <SectionTitle title="Projects"></SectionTitle>
                <div className={cx("project_list")}>
                  <ProjectList projectList={projects}></ProjectList>
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
  const allProjects = getAllProjects(["title", "date", "slug", "author", "coverImage", "description", "ogImage"]);

  return {
    props: {
      projects: allProjects,
    },
  };
}
