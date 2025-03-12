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
        <a className="col-9 col-md-4 col-lg-3" href="<%= food.blogUrl %>">
          <div className="menu-item">
            <div className="menu-item--image">
              <img
                src="https://ngochuong.vn/upload/image/cache/data/Nhung/Feedback/Soup-tom-thai-822-crop-350-350.jpg"
                className="img-fluid rounded-fulll ratio-1x1 rounded-circle border menu-img zoom"
                alt="Món ăn"
              />
            </div>
            <div className="my-4">
              <h5>Soup tôm thái</h5>
            </div>
          </div>
        </a>
        <a className="col-9 col-md-4 col-lg-3" href="<%= food.blogUrl %>">
          <div className="menu-item">
            <div className="menu-item--image">
              <img
                src="https://ngochuong.vn/upload/image/cache/data/Nhung/Menu/IMG8970-108-crop-350-350.jpg"
                className="img-fluid rounded-fulll ratio-1x1 rounded-circle border menu-img zoom"
                alt="Món ăn"
              />
            </div>
            <div className="my-4">
              <h5>Soup lẩu hải sản thập cẩm</h5>
            </div>
          </div>
        </a>
        <a className="col-9 col-md-4 col-lg-3" href="<%= food.blogUrl %>">
          <div className="menu-item">
            <div className="menu-item--image">
              <img
                src="https://ngochuong.vn/upload/image/cache/data/Nhung/Menu/IMG9018-620-crop-350-350.jpg"
                className="img-fluid rounded-fulll ratio-1x1 rounded-circle border menu-img zoom"
                alt="Món ăn"
              />
            </div>
            <div className="my-4">
              <h5>Salad rong nho cá ngừ</h5>
            </div>
          </div>
        </a>
        <a className="col-9 col-md-4 col-lg-3" href="<%= food.blogUrl %>">
          <div className="menu-item">
            <div className="menu-item--image">
              <img
                src="https://ngochuong.vn/upload/image/cache/data/Nhung/Do-uong/a9c0e4dcc7f53eab67e4-2d6-crop-350-350.jpg"
                className="img-fluid rounded-fulll ratio-1x1 rounded-circle border menu-img zoom"
                alt="Món ăn"
              />
            </div>
            <div className="my-4">
              <h5>Rượu vang Chile 1865</h5>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default FoodBlogs;
