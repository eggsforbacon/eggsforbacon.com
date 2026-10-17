import { Path } from "@/i18n/routing";
import { QueryParams } from "next-intl/navigation";
import { create } from "zustand";

interface NavigationStore {
  isMenuOpen: boolean;
  toggleMenu: () => boolean;
  href: Path | (Path & { query?: QueryParams });
  setHref: (href: Path | (Path & { query?: QueryParams })) => void;
}

const navigationStore = create<NavigationStore>()((set, get) => ({
  isMenuOpen: false,
  toggleMenu: () => {
    set((_) => ({ isMenuOpen: !get().isMenuOpen }));
    return get().isMenuOpen;
  },
  href: "/",
  setHref: (href: Path | (Path & { query?: QueryParams })) => {
    set((_) => ({ href }));
  },
}));

export default navigationStore;
