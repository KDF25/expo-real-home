import { Text, TouchableOpacity, View } from "react-native";
import { IProperty } from "../model";

interface IPriceProps {
  property: IProperty;
}

export const Price = ({ property }: IPriceProps) => {
  return (
    <View className="flex flex-row items-center justify-between gap-10">
      <View className="flex flex-col items-start">
        <Text className="text-black-200 text-xs font-rubik-medium">Price</Text>
        <Text
          numberOfLines={1}
          className="text-primary-300 text-start text-2xl font-rubik-bold"
        >
          ${property?.price}
        </Text>
      </View>

      <TouchableOpacity className="flex-1 flex flex-row items-center justify-center bg-primary-300 py-3 rounded-full shadow-md shadow-zinc-400">
        <Text className="text-white text-lg text-center font-rubik-bold">
          Book Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};
