import Data from "@data/sections/latest-posts.json";
import Date from "@library/date";
import { Link, usePathname } from "@i18n/navigation";

import BlogItem from "@components/blog/BlogItem";

const LatestPostsSection = ({ posts }) => {
  return (
    <>
      {/* latest posts */}
      <div className="row align-items-center overflow-hidden" id="blog">
        <div className="col-lg-12">
          {/* title */}
          <div className="text-center">
            <div
              className="tst-suptitle tst-suptitle-center tst-mb-15"
              dangerouslySetInnerHTML={{ __html: Data.subtitle }}
            />
            <h3
              className="text-danger tst-mb-30"
              dangerouslySetInnerHTML={{ __html: Data.title }}
            />
            <p
              className="tst-text tst-mb-60"
              dangerouslySetInnerHTML={{ __html: Data.description }}
            />
          </div>
          {/* title end */}
        </div>
        <div className="row flex flex-nowrap latest-post-wrapper">
          {posts.slice(0, Data.numOfItems).map((item, key) => (
            <div className="col-lg-4" key={`latest-posts-item-${key}`}>
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
