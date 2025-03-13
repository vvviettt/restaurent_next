"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import AppData from "@data/app.json";

import { ScrollAnimation } from "@common/scrollAnims";

const FooterGallery = dynamic(() => import("@layouts/footers/Gallery"), {
  ssr: false,
});

const DefaultFooter = ({ data }) => {
  const asPath = usePathname();

  useEffect(() => {
    ScrollAnimation();
  }, []);

  const scrollToTop = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    e.preventDefault();
  };

  return (
    <>
      {/* footer */}
      <footer className="tst-white tst-fade-down">
        <div className="container">
          <div className="tst-footer-top">
            {/* <img src={AppData.footer.logo.url} alt={AppData.footer.logo.alt} className="tst-logo" />

                        <div className="tst-social">
                            {AppData.social.map((item, key) => (
                                <a href={item.link} target="_blank" title={item.title} className="tst-icon-link" key={`footer-social-item-${key}`}><i className={item.icon}></i></a>
                            ))}
                        </div> */}
            {/* <div className="col-lg-4">
                            <div className="tst-mb-60">
                                <h5 className="tst-mb-30 tst-text-shadow" dangerouslySetInnerHTML={{ __html: AppData.footer.about.title }} />
                                <div className="tst-text tst-text-shadow tst-mb-30" dangerouslySetInnerHTML={{ __html: AppData.footer.about.text }} />
                                <Link href={AppData.footer.about.button.link} className="tst-label tst-color tst-anima-link">{AppData.footer.about.button.label}</Link>
                            </div>
                        </div> */}
            <div className="col-lg-12">
              <div className="row" style={{ justifyContent: "space-between" }}>
                <div className="tst-footer-logo">
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_MEDIA_URL}${data?.logo?.data?.attributes?.url}`}
                    alt={""}
                    className="tst-logo"
                    height={60}
                  />
                </div>
                <div>
                  {/* <h5 className="tst-mb-30 tst-text-shadow" dangerouslySetInnerHTML={{ __html: AppData.footer.contact.title }} /> */}
                  <ul className="tst-footer-contact tst-text-shadow tst-mb-30">
                    {AppData.footer.contact.items.map((item, key) => (
                      <li key={`footer-contact-item-${key}`}>
                        <span className="tst-label">{item.label} :</span>
                        <span className="tst-text">{item.value}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Link href={AppData.footer.contact.button.link} className="tst-label tst-color tst-anima-link">{AppData.footer.contact.button.label}</Link> */}
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4">
                            <div className="tst-mb-60">
                                <h5 className="tst-mb-30 tst-text-shadow" dangerouslySetInnerHTML={{ __html: AppData.footer.gallery.title }} />
                                <FooterGallery items={AppData.footer.gallery.items} button={AppData.footer.gallery.button} />
                            </div>
                        </div> */}
          </div>
          <div className="tst-footer-bottom">
            <div
              className="tst-text"
              dangerouslySetInnerHTML={{ __html: AppData.footer.copy }}
            />
            <a
              href="#tst-app"
              className="tst-label tst-color tst-anchor-scroll"
              onClick={(e) => scrollToTop(e)}
            >
              Back to top
            </a>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;
