import React, { FC, memo, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text, Button, Alert } from "react-native";

import { fontStyles } from "../constants/fonts";
import Number from "../components/Number";
import Card from "../components/Card";
import Colors from "../constants/colors";

function getRandNumBetween(min: number, max: number, exclude: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum === exclude) {
    return getRandNumBetween(min, max, exclude);
  }
  return randNum;
}

enum GuessDirection {
  LOWER = "LOWER",
  GRATER = "GREATER",
}

interface GamePlayScreenProps {
  selectedNumber: number;
  onGameOver(guessCount: number): void;
}

const GamePlayScreen: FC<GamePlayScreenProps> = (props) => {
  const [guessCount, setGuessCount] = useState(0);
  const [curGuess, setCurGuess] = useState(
    getRandNumBetween(1, 99, props.selectedNumber),
  );
  const currentLow = useRef(1);
  const currentHigh = useRef(99);

  useEffect(() => {
    if (curGuess === props.selectedNumber) {
      props.onGameOver(guessCount);
    }
  }, [curGuess, guessCount, props]);

  const nextGuess = (direction: GuessDirection) => {
    if (
      (direction === GuessDirection.LOWER && curGuess < props.selectedNumber) ||
      (direction === GuessDirection.GRATER && curGuess > props.selectedNumber)
    ) {
      Alert.alert(
        "Invalid Hint",
        "Be honest, you know that the hint is wrong 🙂",
        [{ text: "SORRY", style: "cancel" }],
      );
      return;
    }

    switch (direction) {
      case GuessDirection.LOWER:
        currentHigh.current = curGuess;
        break;
      case GuessDirection.GRATER:
        currentLow.current = curGuess;
        break;
    }
    const nextGuess = getRandNumBetween(
      currentLow.current,
      currentHigh.current,
      curGuess,
    );
    setCurGuess(nextGuess);
    setGuessCount((guessCount) => guessCount + 1);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.numberContainer}>
        <Text style={fontStyles.heading}>Opponent&apos;s Guess</Text>
        <Number>{curGuess}</Number>
      </Card>
      <Card style={styles.buttonContainer}>
        <Button
          title={GuessDirection.LOWER}
          color={Colors.Primary}
          onPress={() => nextGuess(GuessDirection.LOWER)}
        />
        <Button
          title={GuessDirection.GRATER}
          color={Colors.Primary}
          onPress={() => nextGuess(GuessDirection.GRATER)}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  numberContainer: { alignItems: "center" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});

export default memo(GamePlayScreen);
