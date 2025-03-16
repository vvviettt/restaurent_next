import React, { Suspense } from "react";
import {
  getAllPostsIds,
  getPostData,
  getFeaturedPostsData,
} from "@library/posts";
import { getAuthorData } from "@library/authors";

import { Link, usePathname } from "@i18n/navigation";
import Date from "@library/date";

import { notFound } from "next/navigation";

import PageBanner from "@components/PageBanner";
import PopularPosts from "@components/sections/PopularPosts";

import ScrollHint from "@layouts/scroll-hint/Index";
import Divider from "@layouts/divider/Index";

import PopularsPostsData from "@data/sections/popular-posts.json";
import CommentsData from "@data/comments.json";
import { strapiApiRequest } from "@/src/app/_lib/strapi";
import { getLocale } from "next-intl/server";

async function PostsDetail({ params }) {
  const { slug } = params;
  const locale = await getLocale();
  const postData = await getSinglePostData(slug, locale);

  if (!postData) {
    return notFound();
  }
  let singlePostData = {
    title: postData?.attributes?.title,
    date: postData?.attributes?.createdAt,
    content: postData?.attributes?.content,
    image: postData?.attributes?.thumbnail?.data?.attributes?.url || "",
  };

  return (
    <>
      <div style={{ height: "120px" }}></div>
      <div id="tst-dynamic-content" className="tst-dynamic-content">
        <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-60">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tst-post-bottom tst-mb-30">
                    <div className="tst-post-author">
                      <h5>{singlePostData.title}</h5>
                    </div>
                  </div>

                  <div className="tst-about-cover tst-video-cover tst-mb-60">
                    <img
                      src={`${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${singlePostData.image}`}
                      alt={singlePostData.title}
                      className="tst-cover animateme"
                      data-when="span"
                      data-from="-1"
                      data-to="2"
                      data-easing="easeinout"
                      data-scale="1.2"
                    />
                  </div>

                  <div
                    className="tst-text tst-blog-content"
                    dangerouslySetInnerHTML={{
                      __html: singlePostData.content || "",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PostsDetail;

async function getSinglePostData(slug, locale) {
  try {
    let data = await strapiApiRequest(
      `food-blog?filters[slug][$eq]=${slug}&locale=${locale}&populate[0]=title&populate[1]=thumbnail&populate[2]=content`
    );

    return data.data[0];
  } catch (error) {
    return null;
  }
}
