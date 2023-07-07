import React from "react";
import style from "./CustomHead.module.scss";
import classnames from "classnames/bind";
import { LANG_LOCALE, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";
import { useRouter } from "next/router";
import Head from "next/head";
import PostType from "@/interfaces/post";

const cx = classnames.bind(style);

interface SectoinTitleProps {
  type: "home" | "post";
  post?: PostType;
}

export const CustomHead = ({ type, post }: SectoinTitleProps) => {
  const router = useRouter();
  let lang: string = "en";
  if (router.query.lang && typeof router.query.lang === "string") {
    lang = router.query.lang;
  }

  console.log(lang);

  if (type === "post" && post) {
    return (
      <Head>
        <title>{`${post.title} | ${SITE_NAME}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" data-gatsby-head="true" />

        {/* Facebook og Tags */}
        <meta property="og:url" content={`${SITE_URL}/${router.asPath}`} data-gatsby-head="true" />
        <meta property="og:type" content="website" data-gatsby-head="true" />
        <meta property="og:site_name" content={`${post.title} | ${SITE_NAME}`} data-gatsby-head="true" />
        <meta property="og:title" content={`${post.title} | ${SITE_NAME}`} data-gatsby-head="true" />
        <meta property="og:description" content={post.description} data-gatsby-head="true" />
        <meta property="og:image" content={post.ogImage.url} data-gatsby-head="true" />
        <meta property="og:locale" content={LANG_LOCALE[lang]} data-gatsby-head="true" />

        {/* twitter og Tags */}
        <meta name="twitter:card" content="summary_large_image" data-gatsby-head="true" />
        <meta property="twitter:domain" content="cozy-coder.com" data-gatsby-head="true" />
        <meta property="twitter:url" content={`${SITE_URL}/${router.asPath}`} data-gatsby-head="true" />
        <meta name="twitter:title" content={`${post.title} | ${SITE_NAME}`} data-gatsby-head="true" />
        <meta name="twitter:description" content={post.description} data-gatsby-head="true" />
        <meta name="twitter:image" content={post.ogImage.url} data-gatsby-head="true" />
        <meta name="twitter:label1" content={post.category} data-gatsby-head="true" />
        <meta name="twitter:data1" content={`Dev | ${SITE_NAME}`} data-gatsby-head="true" />
        <meta name="article:published_time" content={post.date} data-gatsby-head="true" />
      </Head>
    );
  } else {
    return (
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" data-gatsby-head="true" />
        <meta name="description" content={SITE_DESCRIPTION[lang]} />

        {/* Facebook og Tags */}
        <meta property="og:url" content={`${SITE_URL}/${router.asPath}`} data-gatsby-head="true" />
        <meta property="og:type" content="website" data-gatsby-head="true" />
        <meta property="og:site_name" content={SITE_NAME} data-gatsby-head="true" />
        <meta property="og:title" content={SITE_NAME} data-gatsby-head="true" />
        <meta property="og:description" content={SITE_DESCRIPTION[lang]} data-gatsby-head="true" />

        <meta property="og:image" content={"/assets/favicons/site_thumbnail.png"} data-gatsby-head="true" />
        <meta property="og:locale" content={LANG_LOCALE[lang]} data-gatsby-head="true" />

        {/* twitter og Tags */}
        <meta name="twitter:card" content="summary_large_image" data-gatsby-head="true" />
        <meta property="twitter:domain" content="cozy-coder.com" data-gatsby-head="true" />
        <meta property="twitter:url" content={`${SITE_URL}/${router.asPath}`} data-gatsby-head="true" />
        <meta name="twitter:title" content={SITE_NAME} data-gatsby-head="true" />
        <meta name="twitter:description" content={SITE_DESCRIPTION[lang]} data-gatsby-head="true" />
        <meta name="twitter:image" content={"/assets/favicons/site_thumbnail.png"} data-gatsby-head="true" />
        <meta name="twitter:data1" content={`Dev | ${SITE_NAME}`} data-gatsby-head="true" />
      </Head>
    );
  }
};

export default CustomHead;
