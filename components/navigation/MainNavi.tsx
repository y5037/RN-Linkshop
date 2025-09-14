import { View } from "react-native";
import Logo from "../../assets/images/navigation/logo.svg";
import LinkButton from "../button/LinkButton";
import { styles } from "./MainNavi.styles";

export default function MainNavi() {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <LinkButton to="/" label="생성하기" style={styles.button} />
    </View>
  );
}
