import React from "react";

//react navigation
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

//custom stack navigator
import StackNavigator from "../StackNavigator";

//instantiation stack navigation
const Upload = createStackNavigator();

//screen
import UploadScreen from "../../screens/upload/UploadScreen";

//main
const UploadNavigator = () => {
  return (
    <StackNavigator
      initialRouteName="Upload"
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        animationEnabled: true,
      }}
    >
      <Upload.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          headerShown: true,
          animationEnabled: true,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </StackNavigator>
  );
};

export default UploadNavigator;
