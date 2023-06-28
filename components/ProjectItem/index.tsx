import React from "react";
import style from "./ProjectItem.module.scss";
import classnames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import Project from "@/interfaces/project";

const cx = classnames.bind(style);
interface ProjectItemProps {
  project: Project;
}

const ProjectItem = ({ project }: ProjectItemProps) => {
  return (
    <Link href={`/projects/${project.slug}`} className={cx("project_card")}>
      {/* <a href={project.url} className={cx("project_card")}> */}
      <div className={cx("thumbnail_wrap")}>
        <Image src={project.coverImage} alt="" className={cx("thumbnail")} width={100} height={100}></Image>
      </div>
      <div className={cx("content")}>
        <strong className={cx("title")}>{project.title}</strong>
      </div>
      {/* <p className="description">...</p> */}
      {/* <iframe src={project.url} className={cx("project_iframe")}></iframe> */}
      {/* </a> */}
    </Link>
  );
};

export default ProjectItem;
