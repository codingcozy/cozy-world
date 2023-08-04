import PostType from "@/interfaces/post";
import Link from "next/link";
import classNames from "classnames/bind";
import React from "react";
import style from "./PostList.module.scss";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";

const cx = classNames.bind(style);

interface PostListProps {
  postList: PostType[];
}

export const PostList = ({ postList }: PostListProps) => {
  const router = useRouter();
  const lang = router.query.lang;
  // const {
  //   query: { lang },
  // } = useRouter();

  return (
    <div className={cx("post_list")}>
      {postList.map((post, i) => {
        return (
          <div className={cx("post_item")} key={i}>
            <Link className={cx("thumbnail_wrap")} href={`/${lang}/posts/${post.category}/${post.slug}`} aria-label={post.title}>
              <Image src={post.coverImage} className={cx("thumbnail")} alt={post.title} width={100} height={100} />
            </Link>
            <div className={cx("text_area")}>
              <Link href={`/${lang}/posts/${post.category}/${post.slug}`}>
                <strong className={cx("title")}>{post.title}</strong>
                <p className={cx("description")}>{post.description}</p>
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
              <div className={cx("meta")}>{String(moment(post.date, "YYYYMMDD").fromNow()).includes("hours") ? moment(post.date, "YYYYMMDD").fromNow() : moment(post.date).format("MMM D")}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
