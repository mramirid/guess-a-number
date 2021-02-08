import React, { FC, memo, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text, Alert, FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { fontStyles } from "../constants/fonts";
import Number from "../components/Number";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import BodyText from "../components/Text/BodyText";
import useReactiveDimensions from "../hooks/useReactiveDimensions";

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
  const dimensions = useReactiveDimensions();

  const initialGuess = getRandNumBetween(1, 99, props.selectedNumber);
  const currentLow = useRef(1);
  const currentHigh = useRef(99);
  const [curGuess, setCurGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  useEffect(() => {
    if (curGuess === props.selectedNumber) {
      props.onGameOver(pastGuesses.length);
    }
  }, [curGuess, pastGuesses.length, props]);

  const nextGuess = (direction: GuessDirection) => {
    if (
      (direction === GuessDirection.LOWER && curGuess < props.selectedNumber) ||
      (direction === GuessDirection.GRATER && curGuess > props.selectedNumber)
    ) {
      Alert.alert(
        "Don't lie",
        "Be honest, you know that the hint is wrong...",
        [{ text: "SORRY", style: "cancel" }],
      );
      return;
    }

    switch (direction) {
      case GuessDirection.LOWER:
        currentHigh.current = curGuess;
        break;
      case GuessDirection.GRATER:
        currentLow.current = curGuess + 1;
        break;
    }
    const nextGuess = getRandNumBetween(
      currentLow.current,
      currentHigh.current,
      curGuess,
    );
    setCurGuess(nextGuess);
    setPastGuesses((pastGuesses) => [nextGuess, ...pastGuesses]);
  };

  if (dimensions.window.height < 500) {
    return (
      <View style={styles.screen}>
        <Text style={fontStyles.heading}>Opponent&apos;s Guess</Text>
        <View style={styles.numberAndControlsContainer}>
          <MainButton onPress={() => nextGuess(GuessDirection.LOWER)}>
            <MaterialIcons name="remove" size={24} color="white" />
          </MainButton>
          <Number>{curGuess}</Number>
          <MainButton onPress={() => nextGuess(GuessDirection.GRATER)}>
            <MaterialIcons name="add" size={24} color="white" />
          </MainButton>
        </View>
        <FlatList
          style={styles.passGuessesContainer}
          contentContainerStyle={styles.list}
          data={pastGuesses}
          keyExtractor={(item) => item.toString()}
          renderItem={(data) => (
            <View style={styles.listItem}>
              <BodyText>#{pastGuesses.length - data.index}</BodyText>
              <BodyText>{data.item}</BodyText>
            </View>
          )}
        />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Card style={styles.numberContainer}>
        <Text style={fontStyles.heading}>Opponent&apos;s Guess</Text>
        <Number>{curGuess}</Number>
      </Card>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => nextGuess(GuessDirection.LOWER)}>
          <MaterialIcons name="remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={() => nextGuess(GuessDirection.GRATER)}>
          <MaterialIcons name="add" size={24} color="white" />
        </MainButton>
      </Card>
      <FlatList
        style={styles.passGuessesContainer}
        contentContainerStyle={styles.list}
        data={pastGuesses}
        keyExtractor={(item) => item.toString()}
        renderItem={(data) => (
          <View style={styles.listItem}>
            <BodyText>#{pastGuesses.length - data.index}</BodyText>
            <BodyText>{data.item}</BodyText>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  numberContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  numberAndControlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    width: 400,
    maxWidth: "90%",
  },
  passGuessesContainer: {
    width: "90%",
  },
  list: {
    justifyContent: "flex-end",
  },
  listItem: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default memo(GamePlayScreen);
