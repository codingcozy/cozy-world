import React from "react";
import ProjectItem from "../ProjectItem";
import style from "./ProjectList.module.scss";
import classnames from "classnames/bind";
import IphoneCalculatorThumbnail from "./fixture/01_iphone_caculator-thumbnail.png";
import SnakeGameThumbnail from "./fixture/02_snake_game-thumbnail.png";
import ApplePayThumbnail from "./fixture/03_applepay-thumbnail.png";
import DinoGameThumbnail from "./fixture/04_dino_game-thumbnail.png";
import WhackAMoleThumbnail from "./fixture/05_whack_a_mole-thumbnail.png";
import CatMatchingGameThumbnail from "./fixture/06_cat_matching_game-thumbnail.png";
import TetrisGameThumbnail from "./fixture/07_tetris_game-thumbnail.png";
import FlappyBirdThumbnail from "./fixture/08_flappy_bird-thumbnail.png";
import InstagramSignInThumbnail from "./fixture/09_Instagram_signin-thumbnail.png";
import Game2048Thumbnail from "./fixture/10_2048_game-thumbnail.png";
import PongGameThumbnail from "./fixture/11_pong_game-thumbnail.png";
import SpinningDonutThumbnail from "./fixture/12_spinning_donut-thumbnail.png";
import OthelloThumbnail from "./fixture/13_othello-thumbnail.png";
import SpaceSimulationThumbnail from "./fixture/14_space_simulation-thumbnail.png";

const cx = classnames.bind(style);

export interface Project {
  title: string;
  url?: string;
  thumbnail?: any;
}

const ProjectList = () => {
  const projectUrlList: Project[] = [
    {
      title: "IPhone Calculator",
      url: "https://making-challenge.netlify.app/1-iphone%20calculator/",
      thumbnail: IphoneCalculatorThumbnail,
    },
    {
      title: "Snake Game",
      url: "https://making-challenge.netlify.app/2-snake%20game/",
      thumbnail: SnakeGameThumbnail,
    },
    {
      title: "Apple Pay",
      url: "https://making-challenge.netlify.app/3-applepay/",
      thumbnail: ApplePayThumbnail,
    },
    {
      title: "Dino Game",
      url: "https://making-challenge.netlify.app/4-dino%20game/",
      thumbnail: DinoGameThumbnail,
    },
    {
      title: "Whack-a-mole",
      url: "https://making-challenge.netlify.app/5-whack-a-mole/",
      thumbnail: WhackAMoleThumbnail,
    },
    {
      title: "Cat Matching Game",
      url: "https://making-challenge.netlify.app/6-Card_Matching_Game/",
      thumbnail: CatMatchingGameThumbnail,
    },
    {
      title: "Tetris Game",
      url: "https://making-challenge.netlify.app/7-tetris_game/",
      thumbnail: TetrisGameThumbnail,
    },
    {
      title: "Flappy Bird Game",
      url: "https://making-challenge.netlify.app/8-flappy_bird/",
      thumbnail: FlappyBirdThumbnail,
    },
    {
      title: "Instagram SignIn",
      url: "https://making-challenge.netlify.app/9-Instagram_signin/",
      thumbnail: InstagramSignInThumbnail,
    },
    {
      title: "2048 Game",
      url: "https://making-challenge.netlify.app/10-2048/",
      thumbnail: Game2048Thumbnail,
    },
    {
      title: "Pong Game",
      url: "https://making-challenge.netlify.app/11-Pong_Game/",
      thumbnail: PongGameThumbnail,
    },

    {
      title: "Spinning Donut",
      url: "https://making-challenge.netlify.app/12-Spinning_Donut/",
      thumbnail: SpinningDonutThumbnail,
    },
    {
      title: "Othello Game",
      url: "https://making-challenge.netlify.app/13-Othello/",
      thumbnail: OthelloThumbnail,
    },

    {
      title: "Space Simulation",
      url: "https://making-challenge.netlify.app/14-Space_simulation/",
      thumbnail: SpaceSimulationThumbnail,
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
