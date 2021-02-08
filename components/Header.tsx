import React, { FC, memo } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import Colors from "../constants/colors";
import Fonts from "../constants/fonts";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = (props) => (
  <View
    style={{
      ...styles.headerBase,
      ...Platform.select({
        ios: styles.headerIOS,
        android: styles.headerAndroid,
      }),
    }}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    elevation: 6,
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.Primary,
    borderBottomColor: "transparent",
    borderBottomWidth: 0,
  },
  title: {
    color: Platform.OS === "ios" ? Colors.Primary : "white",
    fontFamily: Fonts.OpenSansBold,
    fontSize: 18,
  },
});

export default memo(Header);
