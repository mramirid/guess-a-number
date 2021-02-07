import React, { FC } from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

import Fonts from "../../constants/fonts";

interface BodyTextProps {
  style?: TextStyle;
}

const BodyText: FC<BodyTextProps> = (props) => (
  <Text style={{ ...styles.text, ...(props.style || {}) }}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.OpenSansRegular,
  },
});

export default BodyText;
