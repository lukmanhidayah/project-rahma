import React from "react";

//react navigation
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

//custom stack navigator
import StackNavigator from "../StackNavigator";

//instantiation stack navigation
const Finger = createStackNavigator();

//screen
import FingerScreen from "../../screens/finger/FingerScreen";

//main
const FingerNavigator = () => {
  return (
    <StackNavigator
      initialRouteName="Finger"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}
    >
      <Finger.Screen
        name="Finger"
        component={FingerScreen}
        options={{
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </StackNavigator>
  );
};

export default FingerNavigator;
