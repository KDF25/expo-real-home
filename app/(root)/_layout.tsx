import { PATHS } from "@/src/shared/constants";
import { useGlobalContext } from "@/src/shared/providers";
import { Redirect, Slot } from "expo-router";
import { ActivityIndicator, SafeAreaView } from "react-native";

export default function AppLayout() {
  const { loading, isLoggedIn } = useGlobalContext();

  if (isLoggedIn) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-primary-300" size={"large"} />
      </SafeAreaView>
    );
  }
  if (!isLoggedIn) return <Redirect href={PATHS.SIGN_IN} />;

  return <Slot />;
}
