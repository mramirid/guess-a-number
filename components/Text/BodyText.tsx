import React, { FC } from "react";
import { Text, StyleSheet, TextStyle, TextProps } from "react-native";

import Fonts from "../../constants/fonts";

interface BodyTextProps extends TextProps {
  style?: TextStyle;
}

const BodyText: FC<BodyTextProps> = (props) => (
  <Text {...props} style={{ ...styles.text, ...(props.style || {}) }}>
    {props.children}
  </Text>
);

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.OpenSansRegular,
  },
});

export default BodyText;
