import React, { FC } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { MainButtonProps } from "./types";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

const MainButton: FC<MainButtonProps> = (props) => (
  <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
    <View style={{ ...styles.buttonContent, ...(props.style || {}) }}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContent: {
    backgroundColor: Colors.Primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
    fontFamily: Fonts.OpenSansRegular,
    fontSize: 18,
  },
});

export default MainButton;
