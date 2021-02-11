import React, { FC, JSXElementConstructor } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
} from "react-native";

import { MainButtonProps } from "./types";
import Colors from "../../constants/colors";
import Fonts from "../../constants/fonts";

const MainButton: FC<MainButtonProps> = (props) => {
  let Touchable: JSXElementConstructor<
    TouchableOpacityProps | TouchableNativeFeedbackProps
  >;
  if (Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  } else {
    Touchable = TouchableOpacity;
  }

  return (
    <View style={styles.buttonAndroidContainer}>
      <Touchable onPress={props.onPress}>
        <View style={{ ...styles.buttonContent, ...(props.style || {}) }}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </Touchable>
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
