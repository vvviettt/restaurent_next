import React from "react";
import dynamic from "next/dynamic";
import AppData from "@data/app.json";
import ScrollHint from "@layouts/scroll-hint/Index";
import Pagination from "@components/Pagination";
import { strapiApiRequest } from "@/src/app/_lib/strapi";
import { getLocale } from "next-intl/server";

const FoodBlogs = dynamic(() => import("@components/blog/FoodBlogs"), {
  ssr: false,
});

export const metadata = {
  title: {
    default: "Blog",
  },
  description: AppData.settings.siteDescription,
};

async function FoodBlog({ searchParams }) {
  const pageSize = 8;
  const locale = await getLocale();
  const content = await getBlogsData(locale, searchParams?.page, pageSize);
  const pageData = await getPageContentData(locale);

  const totalPage = Math.ceil(
    (content?.meta?.pagination?.total ?? 0) / pageSize
  );
  let foodBlogData = content.data.map((item) => ({
    id: item.id,
    name: item.attributes.title,
    image: item.attributes.thumbnail.data.attributes.formats.thumbnail.url,
    slug: item.attributes.slug,
  }));
  return (
    <>
      <div id="tst-dynamic-banner" className="tst-dynamic-banner">
        <div style={{ height: "150px" }}></div>
      </div>
      <div id="tst-dynamic-content" className="tst-dynamic-content">
        <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-60">
              <ScrollHint />

              <div className="row ">
                <div className="col-lg-12">
                  {/* title */}
                  <div className="text-center">
                    <div
                      className="tst-suptitle tst-suptitle-center tst-mb-15"
                      style={{ marginTop: "30px" }}
                    >
                      {pageData?.data?.attributes?.name}
                    </div>
                    <h3 className="tst-mb-30">
                      {pageData?.data?.attributes?.title}
                    </h3>
                    <p
                      className="tst-text tst-mb-60 "
                      dangerouslySetInnerHTML={{
                        __html: pageData?.data?.attributes?.desc,
                      }}
                    ></p>
                  </div>
                  {/* title end */}
                </div>
              </div>

              <FoodBlogs posts={foodBlogData} />
              {totalPage > 1 && (
                <Pagination
                  currentPage={
                    !searchParams.page ? 1 : Number.parseInt(searchParams.page)
                  }
                  totalItems={content.meta.pagination.total}
                  perPage={pageSize}
                  renderPageLink={(page) => `/blog/food?page=${page}`}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FoodBlog;

async function getBlogsData(locale, page = 1, size) {
  let foodBlogData = await strapiApiRequest(
    `food-blog?locale=${locale}&populate[0]=title&populate[1]=thumbnail&populate[2]=content&pagination[page]=${page}&pagination[pageSize]=${size}`,
    undefined,
    undefined
    // {
    //   next: {
    //     revalidate: 60 * 10,
    //   },
    // }
  );

  return foodBlogData;
}

async function getPageContentData(locale) {
  let content = await strapiApiRequest(
    `food-blog-content?locale=${locale}&populate=*`,
    undefined,
    undefined
    // {
    //   next: {
    //     revalidate: 60 * 10,
    //   },
    // }
  );

  return content;
}
