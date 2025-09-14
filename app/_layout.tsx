import { Stack } from "expo-router";
import { SafeAreaView, View } from "react-native";
import MainNavi from "../components/navigation/MainNavi";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MainNavi />
        <Stack screenOptions={{ headerShown: false }} />
      </View>
    </SafeAreaView>
  );
}
