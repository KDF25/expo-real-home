import { icons } from "@/src/shared/ui";
import { Image, Text, View } from "react-native";
import { IProperty } from "../model";

interface IDescriptionProps {
  property: IProperty;
}

export const Description = ({ property }: IDescriptionProps) => {
  return (
    <>
      <Text className="text-2xl font-rubik-extrabold">{property?.name}</Text>

      <View className="flex flex-row items-center gap-3">
        <View className="flex flex-row items-center px-4 py-2 bg-primary-100 rounded-full">
          <Text className="text-xs font-rubik-bold text-primary-300">
            {property?.type}
          </Text>
        </View>

        <View className="flex flex-row items-center gap-2">
          <Image source={icons.star} className="size-5" />
          <Text className="text-black-200 text-sm mt-1 font-rubik-medium">
            {property?.rating} ({property?.reviews?.length || 0} reviews)
          </Text>
        </View>
      </View>
    </>
  );
};
