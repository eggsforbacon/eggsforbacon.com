"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import ExternalLink from "next/link";
import { PATHS } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { cn } from "@/utils/utils";
import MenuLink from "./menu-link";
import TransitionLink from "./transition-link";
import { Page } from "@/utils/animations";
import { useEffect, useRef } from "react";
import { Menu as MenuAnimations } from "@/utils/animations";

const Menu = () => {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const navigationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window && navigationRef.current !== null) {
      MenuAnimations.scrollFlex(navigationRef.current);
    }
  }, [navigationRef]);

  return (
    <nav
      className={cn("top-0 left-0  h-screen w-full max-w-480 font-semibold")}
    >
      <div
        ref={navigationRef}
        className={cn("fixed justify-between items-center px-16 py-6 flex backdrop-blur-2xl")}
      >
        <MenuLink boxColor="bg-flamingo">
          <TransitionLink
            href={"/"}
            className="transition-all delay-200 text-white/40 hover:text-flamingo text-xl"
            onOut={Page.animateOut}
          >
            @eggsforbacon
          </TransitionLink>
        </MenuLink>
        <MenuLink boxColor="bg-flamingo" direction="left">
          <TransitionLink
            href={pathname}
            className={cn(
              "transition-all delay-200 text-white/40 hover:text-flamingo text-xl",
            )}
            isExitTransition={false}
          >
            Menu
          </TransitionLink>
        </MenuLink>
      </div>
      <div
        id="menu-container"
        className="g-menu-overlay fixed bg-flamingo flex flex-col w-full max-w-480 h-full top-0 px-32 py-16 justify-between"
      >
        <div className="flex justify-between items-center w-full">
          <MenuLink>
            <TransitionLink
              href={"/"}
              onOut={Page.animateOut}
              className=".g-menu-outer-links transition-all delay-200 hover:text-white text-xl"
            >
              @eggsforbacon
            </TransitionLink>
          </MenuLink>
          <MenuLink direction="left">
            <TransitionLink
              href={pathname}
              className={cn(
                "transition-all delay-200 hover:text-white text-xl",
              )}
            >
              {t("close")} &#10005;
            </TransitionLink>
          </MenuLink>
        </div>
        <ul className="flex flex-col -gap-1">
          {PATHS.map((path, index) => {
            return (
              <li key={index} className="relative overflow-clip">
                <MenuLink>
                  <TransitionLink
                    href={path}
                    className={cn(
                      "text-7xl tracking-tighter font-normal",
                      "transition-all delay-200 duration-200 ease-in-out",
                      "hover:text-white hover:font-black",
                    )}
                  >
                    {t(`${path}.label`)}
                  </TransitionLink>
                </MenuLink>
              </li>
            );
          })}
        </ul>
        <div
          className={cn("flex flex-row-reverse items-center justify-between")}
        >
          <ul className="text-xl flex flex-col gap-2 justify-end">
            <li>
              <MenuLink>
                <ExternalLink
                  href={"https://instagram.com/eggsforbacon__"}
                  target="_blank"
                  rel="noreferer"
                  className="transition-all delay-200 duration-200 hover:text-white"
                >
                  Instagram
                </ExternalLink>
              </MenuLink>
            </li>
            <li>
              <MenuLink>
                <ExternalLink
                  href={"https://github.com/eggsforbacon"}
                  target="_blank"
                  rel="noreferer"
                  className="transition-all delay-200 duration-200 hover:text-white"
                >
                  GitHub
                </ExternalLink>
              </MenuLink>
            </li>
            <li>
              <MenuLink>
                <ExternalLink
                  href={"https://linkedin.com/in/samuelhernandezcifuentes--"}
                  target="_blank"
                  rel="noreferer"
                  className="transition-all delay-200 duration-200 hover:text-white"
                >
                  LinkedIn
                </ExternalLink>
              </MenuLink>
            </li>
            <li>
              <MenuLink>
                <ExternalLink
                  href={`https://wa.me/491727549523?text=${t("whatsappMessage")}`}
                  target="_blank"
                  rel="noreferer"
                  className="transition-all delay-200 duration-200 hover:text-white"
                >
                  WhatsApp
                </ExternalLink>
              </MenuLink>
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
