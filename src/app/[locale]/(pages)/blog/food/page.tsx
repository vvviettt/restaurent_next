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
import { useSearchParams } from "next/navigation";

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
  const populars = await getAllPupulars();
  const postsData = await getAllPosts();

  return (
    <>
      <div id="tst-dynamic-banner" className="tst-dynamic-banner">
        <PageBanner
          pageTitle={"Our Blog"}
          description={
            "Porro eveniet, autem ipsam corrupti consectetur cum. <br>Repudiandae dignissimos fugiat sit nam."
          }
          breadTitle={"Food Blog"}
        />
      </div>
      <div id="tst-dynamic-content" className="tst-dynamic-content">
        <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-60">
              <ScrollHint />

              <div className="row">
                <div className="col-lg-12">
                  {/* title */}
                  <div className="text-center">
                    <div className="tst-suptitle tst-suptitle-center tst-mb-15">
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

              <FoodBlogs posts={postsData.posts} />
              <Pagination
                currentPage={
                  !searchParams.page ? 1 : Number.parseInt(searchParams.page)
                }
                totalItems={postsData.totalPosts}
                perPage={AppData.settings.perPage}
                renderPageLink={(page) => `/blog/food?page=${page}`}
              />
              {/* <Divider onlyBottom={0} />
              <Suspense fallback={<div>Loading...</div>}>
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
export default FoodBlog;

async function getAllPupulars() {
  const popularsData = await getFeaturedPostsData(PopularsPostsData.featured);

  return popularsData;
}

async function getAllPosts() {
  const posts = Array.from({ length: 8 }, (_, index) => {
    return {
      id: index,
      name: "Soup lẩu hải sản thập cẩm",
      image:
        "https://ngochuong.vn/upload/image/cache/data/Nhung/Menu/IMG8970-108-crop-350-350.jpg",
    };
  });

  return {
    posts: posts,
    totalPosts: 12,
  };
}
