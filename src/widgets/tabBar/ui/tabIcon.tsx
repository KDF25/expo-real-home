import { Image, Text, View } from "react-native";

interface ITabIconProps {
  focused: boolean;
  icon: any;
  title: string;
}

export const TabIcon = ({ focused, icon, title }: ITabIconProps) => {
  return (
    <View className="flex flex-col flex-1 items-center mt-3">
      <Image
        source={icon}
        tintColor={focused ? "#0061FF" : "#666876"}
        resizeMode="contain"
        className="size-6"
      />
      <Text
        className={`${
          focused
            ? "text-primary-300 font-rubik-medium"
            : "text-black-200 font-rubik"
        } text-xs w-full text-center mt-1`}
      >
        {title}
      </Text>
    </View>
  );
};