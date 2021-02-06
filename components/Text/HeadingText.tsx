import React, { FC } from "react";
import { Text, StyleSheet, TextStyle } from "react-native";

import Fonts from "../../constants/fonts";

interface HeadingTextProps {
  style?: TextStyle;
}

const BodyText: FC<HeadingTextProps> = (props) => (
  <Text style={{ ...styles.text, ...(props.style || {}) }}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.OpenSansBold,
    fontSize: 18,
  },
});

export default BodyText;
