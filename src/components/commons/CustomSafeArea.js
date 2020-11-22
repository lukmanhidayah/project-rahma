import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomSafeArea = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen]}>
      <View style={[styles.screen, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default CustomSafeArea;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
});
