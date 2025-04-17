import { View } from "react-native";

import { PATHS } from "@/src/shared/constants";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View>
      <Link href={PATHS.SIGN_IN} className="font-bold">sign-in</Link>
      <Link href={PATHS.EXPLORE}>EXplore</Link>
      <Link href={PATHS.PROFILE}>Profile</Link>
      <Link href={PATHS.PROPERTIES_ID}>Property</Link>
    </View>
  );
}
