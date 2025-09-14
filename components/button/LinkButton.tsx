import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { LinkButtonProps } from "./types";

export default function LinkButton({ to, label, style }: LinkButtonProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(to);
  };
  return (
    <TouchableOpacity style={style} onPress={handlePress}>
      <Text style={{ color: "#fff", fontWeight: "bold" }}>{label}</Text>
    </TouchableOpacity>
  );
}
