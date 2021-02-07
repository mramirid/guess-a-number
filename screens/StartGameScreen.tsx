import React, { FC, useCallback, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Colors from "../constants/colors";
import Card from "../components/Card";
import Input from "../components/Input";
import Number from "../components/Number";
import BodyText from "../components/Text/BodyText";
import HeadingText from "../components/Text/HeadingText";
import MainButton from "../components/Button/MainButton";

interface StartGameScreenProps {
  onStartGame(selectedNumber: number): void;
}

const StartGameScreen: FC<StartGameScreenProps> = (props) => {
  const [enteredVal, setEnteredVal] = useState("");
  const [inputConfirmed, setInputConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState<number>();

  const changeInputValue = useCallback((text: string) => {
    setEnteredVal(text.replace(/[^0-9]/g, ""));
  }, []);

  const resetInput = useCallback(() => {
    setInputConfirmed(false);
    setEnteredVal("");
  }, []);

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
    setSelectedNumber(chosenNumber);
    setEnteredVal("");
    Keyboard.dismiss();
  };

  let confirmedContent: JSX.Element | null = null;
  if (inputConfirmed && selectedNumber) {
    confirmedContent = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
        <Number>{selectedNumber}</Number>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          START GAME
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <HeadingText style={styles.title}>Start a New Game!</HeadingText>
        <Card style={styles.inputContainer}>
          <HeadingText style={styles.inputLabel}>Select a Number</HeadingText>
          <Input
            style={styles.input}
            placeholder="XX"
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
    flex: 1,
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
  inputLabel: {
    fontSize: 16,
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
    marginTop: 10,
  },
  button: {
    width: "45%",
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
