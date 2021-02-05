import React, { FC } from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import Header from "./components/Header";

const App: FC = () => (
  <View>
    <StatusBar style="light" />
    <Header title="Guess a Number" />
  </View>
);

export default App;
