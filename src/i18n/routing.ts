import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "vi", "ko", "zh"],
  defaultLocale: "vi",
  localeDetection: false,
});
