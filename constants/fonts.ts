import { StyleSheet } from "react-native";

enum Fonts {
  OpenSansRegular = "OpenSansRegular",
  OpenSansBold = "OpenSansBold",
}

export const fontStyles = StyleSheet.create({
  heading: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 18,
  },
  body: {
    fontFamily: Fonts.OpenSansRegular,
  },
});

export default Fonts;
