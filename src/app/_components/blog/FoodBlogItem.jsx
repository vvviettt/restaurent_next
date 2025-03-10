import { Link } from "@i18n/navigation";
import React from "react";

function FoodBlogItem({ item }) {
  return (
    <Link
      alt=""
      className="col-12 col-md-4 col-lg-3 "
      href={`/blog/${item.id}`}
    >
      <div className="d-flex flex-column align-items-center">
        <div className="menu-item--image">
          <img
            src={item.image}
            className="img-fluid rounded-fulll ratio-1x1 rounded-circle border menu-img zoom"
            alt="Món ăn"
          />
        </div>
        <div className="my-4">
          <h5 className="text-center">{item.name}</h5>
        </div>
      </div>
    </Link>
  );
}

export default FoodBlogItem;
