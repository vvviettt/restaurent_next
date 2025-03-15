"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import MenuItem from "@components/menu/MenuItem";
import Image from "next/image";
import styles from "./MenuFiltered.module.scss";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const MenuFiltered = ({ heading = 0, categories }) => {
  const [visibleId, setVisibleId] = useState(null);

  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);

          if (entry.isIntersecting) {
            setVisibleId(entry.target.id);
          }
        });
      },
      { threshold: 0.01 } // Ít nhất 20% phần tử phải xuất hiện mới tính là "trong viewport"
    );

    categories
      .map((el) => `ctg-image-${el.id}`)
      .reverse()
      .forEach((id) => {
        const element = document.getElementById(id);
        if (element) observerRef.current?.observe(element);
      });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  console.log(visibleId);

  return (
    <>
      <div className={styles.menuCtgList}>
        {categories.map((category, key) => (
          <a
            href={`#ctg-image-${category.id}`}
            onClick={() => setVisibleId(`#ctg-image-${category.id}`)}
            key={`menu-category-item-${key}`}
            className={classNames(styles.button, {
              [styles.active]: visibleId === `ctg-image-${category.id}`,
            })}
          >
            {category?.attributes?.name}
          </a>
        ))}
      </div>
      <div className="row" id="menu">
        <div className="col-lg-12">
          {heading != 0 && (
            <>
              {/* title */}
              <div className="text-center">
                <div className="tst-suptitle tst-suptitle-center tst-mb-15">
                  {heading.subtitle}
                </div>
                <h3
                  className="tst-mb-30"
                  dangerouslySetInnerHTML={{ __html: heading.title }}
                />
                <p
                  className="tst-text tst-mb-30"
                  dangerouslySetInnerHTML={{ __html: heading.description }}
                />
              </div>
              {/* title end */}
            </>
          )}
        </div>

        <div className="col-lg-12 d-flex flex-column tst-gap-30 tst-mb-60">
          {categories.map((category, category_key) => {
            return (
              <div key={category.id} id={`ctg-image-${category.id}`}>
                {category.attributes.images.data.map((image) => {
                  return (
                    <img
                      loading="lazy"
                      width={"100%"}
                      src={`${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${image.attributes.url}`}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default MenuFiltered;
