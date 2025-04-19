import { icons } from "@/src/shared/ui";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Comment } from "./comment";
import { IProperty } from "../model";

interface IReviewsProps {
  property: IProperty;
}

export const Reviews = ({ property }: IReviewsProps) => {
  return (
    <>
      {property?.reviews?.length > 0 && (
        <View className="mt-7">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center">
              <Image source={icons.star} className="size-6" />
              <Text className="text-black-300 text-xl font-rubik-bold ml-2">
                {property?.rating} ({property?.reviews?.length} reviews)
              </Text>
            </View>

            <TouchableOpacity>
              <Text className="text-primary-300 text-base font-rubik-bold">
                View All
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mt-5">
            <Comment item={property?.reviews[0]} />
          </View>
        </View>
      )}
    </>
  );
};
