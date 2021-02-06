import React, { FC, useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

import Fonts from "./constants/fonts";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GamePlayScreen from "./screens/GamePlayScreen";
import GameOverScreen from "./screens/GameOverScreen";

const App: FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [guessCount, setGuessCount] = useState(0);

  const startGame = useCallback((selectedNumber: number) => {
    setSelectedNumber(selectedNumber);
  }, []);

  const gameOver = useCallback((guessCount: number) => {
    setGuessCount(guessCount);
  }, []);

  const newGame = useCallback(() => {
    setGuessCount(0);
    setSelectedNumber(null);
  }, []);

  const [isFontsLoaded] = useFonts({
    [Fonts.OpenSansRegular]: require("./assets/fonts/OpenSans-Regular.ttf"),
    [Fonts.OpenSansBold]: require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  let displayedScreen = <StartGameScreen onStartGame={startGame} />;
  if (selectedNumber && guessCount <= 0) {
    displayedScreen = (
      <GamePlayScreen selectedNumber={selectedNumber} onGameOver={gameOver} />
    );
  } else if (selectedNumber && guessCount > 0) {
    displayedScreen = (
      <GameOverScreen
        guessCount={guessCount}
        selectedNumber={selectedNumber}
        onNewGame={newGame}
      />
    );
  }

  return (
    <View style={styles.appScreen}>
      <StatusBar style="light" />
      <Header title="Guess a Number" />
      {displayedScreen}
    </View>
  );
};

const styles = StyleSheet.create({
  appScreen: {
    flex: 1,
  },
});

export default App;
