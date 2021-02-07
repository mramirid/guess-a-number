import React, { FC, memo } from "react";
import { Text, StyleSheet, Image, ScrollView } from "react-native";

import BodyText from "../components/Text/BodyText";
import HeadingText from "../components/Text/HeadingText";
import MainButton from "../components/Button/MainButton";
import Colors from "../constants/colors";
import Fonts from "../constants/fonts";
import useReactiveDimension from "../hooks/useReactiveDimension";

interface GameOverScreenProps {
  guessCount: number;
  selectedNumber: number;
  onNewGame(): void;
}

const GameOverScreen: FC<GameOverScreenProps> = (props) => {
  const windowSizes = useReactiveDimension("window");
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <HeadingText>The game is over!</HeadingText>
      <Image
        resizeMode="cover"
        source={require("../assets/success.png")}
        style={{
          width: windowSizes.width * 0.7,
          height: windowSizes.width * 0.7,
          borderRadius: (windowSizes.width * 0.7) / 2,
          borderWidth: 3,
          borderColor: "black",
          marginVertical: windowSizes.height / 30,
        }}
      />
      <BodyText
        style={{
          textAlign: "center",
          fontSize: windowSizes.height < 400 ? 16 : 20,
          marginVertical: windowSizes.height / 60,
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
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  highlightText: {
    color: Colors.Primary,
    fontFamily: Fonts.OpenSansBold,
  },
});

export default memo(GameOverScreen);
