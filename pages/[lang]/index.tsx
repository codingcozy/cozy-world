import { useRouter } from "next/router";
import Head from "next/head";
import Header from "@/components/Header";
import style from "../index.module.scss";
import classnames from "classnames/bind";
import PostList from "@/components/PostList";
import SectionTitle from "@/components/SectionTitle";
import PostType from "@/interfaces/post";
import { getPosts, getPostCategories, getAllProjects } from "@/lib/api";
import Project from "@/interfaces/project";
import Section from "@/components/Section";
import ProjectList from "@/components/ProjectList";
import { LANG_LIST } from "@/lib/constants";
import CustomHead from "@/components/CustomHead";

const cx = classnames.bind(style);

interface HomeProps {
  allPosts: PostType[];
  allProjects: Project[];
}

export default function Home({ allPosts, allProjects }: HomeProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <>loadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloading</>;
  }

  return (
    <>
      <CustomHead type="home" />
      <main className={cx("container")}>
        <Header />
        <div className={cx("content")}>
          <Section title="Projects" moreLink={`${router.query.lang}/projects`}>
            <ProjectList projectList={allProjects} count={6} />
          </Section>
          <Section title="Posts" moreLink={`${router.query.lang}/posts`}>
            <PostList postList={allPosts}></PostList>
          </Section>
        </div>
      </main>
    </>
  );
}

type Params = {
  params: {
    lang: string;
  };
};
export async function getStaticProps({ params }: Params) {
  const allPosts = await getPosts({ fields: ["title", "readingTime", "date", "slug", "author", "coverImage", "description", "ogImage", "category", "tag"], lang: params.lang });
  const allProjects = getAllProjects(["title", "date", "slug", "author", "coverImage", "description", "ogImage"]);
  return {
    props: { allPosts, allProjects },
  };
}

export async function getStaticPaths() {
  return {
    paths: LANG_LIST.map((lang) => ({
      params: {
        lang,
      },
    })),
    fallback: true,
  };
}
