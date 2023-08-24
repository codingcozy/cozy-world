import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import Project from "@/interfaces/project";
import globby from "globby";

const postsDirectory = join(process.cwd(), "_posts");
const postsCategoryDirectory = (category: string) => join(process.cwd(), `_posts/${category}`);

export function getPostCategories() {
  return fs.readdirSync(postsDirectory);
}

export function getPostSlugs() {
  const categoryList = getPostCategories();
  let slugList: string[] = [];
  for (let i in categoryList) {
    slugList = [...slugList, ...fs.readdirSync(postsCategoryDirectory(categoryList[i]))];
  }
  return slugList;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getPostByFile(file: string, fields: string[] = []) {
  let fileNameText: any = file.split("/");
  const lang = fileNameText[fileNameText.length - 1].replace(/\.md$/, "");

  let fileName = fileNameText[fileNameText.length - 2];
  const realSlug = fileName.replace(/\.md$/, "");
  const fileContents = fs.readFileSync(file, "utf8");
  const { data, content } = matter(fileContents);
  type Items = {
    [key: string]: any;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }

    if (field === "lang") {
      items[field] = lang;
    }

    if (field === "content") {
      items[field] = content;
    }

    if (field === "readingTime") {
      items[field] = Math.ceil(content.length / 1000);
    }

    if (field === "tag") {
      items[field] = [...data[field].split(", ")];
      return;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

interface getPostsProps {
  category?: string;
  tag?: string;
  fields: string[];
  file?: string;
  lang?: string;
}

export async function getPosts({ category = "**", tag, file = "**", fields = [], lang }: getPostsProps) {
  // const slugs = getPostSlugs();
  // const posts = slugs
  //   .map((slug) => getPostBySlug(slug, fields))
  //   // sort posts by date in descending order
  //   .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  // return posts;
  const files = await globby([`_posts/${category}/${file}/${lang ? lang : "*"}.md`]);
  // console.log(files);
  let posts = files.map((file) => getPostByFile(file, fields)).sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  console.log(posts);
  if (tag) posts = posts.filter((post) => post.tag.includes(tag));
  return posts;
}

const projectsDirectory = join(process.cwd(), "_projects");

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export function getProjectBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: any;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

// export const projectList: Project[] = [
//   {
//     title: "IPhone Calculator",
//     url: "https://making-challenge.netlify.app/1-iphone%20calculator/",
//     coverImage: "/assets/projects/01_iphone_caculator-thumbnail.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=Pa5kbjgyWDk",
//   },
//   {
//     title: "Snake Game",
//     url: "https://making-challenge.netlify.app/2-snake%20game/",
//     coverImage: "/assets/projects/02_snake_game-thumbnail.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=ctQmwM2uxAI",
//   },
//   {
//     title: "Apple Pay",
//     url: "https://making-challenge.netlify.app/3-applepay/",
//     coverImage: "/assets/projects/03_applepay-thumbnail.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=rlY9HEleIuw",
//   },
//   {
//     title: "Dino Game",
//     url: "https://making-challenge.netlify.app/4-dino%20game/",
//     coverImage: "/assets/projects/04_dino_game-thumbnail.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=H27VDl2wq3o",
//   },
//   {
//     title: "Whack-a-mole",
//     url: "https://making-challenge.netlify.app/5-whack-a-mole/",
//     coverImage: "/assets/projects/05_whack_a_mole-thumbnail.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=eIdUuW0Gxp8",
//   },
//   {
//     title: "Cat Matching Game",
//     url: "https://making-challenge.netlify.app/6-Card_Matching_Game/",
//     coverImage: "/assets/projects/06_cat_matching_game-thumbnail.png",
//     youtubeUrl: "https://studio.youtube.com/video/oNW8BixUkQw/edit",
//   },
//   {
//     title: "Tetris Game",
//     url: "https://making-challenge.netlify.app/7-tetris_game/",
//     coverImage: "/assets/projects/07_tetris_game-thumbnail.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=iPNHzU7b2YQ",
//   },
//   {
//     title: "Flappy Bird Game",
//     url: "https://making-challenge.netlify.app/8-flappy_bird/",
//     coverImage: "/assets/projects/08_flappy_bird-thumbnail.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=RUlD_toxJv8",
//   },
//   {
//     title: "Instagram SignIn",
//     url: "https://making-challenge.netlify.app/9-Instagram_signin/",
//     coverImage: "/assets/projects/09_Instagram_signin-thumbnail.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=HIUh64cPRtw",
//   },
//   {
//     title: "2048 Game",
//     url: "https://making-challenge.netlify.app/10-2048/",
//     coverImage: "/assets/projects/10_2048_game-thumbnail.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=1XlCTghvAnM",
//   },
//   {
//     title: "Pong Game",
//     url: "https://making-challenge.netlify.app/11-Pong_Game/",
//     coverImage: "/assets/projects/11_pong_game-thumbnail.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=YthWTWX4Sy0",
//   },

//   {
//     title: "Spinning Donut",
//     url: "https://making-challenge.netlify.app/12-Spinning_Donut/",
//     coverImage: "/assets/projects/12_spinning_donut-thumbnail.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=4jBGzkPwiOk",
//   },
//   {
//     title: "Othello Game",
//     url: "https://making-challenge.netlify.app/13-Othello/",
//     coverImage: "/assets/projects/13_othello-thumbnail.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=npNoZIjWMO8",
//   },

//   {
//     title: "Space Simulation",
//     url: "https://making-challenge.netlify.app/14-Space_simulation/",
//     coverImage: "/assets/projects/14_space_simulation-thumbnail.png",
//     youtubeUrl: "https://www.youtube.com/watch?v=_QVOWzqdn3A",
//   },
// ];

export function getAllProjects(fields: string[] = []) {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug, fields))
    // sort projects by date in descending order
    .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));

  return projects;
}
