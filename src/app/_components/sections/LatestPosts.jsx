"use client";

import Data from "@data/sections/latest-posts.json";
import Date from "@library/date";
import { Link, usePathname } from "@i18n/navigation";

import BlogItem from "@components/blog/BlogItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import { useRef } from "react";

const LatestPostsSection = ({ posts, data }) => {
  const swiperRef = useRef(null);

  return (
    <>
      {/* latest posts */}
      <div className="row flex-column align-items-center " id="blog">
        <div className="col-lg-12">
          {/* title */}
          <div className="text-center">
            <div className="tst-suptitle tst-suptitle-center tst-mb-15">
              {data.name}
            </div>
            <h3 className="text-danger tst-mb-30">{data.title}</h3>
            <p className="tst-text tst-mb-60">{data.desc}</p>
          </div>
          {/* title end */}
        </div>
        {/* <div className="w-full home-swipper">
          <button
            className="left-btn"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <svg
              width={30}
              height={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              fill="rgba(26, 47, 51, 0.7)"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </button>
          <div className="row col-lg-12 align-items-center overflow-hidden">
            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={20}
            >
              {posts.map((item, i) => (
                <SwiperSlide key={i}>
                  <BlogItem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button
            className="right-btn"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <svg
              width={30}
              height={30}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              fill="rgba(26, 47, 51, 0.7)"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
            </svg>
          </button>
        </div> */}

        <div className="row flex flex-1 flex-nowrap latest-post-wrapper">
          {posts.slice(0, Data.numOfItems).map((item, key) => (
            <div className="col-lg-4 d-flex" key={`latest-posts-item-${key}`}>
              <BlogItem item={item} />
            </div>
          ))}
        </div>
      </div>
      {/* blog end */}
    </>
  );
};

export default LatestPostsSection;
