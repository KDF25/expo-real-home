import {
  Agent,
  Description,
  Facilities,
  Gallery,
  getPropertyById,
  Information,
  IProperty,
  Location,
  Overview,
  Price,
  Reviews,
} from "@/src/entities/property";
import { useAppwrite } from "@/src/shared/database";
import { useGlobalContext } from "@/src/shared/providers";
import { icons, images } from "@/src/shared/ui";
import { router, useLocalSearchParams } from "expo-router";
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";

export default function PropertyIdScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const { user } = useGlobalContext();
  const windowHeight = Dimensions.get("window").height;
  const { data } = useAppwrite({
    fn: getPropertyById,
    params: {
      id: id!,
    },
    skip: !id || !user,
  });
  const property = data as unknown as IProperty;

  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32 bg-white"
      >
        <View className="relative w-full" style={{ height: windowHeight / 2 }}>
          <Image
            source={{ uri: property?.image }}
            className="size-full"
            resizeMode="cover"
          />
          <Image
            source={images.whiteGradient}
            className="absolute top-0 w-full z-40"
          />

          <View
            className="z-50 absolute inset-x-7"
            style={{
              top: Platform.OS === "ios" ? 70 : 20,
            }}
          >
            <View className="flex flex-row items-center w-full justify-between">
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
              >
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>

              <View className="flex flex-row items-center gap-3">
                <Image
                  source={icons.heart}
                  className="size-7"
                  tintColor={"#191D31"}
                />
                <Image source={icons.send} className="size-7" />
              </View>
            </View>
          </View>
        </View>

        <View className="px-5 mt-7 flex gap-2">
          <Description property={property} />
          <Information property={property} />
          <Agent property={property} />
          <Overview property={property} />
          <Facilities property={property} />
          <Gallery property={property} />
          <Location property={property} />
          <Reviews property={property} />
        </View>
      </ScrollView>

      <View className="absolute bg-white bottom-0 w-full rounded-t-2xl border-t border-r border-l border-primary-200 p-7">
        <Price property={property} />
      </View>
    </View>
  );
}
