"use client";

import AppData from "@data/app.json";
import Data from "@data/sections/about.json";
import { Link, usePathname } from "@i18n/navigation";

import { useState } from "react";

import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const AboutSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* about */}
      <div className="row align-items-center flex-sm-row-reverse" id="about">
        <div className="col-lg-6">
          {/* about text */}
          <div className="tst-mb-60">
            <div
              className="tst-suptitle tst-mb-15"
              dangerouslySetInnerHTML={{ __html: Data.subtitle }}
            />
            <h3
              className="text-danger tst-mb-30"
              dangerouslySetInnerHTML={{ __html: Data.title }}
            />
            <p
              className="tst-text tst-mb-30"
              dangerouslySetInnerHTML={{ __html: Data.description }}
            />

            <Link
              href={Data.button.link}
              className="tst-btn tst-anima-link tst-mr-30"
            >
              {Data.button.label}
            </Link>

            {AppData.social.map((item, key) => (
              <a
                href={item.url}
                className="tst-icon-link"
                title={item.title}
                key={`about-social-item-${key}`}
              >
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
          {/* about text end */}
        </div>

        <div className="col-lg-6">
          {/* about video */}
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/2pk-cxj2sgw?start=103"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; 
  autoplay; 
  clipboard-write; 
  encrypted-media; 
  gyroscope; 
  picture-in-picture; 
  web-share" allowfullscreen></iframe>

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
