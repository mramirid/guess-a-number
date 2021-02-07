import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  TouchableOpacity,
} from "react-native";

import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

interface MainButtonProps {
  style?: ViewStyle;
  onPress(event: GestureResponderEvent): void;
}

const MainButton: FC<MainButtonProps> = (props) => (
  <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
    <View style={{ ...styles.button, ...(props.style || {}) }}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
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
