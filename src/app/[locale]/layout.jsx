import { Josefin_Sans, Playfair_Display } from "next/font/google";

const josefin_sans = Josefin_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-josefin_sans",
  display: "swap",
  adjustFontFallback: false,
});

const playfair_display = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-playfair_display",
  display: "swap",
  adjustFontFallback: false,
});

import "../globals.css";
import { routing } from "@/src/i18n/routing";
import "@styles/css/plugins/bootstrap.min.css";
import "@styles/css/plugins/swiper.min.css";
import "@styles/css/plugins/font-awesome.min.css";
import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

import "@styles/scss/style.scss";

import AppData from "@data/app.json";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

export const metadata = {
  title: {
    default: AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

const Layouts = async ({ children, params }) => {
  const messages = await getMessages();

  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${josefin_sans.variable} ${playfair_display.variable}`}
    >
      <body
        style={{ backgroundImage: "url(" + AppData.settings.bgImage + ")" }}
      >
        <div className="tst-main-overlay"></div>
        {/* app wrapper */}
        <div id="tst-app" className="tst-app">
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </div>
        {/* app wrapper end */}
      </body>
    </html>
  );
};
export default Layouts;
