import PostType from "@/interfaces/post";
import Link from "next/link";
import classNames from "classnames/bind";
import React from "react";
import style from "./PostList.module.scss";
import Image from "next/image";

const cx = classNames.bind(style);

interface PostListProps {
  postList: PostType[];
}

export const PostList = ({ postList }: PostListProps) => {
  return (
    <div className={cx("post_list")}>
      {postList.map((post, i) => {
        return (
          <Link href={`/posts/${post.slug}`} className={cx("post_item")} key={i}>
            <div className={cx("thumbnail_wrap")}>
              <Image src={post.coverImage} className={cx("thumbnail")} alt="" width={100} height={100} />
            </div>
            <div className={cx("text_area")}>
              <strong className={cx("title")}>{post.title}</strong>
              <p className={cx("description")}>{post.description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default PostList;
