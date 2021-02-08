import React, { FC, memo } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../constants/colors";
import Fonts from "../constants/fonts";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = (props) => (
  <View style={styles.header}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    backgroundColor: Platform.OS === "android" ? Colors.Primary : "white",
    borderBottomColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    elevation: 6,
  },
  title: {
    color: Platform.OS === "ios" ? Colors.Primary : "white",
    fontFamily: Fonts.OpenSansBold,
    fontSize: 18,
  },
});

export default memo(Header);
