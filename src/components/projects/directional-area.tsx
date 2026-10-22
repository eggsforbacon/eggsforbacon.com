"use client";

import { MouseEvent, useRef } from "react";
import MenuLink from "@/components/ui/menu-link";
import ExternalLink from "next/link";
import { useGSAP } from "@gsap/react";
import { Projects } from "@/utils/animations";

const DirectionalArea = ({} : {}) => {
  const projectAreaRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP({ scope: projectAreaRef });

  const getIsFromAbove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!projectAreaRef.current) return true;
    const bounds = projectAreaRef.current.getBoundingClientRect();
    const centerY = bounds.top + bounds.height / 2;
    return e.clientY < centerY;
  };

  const handleMouseEnter = contextSafe((e: MouseEvent<HTMLDivElement>) => {
    if (!overlayRef.current) return;

    const isFromAbove = getIsFromAbove(e);

    Projects.hoverSlideInOverlay({
      overlay: overlayRef.current,
      isFromAbove,
    });
  });

  const handleMouseLeave = contextSafe((e: MouseEvent<HTMLDivElement>) => {
    if (!overlayRef.current) return;

    const isLeavingToAbove = getIsFromAbove(e);

    Projects.hoverSlideOutOverlay({
      overlay: overlayRef.current,
      isFromAbove: isLeavingToAbove,
    });
  });

  return (
    <div
      ref={projectAreaRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-clip w-full flex flex-col items-center font-tik-tok-sans"
    >
      <div className="relative h-full w-full flex justify-between items-center gap-2 px-32 py-8">
        <h3 className="uppercase font-stretch-extra-expanded font-black text-7xl">
          marabunta.co
        </h3>
        <aside className="relative flex flex-col items-end justify-center gap-8 max-w-96 text-end">
          <p>
            Redesign and reimplementation of the Agency's Website. Technology
            migration and redesign with a focus on design interaction and
            identity in exclusivity while maintaining the brand.
          </p>
          <div className="flex items-center justify-end gap-4">
            <div className="rounded-full border boder-neutral-400/30 text-sm text-neutral-400 px-2 py-1">
              Web
            </div>
            <div className="rounded-full border boder-neutral-400/30 text-sm text-neutral-400 px-2 py-1">
              UX/UI
            </div>
            <div className="rounded-full border boder-neutral-400/30 text-sm text-neutral-400 px-2 py-1">
              Interaction Design
            </div>
            <div className="rounded-full border boder-neutral-400/30 text-sm text-neutral-400 px-2 py-1">
              CI/CD
            </div>
          </div>
        </aside>
      </div>
      <div
        ref={overlayRef}
        className="invisible absolute bg-flamingo w-full h-full flex items-center justify-between gap-2 px-32 py-8"
      >
        <MenuLink>
          <ExternalLink
            href="https://marabunta.co"
            target="_blank"
            rel="noreferer"
            className="transition-all duration-200 delay-100 hover:text-black"
          >
            <h3 className="uppercase font-stretch-extra-expanded font-black text-7xl">
              marabunta.co
            </h3>
          </ExternalLink>
        </MenuLink>
        <aside className="relative flex flex-col items-end justify-center gap-8 max-w-96 text-end">
          <p>
            Redesign and reimplementation of the Agency's Website. Technology
            migration and redesign with a focus on design interaction and
            identity in exclusivity while maintaining the brand.
          </p>
          <div className="flex items-center justify-end gap-4">
            <div className="rounded-full border boder-neutral-400/30 text-sm text-flamingo-200 px-2 py-1 transition-all duration-200 hover:bg-black hover:border-black hover:text-flamingo hover:scale-[1.01] cursor-pointer">
              Web
            </div>
            <div className="rounded-full border boder-neutral-400/30 text-sm text-flamingo-200 px-2 py-1 transition-all duration-200 hover:bg-black hover:border-black hover:text-flamingo hover:scale-[1.01] cursor-pointer">
              UX/UI
            </div>
            <div className="rounded-full border boder-neutral-400/30 text-sm text-flamingo-200 px-2 py-1 transition-all duration-200 hover:bg-black hover:border-black hover:text-flamingo hover:scale-[1.01] cursor-pointer">
              Interaction Design
            </div>
            <div className="rounded-full border boder-neutral-400/30 text-sm text-flamingo-200 px-2 py-1 transition-all duration-200 hover:bg-black hover:border-black hover:text-flamingo hover:scale-[1.01] cursor-pointer">
              CI/CD
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DirectionalArea;
