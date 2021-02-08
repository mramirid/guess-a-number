import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  GestureResponderEvent,
  ViewStyle,
  Platform,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";

import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

interface MainButtonProps {
  style?: ViewStyle;
  onPress(event: GestureResponderEvent): void;
}

const MainButton: FC<MainButtonProps> = (props) => {
  const buttonContent = (
    <View style={{ ...styles.buttonContent, ...(props.style || {}) }}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </View>
  );

  if (Platform.OS === "android" && Platform.Version >= 21) {
    return (
      <View style={styles.buttonAndroidContainer}>
        <TouchableNativeFeedback onPress={props.onPress}>
          {buttonContent}
        </TouchableNativeFeedback>
      </View>
    );
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      {buttonContent}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonAndroidContainer: {
    elevation: 3,
    borderRadius: 25,
    overflow: "hidden",
  },
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
