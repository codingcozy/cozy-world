import React from "react";
import ProjectItem from "../ProjectItem";
import style from "./ProjectList.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(style);

export interface Project {
  title: string;
  url?: string;
}

const ProjectList = () => {
  const projectUrlList: Project[] = [
    {
      title: "IPhone Calculator",
      url: "https://making-challenge.netlify.app/1-iphone%20calculator/",
    },
    {
      title: "Snake Game",
      url: "https://making-challenge.netlify.app/2-snake%20game/",
    },
    {
      title: "Apple Pay",
      url: "https://making-challenge.netlify.app/3-applepay/",
    },
    {
      title: "Dino Game",
      url: "https://making-challenge.netlify.app/4-dino%20game/",
    },
    {
      title: "Whack-a-mole",
      url: "https://making-challenge.netlify.app/5-whack-a-mole/",
    },
    {
      title: "Cat Matching Game",
      url: "https://making-challenge.netlify.app/6-Card_Matching_Game/",
    },
    {
      title: "Tetris Game",
      url: "https://making-challenge.netlify.app/7-tetris_game/",
    },
    {
      title: "Flappy Bird Game",
      url: "https://making-challenge.netlify.app/8-flappy_bird/",
    },
    {
      title: "Instagram SignIn",
      url: "https://making-challenge.netlify.app/9-Instagram_signin/",
    },
    {
      title: "2048 Game",
      url: "https://making-challenge.netlify.app/10-2048/",
    },
    {
      title: "Pong Game",
      url: "https://making-challenge.netlify.app/11-Pong_Game/",
    },
  ];

  return (
    <ul className={cx("project_list")}>
      {projectUrlList.map((project: Project, i: any) => (
        <ProjectItem key={i} project={project}></ProjectItem>
      ))}
    </ul>
  );
};

export default ProjectList;
