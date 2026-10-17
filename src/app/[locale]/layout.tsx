import type { Metadata } from "next";
import { Lexend, Syncopate } from "next/font/google";
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
      className={`${lexend.variable} ${syncopate.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
