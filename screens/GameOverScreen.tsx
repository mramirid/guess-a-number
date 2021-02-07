import React, { FC, memo } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import BodyText from "../components/Text/BodyText";
import HeadingText from "../components/Text/HeadingText";
import Colors from "../constants/colors";
import Fonts from "../constants/fonts";

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
    <BodyText style={styles.resultText}>
      Your phone needed{" "}
      <Text style={styles.highlightText}>{props.guessCount}</Text> moves to
      guess the number{" "}
      <Text style={styles.highlightText}>{props.selectedNumber}</Text>
    </BodyText>
    <Button title="NEW GAME" color={Colors.Primary} onPress={props.onNewGame} />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    marginTop: 30,
    marginBottom: 15,
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
    marginVertical: 15,
  },
  highlightText: {
    color: Colors.Primary,
    fontFamily: Fonts.OpenSansBold,
  },
});

export default memo(GameOverScreen);
