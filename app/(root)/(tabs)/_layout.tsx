import { allTabs } from "@/src/widgets/tabBar";
import { Tabs } from "expo-router";
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
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#0061FF1A",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      {allTabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon icon={tab.icon} focused={focused} title={tab.title} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
