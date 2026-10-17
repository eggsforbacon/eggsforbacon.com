import { defineRouting } from "next-intl/routing";

export const PATHS = [
  "/",
  "/about",
  "/software",
  "/music",
  "/blog",
  "/contact",
] as const;
export type Path = (typeof PATHS)[number];
export const LOCALES = ["en", "es", "de"];

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: "en",
  domains: [
    {
      domain: "en.eggsforbacon.com",
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain: "de.eggsforbacon.com",
      defaultLocale: "de",
      locales: ["de"],
    },
    {
      domain: "co.eggsforbacon.com",
      defaultLocale: "es",
      locales: ["es"],
    },
  ],
  pathnames: {
    "/": "/",
    "/software": {
      es: "/desarrollo",
      de: "/entwicklung",
    },
    "/music": {
      es: "/música",
      de: "/musik",
    },
    "/blog": {
      es: "/blog",
      de: "/blog",
    },
    "/contact": {
      es: "/contacto",
      de: "/kontakt",
    },
    "/about": {
      es: "/acerca",
      de: "/über",
    },
  },
});
