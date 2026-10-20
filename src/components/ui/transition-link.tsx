"use client";

import { Path } from "@/i18n/routing";
import { Menu } from "@/utils/animations";
import { QueryParams } from "next-intl/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, Ref } from "react";

const TransitionLink = ({
  href,
  className,
  children,
  onOut = Menu.animateOut,
  isExitTransition = true,
  onIn = Menu.animateIn,
  ref = undefined
}: {
  href?: Path | (Path & { query?: QueryParams });
  className?: string;
  children: ReactNode | ReactNode[];
  onOut?: (
    pathname: string,
    href: Path | (Path & { query?: QueryParams }),
    router: AppRouterInstance,
  ) => void;
  onIn?: () => void;
    isExitTransition?: boolean;
  ref?: Ref<HTMLButtonElement | null> | undefined
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (isExitTransition)
      onOut(
        pathname,
        href ??
          (pathname as unknown as Path | (Path & { query?: QueryParams })),
        router as unknown as AppRouterInstance,
      );
    else onIn();
  };

  return (
    <button className={"cursor-pointer! " + className} onClick={handleClick} ref={ref}>
      {children}
    </button>
  );
};

export default TransitionLink;
