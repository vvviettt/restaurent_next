"use client";

import { Link, usePathname } from "@i18n/navigation";
import Date from "@library/date";

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
          {/* {popular == 1 ? (
          <div className="tst-card-badge tst-auxiliary-color-1">Popular</div>
          ) : (
          <div className="tst-card-badge" style={{"backgroundColor": item.badgeColor}}>{item.categories[0]}</div>
          )} */}
        </Link>
        <div className="tst-descr">
          <h5 className="tst-mb-15">
            <a href={`/blog/news/${item.slug}`} className="tst-anima-link">
              {item.title}
            </a>
          </h5>
          <div className="tst-text">{item.short}</div>
          {/* <div className="tst-spacer-sm"></div> */}
          {/* <div className="tst-post-bottom">
            <div className="tst-post-author">
              <img src={item.authorAvatar} alt={item.author} /> 
              <h6>{item.author}</h6>
            </div>
            <div className="tst-date"><Date dateString={item.date} /></div>
          </div> */}
        </div>
      </div>
      {/* blog card end */}
    </>
  );
};
export default BlogItem;
