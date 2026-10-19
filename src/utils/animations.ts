import { Path } from "@/i18n/routing";
import gsap from "gsap";
import { QueryParams } from "next-intl/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export namespace Menu {
  export function animateIn() {
    const menuContainer = document.getElementById("menu-container");

    if (menuContainer) {
      const tl = gsap
        .timeline()
        .set(".g-menu-link-item-holder", {
          y: "120%",
        })
        .to(".g-menu-overlay", {
          clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
          duration: 0.55,
          ease: "power4.inOut",
        })
        .to(".g-menu-link-item-holder", {
          y: -15,
          duration: 0.55,
          stagger: 0.15,
          delay: -0.15,
          ease: "power4.inOut",
        });
      tl.play();
    }
  }

  export function animateOut(
    pathname: string,
    href:
      | Path
      | (Path & {
          query?: QueryParams;
        }),
    router: AppRouterInstance,
  ) {
    const menuContainer = document.getElementById("menu-container");

    if (menuContainer) {
      const tl = gsap
        .timeline()
        .set(".g-menu-link-item-holder", {
          y: -15,
        })
        .to(".g-menu-link-item-holder", {
          y: "120%",
          duration: 0.55,
          stagger: 0.15,
          ease: "power4.inOut",
        })
        .to(".g-menu-overlay", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          delay: -0.15,
          duration: 0.55,
          ease: "power4.inOut",
          onComplete: () => {
            if (pathname !== href) router.push(href);
          },
        });
      tl.play();
    }
  }
}

export namespace Page {
  export function animateIn() {}

  export function animateOut(
    pathname: string,
    href:
      | Path
      | (Path & {
          query?: QueryParams;
        }),
    router: AppRouterInstance,
  ) {
    if (pathname !== href) router.push(href);
  }
}
