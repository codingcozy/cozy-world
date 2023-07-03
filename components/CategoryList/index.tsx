import React from "react";
import style from "./CategoryList.module.scss";
import classnames from "classnames/bind";
import Link from "next/link";
import { useRouter } from "next/router";

const cx = classnames.bind(style);

interface CategoryListProps {
  categoryList: string[];
}

export const CategoryList = ({ categoryList }: CategoryListProps) => {
  const router = useRouter();

  return (
    <ul className={cx("category_list")}>
      {categoryList.map((category: string) => (
        <li className={cx("category_item")}>
          <Link className={cx("link")} href={`/${router.query.lang}/posts/${category}`}>
            <span>{category}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
