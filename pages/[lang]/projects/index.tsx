import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getProjectBySlug, getAllProjects } from "../../../lib/api";
import Head from "next/head";
import { CMS_NAME, LANG_LIST } from "../../../lib/constants";
import markdownToHtml from "../../../lib/markdownToHtml";
import type ProjectType from "../../../interfaces/project";
import Header from "@/components/Header";
import style from "./projects.module.scss";
import classnames from "classnames/bind";
import ProjectList from "@/components/ProjectList";
import SectionTitle from "@/components/SectionTitle";
import CustomHead from "@/components/CustomHead";

const cx = classnames.bind(style);

type Props = {
  projects: ProjectType[];
  moreProjects: ProjectType[];
  preview?: boolean;
};

export default function Project({ projects }: Props) {
  const router = useRouter();
  const title = `Cozy Coder | Projects`;
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

export async function getStaticPaths() {
  return {
    paths: LANG_LIST.map((lang) => ({
      params: {
        lang,
      },
    })),
    fallback: false,
  };
}
