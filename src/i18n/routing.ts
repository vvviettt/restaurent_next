import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "vi", "ko", "cn", "jp"],
  defaultLocale: "vi",
  localeDetection: false,
});
