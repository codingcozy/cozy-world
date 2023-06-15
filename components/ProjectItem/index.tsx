import React from "react";
import style from "./ProjectItem.module.scss";
import classnames from "classnames/bind";
import { Project } from "../ProjectList";
import Image from "next/image";

const cx = classnames.bind(style);
interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <a href={project.url} className={cx("project_card")}>
      {/* <Image src={""} alt="" className={cx("thumbnail")}></Image> */}
      <strong className={cx("title")}>{project.title}</strong>
      {/* <p className="description">...</p> */}
      {/* <iframe src={project.url} className={cx("project_iframe")}></iframe> */}
    </a>
  );
};

export default ProjectItem;
