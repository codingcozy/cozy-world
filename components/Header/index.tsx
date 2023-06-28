import React from "react";
import style from "./Header.module.scss";
import classnames from "classnames/bind";
import Link from "next/link";

const cx = classnames.bind(style);

const Header = () => {
  return (
    <header className={cx("header")}>
      <div className={cx("inner")}>
        <h1 className={cx("title")}>
          <Link href={"/"}>Cozy World</Link>
        </h1>
        <nav className={cx("nav_area")}>
          <Link href={"/posts"} className={cx("nav_item")}>
            Posts
          </Link>
          <Link href={"/projects"} className={cx("nav_item")}>
            Projects
          </Link>
          <Link href={"/about"} className={cx("nav_item")}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
