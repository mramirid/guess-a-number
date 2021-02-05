import React, { FC } from "react";
import { StyleSheet, TextInput, TextInputProps, ViewStyle } from "react-native";

interface InputProps extends TextInputProps {
  style?: ViewStyle;
}

const Input: FC<InputProps> = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.input, ...(props.style || {}) }} />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
