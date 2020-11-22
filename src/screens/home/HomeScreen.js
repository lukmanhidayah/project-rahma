import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CustomButton from "../../components/commons/CustomButton";
import CustomSafeArea from "../../components/commons/CustomSafeArea";

const HomeScreen = (props) => {
  return (
    <CustomSafeArea style={styles.screen}>
      <StatusBar style="auto" translucent={false} backgroundColor="#ccc" />
      <CustomButton onPress={() => {
          props.navigation.navigate('Finger')
      }}>
        <View style={styles.buttonContainer}>
          <View style={styles.cardIconContainer}>
            <Ionicons name="ios-finger-print" size={30} color="black" />
          </View>
          <View style={styles.cardTextContainer}>
            <Text style={styles.title}>Finger</Text>
            <Text>
              Please, make sure your finger is clean
            </Text>
          </View>
        </View>
      </CustomButton>
      <CustomButton onPress={() => {}}>
        <View style={styles.buttonContainer}>
          <Text>Home</Text>
        </View>
      </CustomButton>
    </CustomSafeArea>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  buttonContainer: {
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  cardIconContainer: {
    width: "20%",
    justifyContent:'center',
    alignItems:'center'
  },
  cardTextContainer: {
    width: "70%",
  },
  title: {
      fontWeight: 'bold',
      fontSize: 18
  }
});
