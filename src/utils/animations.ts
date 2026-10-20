import { Path } from "@/i18n/routing";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { QueryParams } from "next-intl/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

gsap.registerPlugin(SplitText);

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

  function playTrail(shape: Element) {
    let tl = gsap.timeline();
    tl.from(shape, {
      opacity: 0,
      scale: 0,
      ease: "elastic.out(1,0.3)",
    })
      .to(
        shape,
        {
          rotation: "random([-360, 360])",
        },
        "<",
      )
      .to(
        shape,
        {
          y: "120vh",
          ease: "back.in(.4)",
          duration: 1,
        },
        0,
      );
  }

  function animateTrailElement(
    c: { x: number; y: number },
    wrapper: (index: number) => number,
    index: number,
    flair: Element[],
  ) {
    let wrappedIndex = wrapper(index);

    console.log(index, flair.length);

    let s = flair[wrappedIndex];
    gsap.killTweensOf(s);

    gsap.set(s, {
      clearProps: "all",
    });

    gsap.set(s, {
      opacity: 1,
      left: c.x,
      top: c.y,
      xPercent: -50,
      yPercent: -50,
    });

    playTrail(s);

    index++;
  }

  export function createTrail(
    c: { x: number; y: number },
    last: { x: number; y: number },
    cache: { x: number; y: number },
    gap: number,
    wrapper: (index: number) => number,
    index: number,
    flair: Element[],
  ) {
    let travelDistance = Math.hypot(last.x - c.x, last.y - c.y);

    cache.x = gsap.utils.interpolate(cache.x || c.x, c.x, 0.1);
    cache.y = gsap.utils.interpolate(cache.y || c.y, c.y, 0.1);

    if (travelDistance > gap) {
      animateTrailElement(c, wrapper, index, flair);
      last = c;
    }
  }
}

export namespace Hero {
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
