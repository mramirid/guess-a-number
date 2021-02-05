import React, { FC, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

import Colors from "../constants/colors";
import Card from "../components/Card";
import Input from "../components/Input";

const StartGameScreen: FC = () => {
  const [enteredVal, setEnteredVal] = useState("");

  const changeValue = (text: string) => {
    setEnteredVal(text.replace(/[^0-9]/g, ""));
  };

  return (
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
          onChangeText={changeValue}
          value={enteredVal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="RESET" color={Colors.Accent} onPress={() => null} />
          </View>
          <View style={styles.button}>
            <Button
              title="CONFIRM"
              color={Colors.Primary}
              onPress={() => null}
            />
          </View>
        </View>
      </Card>
    </View>
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
