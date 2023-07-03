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

const cx = classnames.bind(style);

interface HomeProps {
  allPosts: PostType[];
  allProjects: Project[];
}

export default function Home({ allPosts, allProjects }: HomeProps) {
  const router = useRouter();
  console.log();

  if (router.isFallback) {
    return <>loadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloadingloading</>;
  }

  return (
    <>
      <Head>
        <title>Cozy world</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
  const allPosts = await getPosts({ fields: ["title", "date", "slug", "author", "coverImage", "description", "ogImage", "category", "tag"], lang: params.lang });
  const allProjects = getAllProjects(["title", "date", "slug", "author", "coverImage", "description", "ogImage"]);
  console.log(allPosts);
  return {
    props: { allPosts, allProjects },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          lang: "ko",
        },
      },
      {
        params: {
          lang: "en",
        },
      },
      {
        params: {
          lang: "jp",
        },
      },
      ,
    ],
    fallback: true,
  };
}
