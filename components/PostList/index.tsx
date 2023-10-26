import PostType from "@/interfaces/post";
import Link from "next/link";
import classNames from "classnames/bind";
import React from "react";
import style from "./PostList.module.scss";
import Image from "next/image";
import moment from "moment";

const cx = classNames.bind(style);

interface PostListProps {
  postList: PostType[];
}

export const PostList = ({ postList }: PostListProps) => {
  return (
    <div className={cx("post_list")}>
      {postList.map((post, i) => {
        const fromNow = moment(post.date, "YYYYMMDD-HH:mm:ss").fromNow();
        const date = String(fromNow).includes("hours") ? fromNow : moment(post.date).format("MMM D");
        return (
          <div className={cx("post_item")} key={i}>
            {/* <Link className={cx("thumbnail_wrap")} href={`/${lang}/posts/${post.category}/${post.slug}`} aria-label={post.title}>
              <Image src={post.coverImage} className={cx("thumbnail")} alt={post.title} width={100} height={100} />
            </Link> */}
            <div className={cx("text_area")}>
              <Link className={cx("link")} href={`/posts/${post.category}/${post.slug}`}>
                <strong className={cx("title")}>{post.title}</strong>
                {/* <p className={cx("description")}>{post.description}</p> */}
              </Link>
              <ul className={cx("tag_list")}>
                {post.tag.map((tag, i) => (
                  <li className={cx("tag_item")} key={i}>
                    <Link className={cx("tag_link")} href={`/tags/${tag}`}>
                      <span>#</span>
                      {tag}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={cx("meta")}>
                <span className={cx("date")}>{date}</span>
                <span className={cx("reading_time")}>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
