import { Text, View } from "react-native";
import { IProperty } from "../model";

interface IOverviewProps {
  property: IProperty;
}

export const Overview = ({ property }: IOverviewProps) => {
  return (
    <View className="mt-7">
      <Text className="text-black-300 text-xl font-rubik-bold">Overview</Text>
      <Text className="text-black-200 text-base font-rubik mt-2">
        {property?.description}
      </Text>
    </View>
  );
};
