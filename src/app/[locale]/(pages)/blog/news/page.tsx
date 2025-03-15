import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";
import PopularsPostsData from "@data/sections/popular-posts.json";

import ScrollHint from "@layouts/scroll-hint/Index";
import Divider from "@layouts/divider/Index";

import Pagination from "@components/Pagination";
import PageBanner from "@components/PageBanner";
import PopularPosts from "@components/sections/PopularPosts";
import SubscribeSection from "@components/sections/Subscribe";

import { getPaginatedPostsData, getFeaturedPostsData } from "@library/posts";
import { strapiApiRequest } from "@/src/app/_lib/strapi";
import { getLocale } from "next-intl/server";

const BlogPaginated = dynamic(() => import("@components/blog/BlogPaginated"), {
  ssr: false,
});

export const metadata = {
  title: {
    default: "Blog",
  },
  description: AppData.settings.siteDescription,
};

async function NewsBlog({ searchParams }) {
  const pageSize = 6;
  const locale = await getLocale();
  const content = await getContentDataNews(locale, searchParams.page, pageSize);
  const totalPage = Math.ceil(
    (content?.meta?.pagination?.total ?? 0) / pageSize
  );
  let newBlogData = content.data.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    content: item.attributes.desc,
    image: item.attributes.thumbnail.data.attributes.url,
  }));

  return (
    <>
    <div style={{height: "150px"}}></div>
      <div id="tst-dynamic-content" className="tst-dynamic-content">
        <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-60">
              {/* <ScrollHint /> */}

              <div className="row">
                <div className="col-lg-12">
                  {/* title */}
                  <div className="text-center">
                    <div className="tst-suptitle tst-suptitle-center tst-mb-15" style={{marginTop: "30px"}}>
                      Newsletter
                    </div>
                    <h3 className="tst-mb-30">Latest publications</h3>
                    <p className="tst-text tst-mb-60">
                      Porro eveniet, autem ipsam corrupti consectetur cum.{" "}
                      <br />
                      Repudiandae dignissimos fugiat sit nam.
                    </p>
                  </div>
                  {/* title end */}
                </div>
              </div>

              <BlogPaginated items={newBlogData.reverse()} columns={undefined} />
              {totalPage > 1 && (
                <Pagination
                  currentPage={content.meta.pagination.page}
                  totalItems={content.meta.pagination.total}
                  perPage={pageSize}
                  renderPageLink={(page) => `/blog/page/${page}`}
                />
              )}
              {/* <Divider onlyBottom={0} /> */}
              {/* <Suspense fallback={<div>Loading...</div>}>
                <PopularPosts posts={populars} />
              </Suspense>
              <Divider onlyBottom={0} />
              <SubscribeSection /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewsBlog;

async function getContentDataNews(locale, page = 1, size) {
  let newBlogData = await strapiApiRequest(
    `news-blogs?locale=${locale}&populate[0]=title&populate[2]=content&populate[1]=thumbnail&pagination[page]=${page}&pagination[pageSize]=${size}`
  );

  return newBlogData;
}
