import Image from "next/image";

const FeaturesOneSection = ({ data }) => {
  return (
    <>
      {/* features */}
      <div className="column">
        <div className="col-lg-12">
          {/* title */}
          <div className="text-center">
            <div className="tst-suptitle tst-suptitle-center tst-mb-15">
              {data.name}
            </div>
            <h3 className="tst-mb-30 text-danger">{data.title}</h3>
            <p className="tst-text tst-mb-60">{data.desc}</p>
          </div>
          {/* title end */}
        </div>
        <div className="row flex-1 tst-feature-box">
          {data?.items?.map((item) => (
            <div className="col-lg-4 flex-1" key={`features-item-${item.id}`}>
              {/* icon box */}
              <div className="tst-icon-box tst-mb-60">
                <Image
                  width={70}
                  height={70}
                  src={`${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${item.icon.data.attributes.url}`}
                  alt="icon"
                  className="tst-mb-30"
                />
                <h5 className="tst-mb-30">{item.title}</h5>
                <div className="tst-text">{item.desc}</div>
              </div>
              {/* icon box end */}
            </div>
          ))}
        </div>
      </div>
      {/* features end */}
    </>
  );
};

export default FeaturesOneSection;
