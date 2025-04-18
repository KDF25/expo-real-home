import { icons } from "@/src/shared/ui";

interface ITab {
  name: string;
  title: string;
  icon: any;
}

export const allTabs: ITab[] = [
  { name: "index", title: "Home", icon: icons.home },
  { name: "explore", title: "Explore", icon: icons.search },
  { name: "profile", title: "Profile", icon: icons.person },
];