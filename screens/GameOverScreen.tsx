import React, { FC, memo } from "react";
import { View, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/Text/BodyText";
import HeadingText from "../components/Text/HeadingText";
import Colors from "../constants/colors";

interface GameOverScreenProps {
  guessCount: number;
  selectedNumber: number;
  onNewGame(): void;
}

const GameOverScreen: FC<GameOverScreenProps> = (props) => (
  <View style={styles.screen}>
    <HeadingText>The game is over!</HeadingText>
    <Image
      style={styles.image}
      resizeMode="cover"
      source={require("../assets/success.png")}
    />
    <BodyText>Number of moves: {props.guessCount}</BodyText>
    <BodyText>Number was: {props.selectedNumber}</BodyText>
    <Button title="NEW GAME" color={Colors.Primary} onPress={props.onNewGame} />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    marginVertical: 30,
  },
});

export default memo(GameOverScreen);
