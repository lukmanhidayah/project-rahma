import React from "react";

//react-navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//custom StackNavigator
import StackNavigator from "./StackNavigator";

//Navigation Screen
import HomeNavigator from "./home/HomeNavigator";
import FingerNavigator from "./finger/FingerNavigator";
import TextNavigator from "./text/TextNavigator";
import UploadNavigator from "./upload/UploadNavigator";
import DigiSignNavigator from "./digisign/DigiSignNavigator";
import MapsNavigator from "./maps/MapsNavigator";

//instantiation createStackNavigator
const Main = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator>
        <Main.Screen name="Home" component={HomeNavigator} />
        <Main.Screen name="Finger" component={FingerNavigator} />
        <Main.Screen name="Text" component={TextNavigator} />
        <Main.Screen name="Upload" component={UploadNavigator} />
        <Main.Screen name="DigiSign" component={DigiSignNavigator} />
        <Main.Screen name="Maps" component={MapsNavigator} />
      </StackNavigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
