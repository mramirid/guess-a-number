import React, { FC, memo } from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../constants/colors";
import Fonts from "../constants/fonts";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = (props) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    backgroundColor: Colors.Primary,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  headerTitle: {
    color: "white",
    fontFamily: Fonts.OpenSansBold,
    fontSize: 18,
  },
});

export default memo(Header);
