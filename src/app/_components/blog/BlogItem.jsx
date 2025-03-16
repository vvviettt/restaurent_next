"use client";

import { Link, usePathname } from "@i18n/navigation";

const BlogItem = ({ item, popular }) => {
  return (
    <>
      {/* blog card */}
      <div className="tst-blog-card tst-mb-60 flex-1">
        <Link
          href={`/blog/news/${item.slug}`}
          className="tst-cover-frame tst-anima-link"
        >
          <img
            src={`${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${item.image}`}
            alt={item.title}
          />
        </Link>
        <div className="tst-descr">
          <h5
            className="tst-mb-15"
            style={{
              lineHeight: "28px",
              height: "56px",
            }}
          >
            <a
              href={`/blog/news/${item.slug}`}
              className="tst-anima-link"
              style={{ color: "grey" }}
            >
              {item.title}
            </a>
          </h5>
          <div className="tst-text">{item.short}</div>
        </div>
      </div>
      {/* blog card end */}
    </>
  );
};
export default BlogItem;
