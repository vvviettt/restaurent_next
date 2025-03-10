import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";

import AppData from "@data/app.json";

import ScrollHint from "@layouts/scroll-hint/Index";
import Divider from "@layouts/divider/Index";

import AboutSection from "@components/sections/About";
import FeaturesSection from "@components/sections/Features";
import ScheduleSection from "@components/sections/Schedule";
import CountersSection from "@components/sections/Counters";
import CallToActionSection from "@components/sections/CallToAction";
import LatestPostsSection from "@components/sections/LatestPosts";
import SubscribeSection from "@components/sections/Subscribe";

const HeroSlider = dynamic(() => import("@components/sliders/Hero"), {
  ssr: false,
});
const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: false }
);

export const metadata = {
  title: {
    default: "Home",
  },
  description: AppData.settings.siteDescription,
};

async function Home() {
  const posts = await getAllPosts();

  return (
    <>
      <div id="tst-dynamic-banner" className="tst-dynamic-banner">
        <HeroSlider />
      </div>
      <div id="tst-dynamic-content" className="tst-dynamic-content">
        <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-0">
              <ScrollHint />
              <AboutSection />
              <Divider />
              <FeaturesSection />
              <div class="container text-center my-5">
                <h2 class="text-danger fw-bold mb-5">Menu</h2>
                <div class="row g-4">
                  <a class="col-12 col-md-4 col-lg-3" href="<%= food.blogUrl %>">
                    <div class="menu-item">
                      <div class="menu-item--image">
                        <img
                          src="https://ngochuong.vn/upload/image/cache/data/Nhung/Feedback/Soup-tom-thai-822-crop-350-350.jpg"
                          class="img-fluid rounded-fulll ratio-1x1 rounded-circle border menu-img zoom"
                          alt="Món ăn"
                        />
                      </div>
                      <div className="my-4">
                        <h5>SOUP TÔM THÁI</h5>
                      </div>
                    </div>
                  </a>
                  <a class="col-12 col-md-4 col-lg-3" href="<%= food.blogUrl %>">
                    <div class="menu-item">
                      <div class="menu-item--image">
                        <img
                          src="https://ngochuong.vn/upload/image/cache/data/Nhung/Menu/IMG8970-108-crop-350-350.jpg"
                          class="img-fluid rounded-fulll ratio-1x1 rounded-circle border menu-img zoom"
                          alt="Món ăn"
                        />
                      </div>
                      <div className="my-4">
                        <h5>SOUP LẨU HẢI SẢN THẬP CẨM</h5>
                      </div>
                    </div>
                  </a>
                  <a class="col-12 col-md-4 col-lg-3" href="<%= food.blogUrl %>">
                    <div class="menu-item">
                      <div class="menu-item--image">
                        <img
                          src="https://ngochuong.vn/upload/image/cache/data/Nhung/Menu/IMG9018-620-crop-350-350.jpg"
                          class="img-fluid rounded-fulll ratio-1x1 rounded-circle border menu-img zoom"
                          alt="Món ăn"
                        />
                      </div>
                      <div className="my-4">
                        <h5>SALAD RONG NHO CÁ NGỪ</h5>
                      </div>
                    </div>
                  </a>
                  <a class="col-12 col-md-4 col-lg-3" href="<%= food.blogUrl %>">
                    <div class="menu-item">
                      <div class="menu-item--image">
                        <img
                          src="https://ngochuong.vn/upload/image/cache/data/Nhung/Do-uong/a9c0e4dcc7f53eab67e4-2d6-crop-350-350.jpg"
                          class="img-fluid rounded-fulll ratio-1x1 rounded-circle border menu-img zoom"
                          alt="Món ăn"
                        />
                      </div>
                      <div className="my-4">
                        <h5>RƯỢU VANG CHILE 1865</h5>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <Divider onlyBottom={0} />
              <Suspense fallback={<div>Loading...</div>}>
                <LatestPostsSection posts={posts} />
              </Suspense>
              <Divider />
              <ScheduleSection />
              {/* <CountersSection /> */}
            </div>
          </div>
        </div>
        {/* <CallToActionSection /> */}
      </div>
    </>
  );
}
export default Home;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}
