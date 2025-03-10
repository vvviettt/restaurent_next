import React from "react";
import FoodBlogItem from "./FoodBlogItem";

function FoodBlogs({ posts }) {
  return (
    <div className="row tst-feature-box  pt-4">
      {posts.map((item, index) => {
        return <FoodBlogItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default FoodBlogs;
