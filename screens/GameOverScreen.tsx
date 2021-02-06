import React, { FC, memo } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Colors from "../constants/colors";

interface GameOverScreenProps {
  guessCount: number;
  selectedNumber: number;
  onNewGame(): void;
}

const GameOverScreen: FC<GameOverScreenProps> = (props) => (
  <View style={styles.screen}>
    <Text>The game is over...</Text>
    <Text>Number of moves: {props.guessCount}</Text>
    <Text>Number was: {props.selectedNumber}</Text>
    <Button title="NEW GAME" color={Colors.Primary} onPress={props.onNewGame} />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default memo(GameOverScreen);
