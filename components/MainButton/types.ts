import { GestureResponderEvent, ViewStyle } from "react-native";

export interface MainButtonProps {
  style?: ViewStyle;
  onPress(event: GestureResponderEvent): void;
}
