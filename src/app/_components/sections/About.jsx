"use client";

import AppData from "@data/app.json";
import Data from "@data/sections/about.json";
import { Link, usePathname } from "@i18n/navigation";
import Image from "next/image";

import { useState, useEffect } from "react";

import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const AboutSection = ({ data }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.getElementById("tst-dynamic-menu").style.visibility = "hidden";
    } else {
      document.getElementById("tst-dynamic-menu").style.visibility = "visible";
    }
  }, [isOpen]);

  return (
    <>
      {/* about */}
      <div className="row align-items-center flex-sm-row-reverse" id="about">
        <div className="col-lg-7">
          {/* about text */}
          <div className="tst-mb-60">
            <div className="tst-suptitle tst-mb-15">{data?.name}</div>
            <h3 className="text-danger tst-mb-30">{data?.title}</h3>
            <p className="tst-text tst-mb-30">{data?.desc}</p>

            <Link
              href={data.redirect_link ?? "#"}
              className="tst-btn tst-anima-link tst-mr-30"
            >
              {data.button_text}
            </Link>

            {data?.social_media_links?.map((item) => (
              <a
                href={item.link}
                className="tst-icon-link"
                title={item.title}
                key={`about-social-item-${item.id}`}
              >
                <Image
                  width={20}
                  height={20}
                  alt=""
                  src={`${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${item.icon.data.attributes.url}`}
                />
              </a>
            ))}
          </div>
          {/* about text end */}
        </div>

        <div className="col-lg-5">
          {/* about video */}
          <div className="tst-about-cover tst-mb-60">
            <img
              src={Data.image.url}
              alt={Data.image.alt}
              className="tst-cover"
            />
            <div className="tst-overlay"></div>
            <div className="tst-btn-animation"></div>
            <a
              className="tst-play-button"
              onClick={() => setOpen(true)}
              style={{ cursor: "pointer" }}
              data-width="10"
              data-height="600"
            >
              <i className="fas fa-play"></i>
            </a>
          </div>
          {/* about video end */}
        </div>
      </div>
      {/* about end */}

      <ModalVideo
        playsinline={true}
        channel="youtube"
        isOpen={isOpen}
        videoId={Data.video.replace("https://www.youtube.com/watch?v=", "")}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default AboutSection;
