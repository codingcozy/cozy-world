import React, { useEffect, useState } from "react";
import style from "./AmazonBanner.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(style);

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const AmazonBanner = () => {
  const [countdown, setCountdown] = useState(10);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (countdown > 0) {
      setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    }
  }, [countdown]);

  const onClickLink = () => {
    setIsClicked(true);
    document.body.style.overflow = "visible";
  };

  if (isClicked) {
    return <></>;
  }

  return (
    <div className={cx("amazon_wrap")}>
      <div className={cx("amazon_content")}>
        <a
          className={cx("amazon_link")}
          href="https://amzn.to/4fMfjrh"
          target="_blank"
          onClick={onClickLink}
        >
          <span>{"Visit Amazon and check the code"}</span>
        </a>
        {countdown > 0 ? (
          <p className={cx("close_button")}>{countdown}</p>
        ) : (
          <button
            type="button"
            className={cx("close_button")}
            onClick={onClickLink}
          >
            <span className={cx("close_icon")}></span>
          </button>
        )}
      </div>
    </div>
  );
};

export default AmazonBanner;
