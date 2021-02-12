import React, { FC, memo } from "react";
import { Text, StyleSheet, Image, ScrollView } from "react-native";

import BodyText from "../components/Text/BodyText";
import HeadingText from "../components/Text/HeadingText";
import MainButton from "../components/MainButton/MainButton";
import Colors from "../constants/colors";
import Fonts from "../constants/fonts";
import useReactiveDimensions from "../hooks/useReactiveDimensions";

interface GameOverScreenProps {
  guessCount: number;
  selectedNumber: number;
  onNewGame(): void;
}

const GameOverScreen: FC<GameOverScreenProps> = (props) => {
  const dimensions = useReactiveDimensions();
  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.resultContainer}>
      <HeadingText>The game is over!</HeadingText>
      <Image
        resizeMode="cover"
        source={require("../assets/success.png")}
        style={{
          ...styles.image,
          width: dimensions.window.width * 0.7,
          height: dimensions.window.width * 0.7,
          borderRadius: (dimensions.window.width * 0.7) / 2,
          marginVertical: dimensions.window.height / 30,
        }}
      />
      <BodyText
        style={{
          ...styles.resultText,
          fontSize: dimensions.window.height < 400 ? 16 : 20,
          marginVertical: dimensions.window.height / 60,
        }}>
        Your phone needed{" "}
        <Text style={styles.highlightText}>{props.guessCount}</Text> moves to
        guess the number{" "}
        <Text style={styles.highlightText}>{props.selectedNumber}</Text>
      </BodyText>
      <MainButton onPress={props.onNewGame}>NEW GAME</MainButton>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  resultContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    borderWidth: 3,
    borderColor: "black",
  },
  resultText: {
    textAlign: "center",
  },
  highlightText: {
    color: Colors.Primary,
    fontFamily: Fonts.OpenSansBold,
  },
});

export default memo(GameOverScreen);
