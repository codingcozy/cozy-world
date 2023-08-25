import React, { useState } from "react";
import style from "./Header.module.scss";
import classnames from "classnames/bind";
import Link from "next/link";
import { useRouter } from "next/router";
import { DropdownSelectView } from "../DropdownSelectView";
import { LANG_LIST } from "@/lib/constants";

const cx = classnames.bind(style);

const Header = () => {
  const router = useRouter();
  const [showOption, setShowOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState<any>(router.query.lang);

  const onClickOption = (lang: string) => {
    if (router.query.lang !== lang) {
      router.push({ query: { ...router.query, lang } });
      setSelectedOption(lang);
    }
    setShowOption(false);
  };

  const onClickSelect = () => {
    setShowOption(true);
  };

  return (
    <header className={cx("header")}>
      <div className={cx("inner")}>
        <strong className={cx("title")}>
          <Link href={`/${router.query.lang}`}>Cozy Coder</Link>
        </strong>
        <nav className={cx("nav_area")}>
          <Link href={`/${router.query.lang}/posts`} className={cx("nav_item")}>
            Posts
          </Link>
          <Link href={`/${router.query.lang}/projects`} className={cx("nav_item")}>
            Projects
          </Link>
          <div className={cx("nav_item")}>
            <DropdownSelectView selectedOption={selectedOption} showOptions={showOption} optionList={LANG_LIST.map((lang) => ({ value: lang }))} onClickSelect={onClickSelect} onClickOption={onClickOption}></DropdownSelectView>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
