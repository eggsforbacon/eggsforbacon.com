"use client";

import { ReactNode, useState } from "react";

const MenuLink = ({
  children,
  boxColor = "bg-black",
  direction = "right",
}: {
  children: ReactNode | ReactNode[];
  boxColor?: string;
  direction?: "left" | "right";
}) => {
  const [hoverState, setHoverState] = useState<"unhovered" | "entered">(
    "unhovered",
  );

  const generateHoverClass = () => {
    switch (hoverState) {
      default:
      case "unhovered":
        return direction === "right" ? "-translate-x-full" : "translate-x-full";
      case "entered":
        return direction === "right" ? "translate-x-full" : "-translate-x-full";
    }
  };

  return (
    <div className="relative w-fit overflow-x-clip">
      <div
        className="relative inset-0"
        onMouseEnter={() => setHoverState("entered")}
        onMouseLeave={() => setHoverState("unhovered")}
      >
        {children}
      </div>
      <span
        className={`pointer-events-none top-0 ${direction === "right" ? "left-0" : "right-0"} absolute h-[120%] w-[200%] ${boxColor} transition-all duration-800 ease-in-out ${generateHoverClass()}`}
      />
    </div>
  );
};

export default MenuLink;
