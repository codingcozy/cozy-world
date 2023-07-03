import React, { useEffect } from "react";
import ProjectItem from "../ProjectItem";
import style from "./ProjectList.module.scss";
import classnames from "classnames/bind";
import Project from "@/interfaces/project";

const cx = classnames.bind(style);

// const projectList: Project[] = [
//   {
//     title: "IPhone Calculator",
//     url: "https://making-challenge.netlify.app/1-iphone%20calculator/",
//     thumbnail: IphoneCalculatorThumbnail,
//   },
//   {
//     title: "Snake Game",
//     url: "https://making-challenge.netlify.app/2-snake%20game/",
//     thumbnail: SnakeGameThumbnail,
//   },
//   {
//     title: "Apple Pay",
//     url: "https://making-challenge.netlify.app/3-applepay/",
//     thumbnail: ApplePayThumbnail,
//   },
//   {
//     title: "Dino Game",
//     url: "https://making-challenge.netlify.app/4-dino%20game/",
//     thumbnail: DinoGameThumbnail,
//   },
//   {
//     title: "Whack-a-mole",
//     url: "https://making-challenge.netlify.app/5-whack-a-mole/",
//     thumbnail: WhackAMoleThumbnail,
//   },
//   {
//     title: "Cat Matching Game",
//     url: "https://making-challenge.netlify.app/6-Card_Matching_Game/",
//     thumbnail: CatMatchingGameThumbnail,
//   },
//   {
//     title: "Tetris Game",
//     url: "https://making-challenge.netlify.app/7-tetris_game/",
//     thumbnail: TetrisGameThumbnail,
//   },
//   {
//     title: "Flappy Bird Game",
//     url: "https://making-challenge.netlify.app/8-flappy_bird/",
//     thumbnail: FlappyBirdThumbnail,
//   },
//   {
//     title: "Instagram SignIn",
//     url: "https://making-challenge.netlify.app/9-Instagram_signin/",
//     thumbnail: InstagramSignInThumbnail,
//   },
//   {
//     title: "2048 Game",
//     url: "https://making-challenge.netlify.app/10-2048/",
//     thumbnail: Game2048Thumbnail,
//   },
//   {
//     title: "Pong Game",
//     url: "https://making-challenge.netlify.app/11-Pong_Game/",
//     thumbnail: PongGameThumbnail,
//   },

//   {
//     title: "Spinning Donut",
//     url: "https://making-challenge.netlify.app/12-Spinning_Donut/",
//     thumbnail: SpinningDonutThumbnail,
//   },
//   {
//     title: "Othello Game",
//     url: "https://making-challenge.netlify.app/13-Othello/",
//     thumbnail: OthelloThumbnail,
//   },

//   {
//     title: "Space Simulation",
//     url: "https://making-challenge.netlify.app/14-Space_simulation/",
//     thumbnail: SpaceSimulationThumbnail,
//   },
// ];

interface projectListProps {
  projectList: Project[];
  count?: number;
}

const ProjectList = ({ projectList, count }: projectListProps) => {
  if (count) {
    projectList = projectList.slice(0, count);
  }

  useEffect(() => {}, []);

  return (
    <>
      <ul className={cx("project_list")}>
        {projectList.map((project: Project, i: any) => (
          <ProjectItem key={i} project={project}></ProjectItem>
        ))}
      </ul>
    </>
  );
};

export default ProjectList;
