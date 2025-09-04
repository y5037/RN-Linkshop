import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundPage() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Page not found 😢</Text>
      <Link href={{ pathname: "./" }}>Go to Home</Link>
    </View>
  );
}
