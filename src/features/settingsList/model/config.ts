import { icons } from "@/src/shared/ui";
import { ImageSourcePropType } from "react-native";

interface ISettingItem {
    icon : ImageSourcePropType;
    title : string;
}

export const  allSettings: ISettingItem[] = [
    {
        title: "My Bookings",
        icon: icons.calendar,
      },
      {
        title: "Payments",
        icon: icons.wallet,
      },
      {
        title: "Profile",
        icon: icons.person,
      },
      {
        title: "Notifications",
        icon: icons.bell,
      },
      {
        title: "Security",
        icon: icons.shield,
      },
      {
        title: "Language",
        icon: icons.language,
      },
      {
        title: "Help Center",
        icon: icons.info,
      },
      {
        title: "Invite Friends",
        icon: icons.people,
      },
]