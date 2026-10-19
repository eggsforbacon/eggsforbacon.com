"use client";

import { ReactNode, useState } from "react";

const MenuLink = ({
  children,
  boxColor = "bg-black",
}: {
  children: ReactNode | ReactNode[];
  boxColor?: string;
}) => {
  const [hoverState, setHoverState] = useState<"unhovered" | "entered">(
    "unhovered",
  );

  const generateHoverClass = () => {
    switch (hoverState) {
      default:
      case "unhovered":
        return "-translate-x-full";
      case "entered":
        return "translate-x-full";
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
        className={`pointer-events-none top-0 left-0 absolute h-[120%] w-[200%] ${boxColor} transition-all duration-800 ease-in-out ${generateHoverClass()}`}
      />
    </div>
  );
};

export default MenuLink;
