import React from "react";

//react navigation
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

//custom stack navigator
import StackNavigator from "../StackNavigator";

//instantiation stack navigation
const Maps = createStackNavigator();

//screen
import MapsScreen from "../../screens/maps/MapsScreen";

//main
const MapsNavigator = () => {
  return (
    <StackNavigator
      initialRouteName="Maps"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}
    >
      <Maps.Screen
        name="Maps"
        component={MapsScreen}
        options={{
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </StackNavigator>
  );
};

export default MapsNavigator;
