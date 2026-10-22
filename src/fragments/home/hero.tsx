"use client";

import { useEffect, useRef, useState } from "react";
import { Hero as HeroAnimations } from "@/utils/animations";

export default function Hero() {
  const copyRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLHeadingElement | null>(null);
  const counterCopyRef = useRef<HTMLHeadingElement | null>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    if (window) {
      setMounted(true);
      if (copyRef.current) {
        HeroAnimations.animateCopy(copyRef.current);
      }
      if (counterCopyRef.current) {
        HeroAnimations.animateCounterCopy(counterCopyRef.current);
      }
      if (subtitleRef.current) {
        HeroAnimations.animateSubtitle(subtitleRef.current);
      }
    }
  }, [copyRef, counterCopyRef]);

  return (
    <header className="w-full px-32 py-24 min-h-screen relative">
      <div className="absolute w-full h-full top-0 left-0">
        <span className="bg-radial from-flamingo/20 to-flamingo/30 h-full w-full absolute top-1/2 left-1/2 -translate-1/2" />
        <span className="bg-radial from-black/0 to-black/80 h-full w-full absolute top-1/2 left-1/2 -translate-1/2" />
        <span className="absolute w-full h-full top-0 left-0 pointer-events-none backdrop-blur-2xl" />
      </div>
      <div
        className={`h-full pb-64 flex flex-col items-center justify-end relative text-center font-bold uppercase text-[9rem] leading-60 font-cossette-titre tracking-tighter ${mounted ? "opacity-100" : "opacity-0"}`}
      >
        <h1
          ref={copyRef}
          className="absolute top-1/2 left-1/2 -translate-1/2 w-full text-white/20"
        >
          MARA HERNÁNDEZ
        </h1>
        <span
          ref={counterCopyRef}
          aria-hidden
          className="absolute top-1/2 left-1/2 -translate-1/2 w-full text-flamingo-100"
        >
          MARA HERNÁNDEZ
        </span>
        <h2
          ref={subtitleRef}
          className="font-tik-tok-sans font-stretch-extra-condensed font-semibold italic text-xl tracking-[3px]"
        >
          Senior Fullstack Software Developer
        </h2>
      </div>
    </header>
  )
}
