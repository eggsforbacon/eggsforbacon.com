"use client";

import Menu from "@/components/ui/menu";
import { ReactNode } from "react";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Menu />
    </>
  );
}
