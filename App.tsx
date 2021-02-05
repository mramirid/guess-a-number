import React, { FC } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const App: FC = () => (
  <View>
    <StatusBar style="light" />
    <Text>Hello World</Text>
  </View>
);

export default App;
