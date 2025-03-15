import Data from "@data/sections/contact-info.json";

const ContactInfoSection = ({ data }) => {
  return (
    <>
      {/* contact info */}
      <div className="row" id="contact">
        <div className="col-lg-12">
          {/* title */}
          <div className="text-center">
            <div
              className="tst-suptitle tst-suptitle-center tst-mb-15"
              dangerouslySetInnerHTML={{ __html: data.name }}
            />
            <h3
              className="tst-mb-30"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
            <p
              className="tst-text tst-mb-60"
              dangerouslySetInnerHTML={{ __html: data.desc }}
            />
          </div>
          {/* title end */}
        </div>

        {data.contacts.map((item, key) => {
          return (
            <div className="col-lg-4" key={`contact-info-item-${item.id}`}>
              {/* icon box */}
              <div className="tst-icon-box tst-mb-60">
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${
                    item?.icon?.data?.attributes?.url ?? ""
                  }`}
                  alt={item.title}
                  className="tst-mb-30"
                />
                <h5 className="tst-mb-30">{item.title}</h5>
                <div
                  className="tst-text"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
              </div>
              {/* icon box end */}
            </div>
          );
        })}
      </div>
      {/* contact info end */}
    </>
  );
};

export default ContactInfoSection;
