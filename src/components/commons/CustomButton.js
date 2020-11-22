import React from "react";
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";

const CustomButton = ({ children, onPress }) => {
  const MyButton =
    Platform.OS == "android" && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity;
  return (
    <MyButton useForeground={true} onPress={onPress}>
      {children}
    </MyButton>
  );
};

export default CustomButton;
