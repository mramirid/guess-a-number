import React, { FC, memo } from "react";
import { Text, StyleSheet, Image, Dimensions, ScrollView } from "react-native";

import BodyText from "../components/Text/BodyText";
import HeadingText from "../components/Text/HeadingText";
import MainButton from "../components/Button/MainButton";
import Colors from "../constants/colors";
import Fonts from "../constants/fonts";

interface GameOverScreenProps {
  guessCount: number;
  selectedNumber: number;
  onNewGame(): void;
}

const GameOverScreen: FC<GameOverScreenProps> = (props) => (
  <ScrollView contentContainerStyle={styles.screen}>
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
    <MainButton onPress={props.onNewGame}>NEW GAME</MainButton>
  </ScrollView>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    marginVertical: Dimensions.get("window").height / 30,
  },
  resultText: {
    textAlign: "center",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20,
    marginVertical: Dimensions.get("window").height / 60,
  },
  highlightText: {
    color: Colors.Primary,
    fontFamily: Fonts.OpenSansBold,
  },
});

export default memo(GameOverScreen);
