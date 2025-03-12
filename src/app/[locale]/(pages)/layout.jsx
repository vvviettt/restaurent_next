import Header from "@layouts/headers/Index";
import Footer from "@layouts/footers/Index";
import "@/src/app/globals.css";
import { getLocale } from "next-intl/server";
import { strapiApiRequest } from "../../_lib/strapi";

const PagesLayouts = async ({ children }) => {
  const locale = await getLocale();
  const content = await getLayoutData(locale);

  return (
    <>
      <Header layout={"default"} data={content?.data?.attributes} />

      {/* dynamic content */}
      {children}
      {/* dynamic content end */}

      <Footer layout={"default"} data={content?.data?.attributes} />
    </>
  );
};
export default PagesLayouts;

async function getLayoutData(locale) {
  const layout = await strapiApiRequest(
    `layout?locale=${locale}&populate[0]=logo&populate[1]=left_menu&populate[3]=left_menu.sub_menu&populate[2]=right_menu&populate[4]=right_menu.sub_menu`
  );
  return layout;
}
