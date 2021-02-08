import { Component } from "react";
import { Constructor, NativeMethodsMixin } from "react-native";

import { MainButtonProps } from "./types";

class MainButtonComponent extends Component<MainButtonProps> {}

const MainButtonBase: Constructor<NativeMethodsMixin> &
  typeof MainButtonComponent;

export default class MainButton extends MainButtonBase {}
