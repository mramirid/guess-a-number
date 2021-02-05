import React, { FC } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";

const App: FC = () => (
  <View>
    <StatusBar style="light" />
    <Header title="Guess a Number" />
    <StartGameScreen />
  </View>
);

export default App;
