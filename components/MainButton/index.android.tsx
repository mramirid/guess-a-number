import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity,
} from "react-native";

import { MainButtonProps } from "./types";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

const MainButton: FC<MainButtonProps> = (props) => {
  const buttonContent = (
    <View style={{ ...styles.buttonContent, ...(props.style || {}) }}>
      <Text style={styles.buttonText}>{props.children}</Text>
    </View>
  );

  if (Platform.Version >= 21) {
    return (
      <View style={styles.buttonAndroidContainer}>
        <TouchableOpacity onPress={props.onPress}>
          {buttonContent}
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.buttonAndroidContainer}>
      <TouchableNativeFeedback onPress={props.onPress}>
        {buttonContent}
      </TouchableNativeFeedback>
    </View>
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
