import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";
import { strapiApiRequest } from "@library/strapi";

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
import { getLocale } from "next-intl/server";
import FoodBlogs from "../../_components/sections/FoodBlogs";

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
  const locale = await getLocale();
  const content = await getContentData(locale);
  const foodData = await getFoodBlogs(locale);
  const newsData = await getNewsBlogs(locale);
  let foodBlogData = foodData.data.map((item) => ({
    id: item.id,
    name: item.attributes.title,
    image: item.attributes.thumbnail.data.attributes.url,
    slug: item.attributes.slug,
  }));

  let newBlogData = newsData.data.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    content: item.attributes.desc,
    image: item.attributes.thumbnail.data.attributes.url,
    slug: item.attributes.slug,
  }));

  return (
    <>
      <div id="tst-dynamic-banner" className="tst-dynamic-banner">
        <HeroSlider data={content?.data?.attributes?.banner} />
      </div>
      <div id="tst-dynamic-content" className="tst-dynamic-content">
        <div className="tst-content-frame">
          <div className="tst-content-box">
            <div className="container tst-p-60-0">
              <ScrollHint />
              <AboutSection data={content?.data?.attributes?.about} />
              <Divider />
              <FeaturesSection data={content?.data?.attributes?.outstanding} />
              <Divider />
              <Suspense fallback={<div>Loading...</div>}>
                <FoodBlogs
                  posts={foodBlogData}
                  data={content?.data?.attributes?.food_blogs}
                />
              </Suspense>
              <Divider onlyBottom={0} />
              <Suspense fallback={<div>Loading...</div>}>
                <LatestPostsSection
                  posts={newBlogData}
                  data={content?.data?.attributes?.news_blog}
                />
              </Suspense>
              <Divider />
              <ScheduleSection data={content?.data?.attributes?.open_time} />
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
  const allPosts = [];
  return allPosts;
}

async function getFoodBlogs(locale) {
  const dataFoodFive = await strapiApiRequest(
    `food-blog?locale=${locale}&populate[0]=title&populate[1]=thumbnail&populate[2]=content&pagination[pageSize]=4`,
    undefined,
    undefined,
    {
      next: { revalidate: 60 * 10 },
    }
  );

  return dataFoodFive;
}

async function getNewsBlogs(locale) {
  const dataNewsFive = await strapiApiRequest(
    `news-blogs?locale=${locale}&populate[0]=title&populate[1]=thumbnail&populate[2]=content&pagination[pageSize]=3&sort[0]=createdAt:desc`,
    undefined,
    undefined,
    {
      next: { revalidate: 60 * 10 },
    }
  );

  return dataNewsFive;
}

async function getContentData(locale) {
  const homeData = await strapiApiRequest(
    `home?locale=${locale}&populate[0]=about&populate[1]=about.social_media_links&populate[2]=about.social_media_links.icon&populate[3]=outstanding&populate[4]=outstanding.items&populate[5]=outstanding.items.icon&populate[6]=news_blog&populate[7]=food_blogs&populate[8]=open_time&populate[9]=open_time.buttons&populate[10]=banner&populate[11]=banner.image`,
    undefined,
    undefined,
    {
      next: { revalidate: 60 * 10 },
    }
  );

  return homeData;
}
