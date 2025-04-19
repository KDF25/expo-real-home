import { icons } from "@/src/shared/ui";
import { Image, Text, View } from "react-native";
import { IProperty } from "../model";

interface IInformationProps {
  property: IProperty;
}

export const Information = ({ property }: IInformationProps) => {
  return (
    <View className="flex flex-row items-center mt-5">
      <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10">
        <Image source={icons.bed} className="size-4" />
      </View>
      <Text className="text-black-300 text-sm font-rubik-medium ml-2">
        {property?.bedrooms} Beds
      </Text>
      <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
        <Image source={icons.bath} className="size-4" />
      </View>
      <Text className="text-black-300 text-sm font-rubik-medium ml-2">
        {property?.bathrooms} Baths
      </Text>
      <View className="flex flex-row items-center justify-center bg-primary-100 rounded-full size-10 ml-7">
        <Image source={icons.area} className="size-4" />
      </View>
      <Text className="text-black-300 text-sm font-rubik-medium ml-2">
        {property?.area} sqft
      </Text>
    </View>
  );
};
