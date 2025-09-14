import { Platform, StatusBar, StyleSheet } from "react-native";
import { colors } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 36,
    paddingHorizontal: 16,
    marginTop: 28,
    paddingBottom: 44,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 1000,
    backgroundColor: "#fff",
  },
  logo: {
    width: 152,
    height: 32,
  },
  button: {
    paddingHorizontal: 12,
    height: 36,
    paddingTop: 10,
    borderRadius: 37,
    backgroundColor: colors.primary,
  },
});
