import React from "react";
import style from "./Header.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(style);

const Header = () => {
  return (
    <header className={cx("header")}>
      <h1 className={cx("title")}>Cozy World</h1>
    </header>
  );
};

export default Header;
