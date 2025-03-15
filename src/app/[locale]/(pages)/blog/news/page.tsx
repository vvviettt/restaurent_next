import React from "react";
import dynamic from "next/dynamic";
import AppData from "@data/app.json";
import Pagination from "@components/Pagination";
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
  const pageContent = await getPageContentData(locale);
  const content = await getContentDataNews(locale, searchParams.page, pageSize);
  const totalPage = Math.ceil(
    (content?.meta?.pagination?.total ?? 0) / pageSize
  );
  let newBlogData = content.data.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    content: item.attributes.desc,
    image: item.attributes.thumbnail.data.attributes.url,
    slug: item.attributes.slug,
  }));

  return (
    <>
      <div style={{ height: "150px" }}></div>
      <div id="tst-dynamic-content" className="tst-dynamic-content">
        <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-60">
              {/* <ScrollHint /> */}

              <div className="row">
                <div className="col-lg-12">
                  {/* title */}
                  <div className="text-center">
                    <div
                      className="tst-suptitle tst-suptitle-center tst-mb-15"
                      style={{ marginTop: "30px" }}
                    >
                      {pageContent?.data?.attributes?.name}
                    </div>
                    <h3 className="tst-mb-30">
                      {" "}
                      {pageContent?.data?.attributes?.title}
                    </h3>
                    <p
                      className="tst-text tst-mb-60"
                      dangerouslySetInnerHTML={{
                        __html: pageContent?.data?.attributes?.desc ?? "",
                      }}
                    />
                  </div>
                  {/* title end */}
                </div>
              </div>

              <BlogPaginated
                items={newBlogData.reverse()}
                columns={undefined}
              />
              {totalPage > 1 && (
                <Pagination
                  currentPage={content.meta.pagination.page}
                  totalItems={content.meta.pagination.total}
                  perPage={pageSize}
                  renderPageLink={(page) => `/blog/page/${page}`}
                />
              )}
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

async function getPageContentData(locale) {
  let content = await strapiApiRequest(
    `news-blog-content?locale=${locale}&populate=*`,
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
