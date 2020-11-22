import React from "react";

//react-navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//custom StackNavigator
import StackNavigator from "./StackNavigator";

//Navigation Screen
import HomeNavigator from "./home/HomeNavigator";
import FingerNavigator from "./finger/FingerNavigator";

//instantiation createStackNavigator
const Main = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator>
        <Main.Screen name="Home" component={HomeNavigator} />
        <Main.Screen name="Finger" component={FingerNavigator} />
      </StackNavigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
