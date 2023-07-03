import React from "react";
import style from "./Header.module.scss";
import classnames from "classnames/bind";
import Link from "next/link";
import { useRouter } from "next/router";

const cx = classnames.bind(style);

const Header = () => {
  const router = useRouter();

  return (
    <header className={cx("header")}>
      <div className={cx("inner")}>
        <h1 className={cx("title")}>
          <Link href={`/${router.query.lang}`}>Cozy World</Link>
        </h1>
        <nav className={cx("nav_area")}>
          <Link href={`/${router.query.lang}/posts`} className={cx("nav_item")}>
            Posts
          </Link>
          <Link href={`/${router.query.lang}/projects`} className={cx("nav_item")}>
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
