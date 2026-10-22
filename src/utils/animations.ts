import { Path } from "@/i18n/routing";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { QueryParams } from "next-intl/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

gsap.registerPlugin(SplitText, ScrollTrigger, Observer);

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

  export function scrollFlex(navigation: HTMLDivElement) {
    const tl = gsap
      .timeline()
      .set(navigation, {
        top: 0,
        width: "100%",
        backgroundColor: "#fafafa00",
        borderRadius: "0rem",
      })
      .to(navigation, {
        position: "fixed",
        top: "1rem",
        left: "50%",
        translateX: "-50%",
        width: "40%",
        padding: "1.5rem 2rem",
        backgroundColor: "#fafafa1e",
        borderRadius: "32rem",
      });

    ScrollTrigger.create({
      animation: tl,
      scrub: 0.5,
      start: "40% 20%",
      end: "+=100",
      toggleActions: "play none reverse restart",
    });
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

export namespace Projects {
  interface HoverAnimationArgs {
    overlay: HTMLDivElement;
    isFromAbove: boolean;
  }

  export const hoverSlideInOverlay = ({
    overlay,
    isFromAbove,
  }: HoverAnimationArgs) => {
    const tl = gsap.timeline();

    tl.set(overlay, {
      y: isFromAbove ? "-100%" : "100%",
      autoAlpha: 1,
    }).to(overlay, {
      y: "0%",
      duration: 0.4,
      ease: "power4.out",
    });

    return tl;
  };

  export const hoverSlideOutOverlay = ({
    overlay,
    isFromAbove,
  }: HoverAnimationArgs) => {
    const tl = gsap.timeline();

    tl.to(overlay, {
      y: isFromAbove ? "-100%" : "100%",
      duration: 0.4,
      ease: "power4.inOut",
      onComplete: () => {
        gsap.set(overlay, { autoAlpha: 0 });
      },
    });

    return tl;
  };
}

export namespace Hero {
  export function animateSubtitle(sub: HTMLHeadingElement) {
    if (sub) {
      const chars = new SplitText(sub, {
        type: "chars",
        mask: "chars",
        wordsClass: "",
        charsClass: "",
      });

      const tl = gsap
        .timeline()
        .set(chars.chars, { y: "100%" })
        .to(chars.chars, {
          y: 0,
          duration: 1,
          stagger: 0.02,
          delay: 0.75,
          ease: "power4.inOut",
        });
    }
  }

  export function animateCopy(copy: HTMLHeadingElement) {
    if (copy) {
      const copyChars = new SplitText(copy, {
        type: "chars",
        mask: "chars",
        wordsClass: "inline-block align-top",
        charsClass: "inline-block tracking-wider",
      });
      const tl = gsap
        .timeline()
        .set(copyChars.chars, { x: "-110%", opacity: 0 })
        .to(copyChars.chars, {
          x: "10%",
          opacity: 1,
          duration: 0.75,
          stagger: 0.03,
          ease: "power4.inOut",
        });
    }
  }

  export function animateCounterCopy(counter: HTMLHeadingElement) {
    if (counter) {
      const counterChars = new SplitText(counter, {
        type: "chars",
        mask: "chars",
        wordsClass: "inline-block align-top",
        charsClass: "inline-block tracking-wide",
      });

      const tl = gsap
        .timeline()
        .set(counterChars.chars, { x: "110%", opacity: 0 })
        .to(counterChars.chars, {
          x: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.03,
          ease: "power4.inOut",
        });
    }
  }
}
