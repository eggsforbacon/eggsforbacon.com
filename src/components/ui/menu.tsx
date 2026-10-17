"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import ExternalLink from "next/link";
import { Path, PATHS } from "@/i18n/routing";
import navigationStore from "@/store/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/utils";
import { QueryParams } from "next-intl/navigation";

const Menu = () => {
  const { isMenuOpen, toggleMenu, href, setHref } = navigationStore();
  const [tl, setTl] = useState<gsap.core.Timeline | undefined>(undefined);
  const t = useTranslations("Nav");

  const router = useRouter();
  const pathname = usePathname();
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      gsap.set(".g-menu-link-item-holder", {
        y: "120%",
      });

      setTl(
        gsap
          .timeline({ paused: true })
          .to(".g-menu-overlay", {
            clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
            duration: 0.75,
            ease: "power4.inOut",
          })
          .to(".g-menu-link-item-holder", {
            y: -15,
            duration: 0.75,
            stagger: 0.15,
            delay: -0.45,
            ease: "power4.inOut",
          }),
      );
    },
    { scope: containerRef },
  );

  useEffect(() => {
    if (!containerRef.current) return;
    if (isMenuOpen) tl.play();
    else {
      tl.reverse().then((_tl) => {
        router.push(href);
      });
    }
  }, [isMenuOpen, tl, href]);

  useEffect(() => {
    toggleMenu();
  }, [href]);

  const handleMenuNavigate = (
    hrefParam: Path | (Path & { query?: QueryParams }),
  ) => {
    if (pathname !== hrefParam) {
      setHref(hrefParam);
    }
  };

  return (
    <nav
      ref={containerRef}
      className={cn("fixed top-0 h-screen w-screen font-semibold")}
    >
      <div
        className={cn("justify-between items-center w-full px-16 py-6 flex")}
      >
        <div>
          <Link href={"/"}>@eggsforbacon</Link>
        </div>
        <button onClick={() => toggleMenu()} className={cn("cursor-pointer")}>
          <p>Menu</p>
        </button>
      </div>
      <div className="g-menu-overlay fixed bg-flamingo flex flex-col w-full h-full top-0 px-32 py-16 justify-between">
        <div className="flex justify-between items-center w-full">
          <div>
            <Link href={"/"}>@eggsforbacon</Link>
          </div>
          <button onClick={() => toggleMenu()} className={cn("cursor-pointer")}>
            <p>{t("close")} &#10005; </p>
          </button>
        </div>
        <ul className="flex flex-col -gap-1">
          {PATHS.map((path, index) => {
            return (
              <li key={index} className="relative overflow-clip">
                <button
                  aria-roledescription="Anchor Element"
                  onClick={() => handleMenuNavigate(path)}
                  className="g-menu-link-item-holder"
                >
                  <p
                    className={cn(
                      "text-8xl tracking-tighter cursor-pointer font-normal",
                      "transition-all duration-200 ease-in-out",
                      "hover:text-white hover:font-black",
                    )}
                  >
                    {t(`${path}.label`)}
                  </p>
                </button>
              </li>
            );
          })}
        </ul>
        <div
          className={cn("flex flex-row-reverse items-center justify-between")}
        >
          <ul className="text-3xl flex flex-col gap-2 justify-end">
            <li>
              <ExternalLink
                href={"https://instagram.com/eggsforbacon__"}
                target="_blank"
                rel="noreferer"
              >
                Instagram
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={"https://github.com/eggsforbacon"}
                target="_blank"
                rel="noreferer"
              >
                GitHub
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={"https://linkedin.com/in/samuelhernandezcifuentes--"}
                target="_blank"
                rel="noreferer"
              >
                LinkedIn
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={`https://wa.me/491727549523?text=${t("whatsappMessage")}`}
                target="_blank"
                rel="noreferer"
              >
                WhatsApp
              </ExternalLink>
            </li>
          </ul>
          <ul className="text-xl flex flex-col gap-2 justify-end">
            <li>
              <ExternalLink
                href={"mailto:mara.hernandez.cifuentes@gmail.com"}
                target="_blank"
                rel="noreferer"
              >
                mara.hernandez.cifuentes@gmail.com
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={"tel:+491727549523"}
                target="_blank"
                rel="noreferer"
              >
                +49 172 754 9523
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
