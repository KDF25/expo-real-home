import { PATHS } from "@/src/shared/constants";
import { login } from "@/src/shared/database";
import { useGlobalContext } from "@/src/shared/providers";
import { icons, images } from "@/src/shared/ui";
import { Redirect } from "expo-router";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignInScreen() {
  const { refetch, loading, isLoggedIn } = useGlobalContext();
  if (!loading && isLoggedIn) return <Redirect href={PATHS.MAIN} />;
  const handleLogin = async () => {
    const result = await login();

    if (result) {
      refetch({});
      // console.log("Login successful", result);
    } else {
      Alert.alert("Login failed");
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-rubik text-black-200">
            Welcome to the Real Home App
          </Text>
          <Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-300">Your Ideal Home</Text>
          </Text>
          <Text className="text-lg font-rubik text-black-200 text-center mt-12">
            Login to Real Home with Google
          </Text>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center gap-2">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
