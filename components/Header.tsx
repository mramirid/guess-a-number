import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";

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
    backgroundColor: "#f7287b",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 25,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
  },
});

export default Header;
