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
  const populars = await getAllPupulars();
  const locale = await getLocale();
  const postData = await getSinglePostData(slug, locale);
  if (!postData) {
    return notFound();
  }

  let singlePostData = {
    title: postData.attributes?.title,
    date: postData.attributes?.createdAt,
    content: postData.attributes?.content,
    image: postData.attributes?.thumbnail?.data?.attributes?.url || "",
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
                    <div class="tst-post-author">
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
                      __html: postData.contentHtml || "",
                    }}
                  />

                  <div className="tst-spacer"></div>

                  <div className="row">
                    <div className="col-lg-6">
                      <div className="tst-categories">
                        {/* <span>Categories:</span>
                        {postData.categories.map((category, key) => (
                          <Link
                            href={`/blog/category/${category
                              .toLowerCase()
                              .replaceAll(" ", "-")}`}
                            key={`post-category-${key}`}
                          >
                            {category}
                          </Link>
                        ))} */}
                      </div>
                    </div>
                    {/* <div className="col-lg-6 text-right">
                      <div className="tst-tags">
                        <span>Tags:</span>
                        {postData.tags.map((tag, key) => (
                          <Link
                            href={`/blog/tag/${tag
                              .toLowerCase()
                              .replaceAll(" ", "-")}`}
                            key={`post-tag-${key}`}
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div> */}
                  </div>

                  {/* <div className="tst-spacer"></div>

                  <h5 className="tst-mb-60">Comments</h5> */}

                  <ul className="tst-comments-list">
                    {/* {CommentsData[postData.id].map((item, key) => (
                      <li key={`comment-item-${key}`}>
                        <div className="tst-comment-avatar">
                          <img src={item.avatar} alt={item.name} />
                        </div>
                        <div className="tst-comment-box">
                          <div className="tst-comment-head">
                            <h6>
                              <span className="tst-anima-link">
                                {item.name}
                              </span>
                            </h6>
                            <div className="tst-date">{item.date}</div>
                          </div>
                          <div
                            className="tst-comment-content tst-text"
                            dangerouslySetInnerHTML={{ __html: item.text }}
                          />
                        </div>
                        {item.child.length >= 0 && (
                          <ul className="tst-comments-list tst-reply-list">
                            {item.child.map((child, child_key) => (
                              <li key={`comment-item-${key}-${child_key}`}>
                                <div className="tst-comment-avatar">
                                  <img src={child.avatar} alt={child.name} />
                                </div>
                                <div className="tst-comment-box">
                                  <div className="tst-comment-head">
                                    <h6>
                                      <span className="tst-anima-link">
                                        {child.name}
                                      </span>
                                    </h6>
                                    <div className="tst-date">{child.date}</div>
                                  </div>
                                  <div
                                    className="tst-comment-content tst-text"
                                    dangerouslySetInnerHTML={{
                                      __html: child.text,
                                    }}
                                  />
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))} */}
                  </ul>

                  {/* <div className="tst-spacer"></div> */}
                </div>
              </div>

              {/* <Divider onlyBottom={0} />
              <Suspense fallback={<div>Loading...</div>}>
                <PopularPosts posts={populars} />
              </Suspense> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PostsDetail;

async function getAllPupulars() {
  const popularsData = await getFeaturedPostsData(PopularsPostsData.featured);

  return popularsData;
}

async function getSinglePostData(slug, locale) {
  let data = await strapiApiRequest(
    `news-blogs?filters[slug][$eq]=${slug}&locale=${locale}&populate[0]=title&populate[1]=thumbnail&populate[2]=content`
  );
  return data.data[0];
}
