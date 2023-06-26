import React from "react";
import style from "./ProjectItem.module.scss";
import classnames from "classnames/bind";
import { Project } from "../ProjectList";
import Image from "next/image";
import Link from "next/link";

const cx = classnames.bind(style);
interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    // <Link href={`/projects/${project.slug}`} className={cx("project_card")} key={i}>
    <a href={project.url} className={cx("project_card")}>
      <div className={cx("thumbnail_wrap")}>
        <Image src={project.thumbnail} alt="" className={cx("thumbnail")}></Image>
      </div>
      <div className={cx("content")}>
        <strong className={cx("title")}>{project.title}</strong>
      </div>
      {/* <p className="description">...</p> */}
      {/* <iframe src={project.url} className={cx("project_iframe")}></iframe> */}
    </a>
    // </Link>
  );
};

export default ProjectItem;
