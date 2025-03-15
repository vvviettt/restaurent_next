import { Link } from "@/src/i18n/navigation";
import React from "react";

const FoodBlogs = ({ posts, data }) => {
  return (
    <div className="text-center my-5">
      {/* <h3 className="text-danger fw-bold mb-5">Menu</h3> */}
      <div className="text-center">
        <h3 className="tst-suptitle tst-suptitle-center tst-mb-15">
          {data.name}
        </h3>
        <h3 className="tst-mb-30 text-danger">{data.title}</h3>
        <p className="tst-text tst-mb-60">{data.desc}</p>
      </div>
      <div className="row tst-feature-box pt-4">
        {posts.map((item) => (
          <Link
            className="col-9 col-md-4 col-lg-3"
            href={`/blog/food/${item.slug}`}
          >
            <div className="menu-item">
              <div className="menu-item--image">
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${item.image}`}
                  className="img-fluid rounded-fulll ratio-1x1 rounded-circle border menu-img zoom"
                  alt="Món ăn"
                />
              </div>
              <div className="my-4" style={{color: "grey"}}>
                <h5>{item.name}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodBlogs;
