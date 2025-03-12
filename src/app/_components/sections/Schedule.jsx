"use client";

import Data from "@data/sections/schedule.json";
import { Link, usePathname } from "@i18n/navigation";
import classNames from "classnames";

const ScheduleSection = ({ data }) => {
  return (
    <div className="tst-pb-60">
      {/* schedule */}
      <div className="tst-banner-sm col-lg-9 ">
        <div className="tst-cover-frame">
          <img
            src={Data.image.url}
            alt={Data.image.alt}
            className="tst-cover col-lg-9"
          />
          <div className="tst-overlay col-lg-9"></div>
        </div>

        <div className="row align-items-center ">
          <div className="col-lg-8">
            <div className="tst-text-frame">
              <div className="tst-suptitle tst-suptitle-mobile-center tst-white-2 tst-mb-15">
                {Data.subtitle}
              </div>
              <h3
                className="tst-white-2 tst-mb-30"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
              <p
                className="tst-text tst-white-2 tst-mb-30"
                dangerouslySetInnerHTML={{ __html: data.desc }}
              />

              <div className="d-flex tst-btn-mobile tst-gap-30">
                {data?.buttons?.map((item) => {
                  return (
                    <Link
                      href={item.redirect_link ?? ""}
                      key={item.id}
                      className={classNames("align-content-center", {
                        "tst-btn tst-res-btn": item.type === "outline",
                        "tst-label tst-white-2": item.type === "transparent",
                      })}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="tst-wh-frame">
              <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </div>
          </div>
        </div>
      </div>
      {/* schedule end */}
    </div>
  );
};
export default ScheduleSection;
