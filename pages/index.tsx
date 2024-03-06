import Head from "next/head";
import Header from "@/components/Header";
import ProjectList from "@/components/ProjectList";
import style from "./index.module.scss";
import classnames from "classnames/bind";
import PostList from "@/components/PostList";
import { getAllProjects, getPosts } from "../lib/api";
import PostType from "@/interfaces/post";
import SectionTitle from "@/components/SectionTitle";
import Project from "@/interfaces/project";
import Section from "@/components/Section";
import CustomHead from "@/components/CustomHead";

const cx = classnames.bind(style);

interface HomeProps {
  allPosts: PostType[];
  allProjects: Project[];
}

export default function Home({ allPosts, allProjects }: HomeProps) {
  return (
    <>
      <CustomHead type="home" />
      <main className={cx("container")}>
        <Header />
        <div className={cx("content")}>
          <Section title="Projects" moreLink="/projects">
            <ProjectList projectList={allProjects} count={6} />
          </Section>
          <Section title="Posts" moreLink="/posts">
            <PostList postList={allPosts}></PostList>
          </Section>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = await getPosts({ fields: ["title", "date", "slug", "author", "coverImage", "description", "ogImage", "category", "tag", "readingTime"] });
  const allProjects = getAllProjects(["title", "date", "slug", "author", "coverImage", "description", "ogImage"]);
  return {
    props: { allPosts, allProjects },
  };
};
