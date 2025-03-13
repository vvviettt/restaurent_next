import Data from "@data/sections/latest-posts.json";
import Date from "@library/date";
import { Link, usePathname } from "@i18n/navigation";

import BlogItem from "@components/blog/BlogItem";

const LatestPostsSection = ({ posts, data }) => {
  return (
    <>
      {/* latest posts */}
      <div className="row align-items-center overflow-hidden" id="blog">
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
