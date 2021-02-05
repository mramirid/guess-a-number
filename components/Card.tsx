import React, { FC } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";

interface CardProps {
  style?: ViewStyle;
}

const Card: FC<CardProps> = (props) => {
  return (
    <View style={{ ...styles.card, ...(props.style || {}) }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: "black",
    shadowOffset: { height: 0, width: 2 },
    shadowRadius: 6,
    elevation: 8,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
