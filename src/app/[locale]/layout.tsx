import type { Metadata } from "next";
import {
  Lexend,
  Syncopate,
  TikTok_Sans,
  Cossette_Texte,
  Cossette_Titre,
} from "next/font/google";
import "./../globals.css";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  weight: "700",
  variable: "--font-syncopate",
  subsets: ["latin"],
});

const ttSans = TikTok_Sans({
  weight: "variable",
  axes: ["opsz", "slnt", "wdth"],
  subsets: ["latin-ext"],
  variable: "--font-tik-tok-sans",
});

const cossette = Cossette_Texte({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
  variable: "--font-cossette",
});

const cossetteTitre = Cossette_Titre({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
  variable: "--font-cossette-titre",
});

export const metadata: Metadata = {
  title: "Mara/Eggsforbacon",
  description:
    "I am Mara Hernandez, a Fullstack Software Developer from Colombia based in Germany, working on Web Development, Custom Desktop solutions, and Multiplatform Mobile Apps. I also love Music.",
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const locale = await getLocale();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${lexend.variable} ${syncopate.variable} ${ttSans.variable} ${cossette.variable} ${cossetteTitre.variable} max-w-[100vw] flex flex-col h-full antialiased relative items-center justify-start bg-neutral-950`}
    >
      <body className="min-h-full flex flex-col relative max-w-480 w-full bg-neutral-800">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
