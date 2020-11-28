import React from "react";

//react navigation
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

//custom stack navigator
import StackNavigator from "../StackNavigator";

//instantiation stack navigation
const DigiSign = createStackNavigator();

//screen
import DigiSignScreen from "../../screens/digisign/DigiSignScreen";

//main
const DigiSignNavigator = () => {
  return (
    <StackNavigator
      initialRouteName="DigiSign"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}
    >
      <DigiSign.Screen
        name="DigiSign"
        component={DigiSignScreen}
        options={{
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </StackNavigator>
  );
};

export default DigiSignNavigator;
