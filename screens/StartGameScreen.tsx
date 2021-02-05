import React, { FC, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Colors from "../constants/colors";
import Card from "../components/Card";
import Input from "../components/Input";

const StartGameScreen: FC = () => {
  const [enteredVal, setEnteredVal] = useState("");
  const [inputConfirmed, setInputConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number>(0);

  const changeInputValue = (text: string) => {
    setEnteredVal(text.replace(/[^0-9]/g, ""));
  };

  const resetInput = () => {
    setInputConfirmed(false);
    setEnteredVal("");
  };

  const confirmInput = () => {
    const chosenNumber = parseInt(enteredVal);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid Input",
        "Number has to be a number between 1 and 99",
        [{ text: "OK", style: "destructive", onPress: resetInput }],
      );
      return;
    }
    setInputConfirmed(true);
    setEnteredVal("");
    setSelectedNumber(chosenNumber);
  };

  let confirmedContent: JSX.Element | null = null;
  if (inputConfirmed) {
    confirmedContent = <Text>Chosen number: {selectedNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={changeInputValue}
            value={enteredVal}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="RESET"
                color={Colors.Accent}
                onPress={resetInput}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="CONFIRM"
                color={Colors.Primary}
                onPress={confirmInput}
              />
            </View>
          </View>
        </Card>
        {confirmedContent}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: "45%",
  },
});

export default StartGameScreen;
