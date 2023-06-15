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
        console.log(post);
        return (
          <Link href={`/posts/${post.slug}`} className={cx("post_item")} key={i}>
            <Image src={post.author.picture} alt="" width={100} height={100}></Image>
            <Image src={post.coverImage} alt="" width={100} height={100}></Image>
            {post.title}
          </Link>
        );
      })}
    </div>
  );
};

export default PostList;
