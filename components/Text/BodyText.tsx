import React, { FC } from "react";
import { Text, StyleSheet, ViewStyle } from "react-native";

import Fonts from "../../constants/fonts";

interface BodyTextProps {
  style?: ViewStyle;
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
