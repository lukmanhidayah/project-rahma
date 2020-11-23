import React from "react";

//react navigation
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

//custom stack navigator
import StackNavigator from "../StackNavigator";

//instantiation stack navigation
const Text = createStackNavigator();

//screen
import TextScreen from "../../screens/text/TextScreen";

//main
const TextNavigator = () => {
  return (
    <StackNavigator
      initialRouteName="Text"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}
    >
      <Text.Screen
        name="Text"
        component={TextScreen}
        options={{
          headerShown: false,
          animationEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </StackNavigator>
  );
};

export default TextNavigator;
