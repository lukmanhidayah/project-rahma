import React from "react";

//react navigation
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

//custom stack navigator
import StackNavigator from "../StackNavigator";

//instantiation stack navigation
const Pdf = createStackNavigator();

//screen
import PdfScreen from "../../screens/pdf/PdfScreen";

//main
const PdfNavigator = () => {
  return (
    <StackNavigator
      initialRouteName="Pdf"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}
    >
      <Pdf.Screen
        name="Pdf"
        component={PdfScreen}
        options={{
          headerShown: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </StackNavigator>
  );
};

export default PdfNavigator;
