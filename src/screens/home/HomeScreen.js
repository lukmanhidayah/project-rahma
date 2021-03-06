import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

import CustomButton from "../../components/commons/CustomButton";
import CustomSafeArea from "../../components/commons/CustomSafeArea";

const HomeScreen = (props) => {
  return (
    <CustomSafeArea>
      <StatusBar style="auto" translucent={false} backgroundColor="#ccc" />
      <ScrollView style={styles.scrollView}>
        <CustomButton
          onPress={() => {
            props.navigation.navigate("Finger");
          }}
        >
          <View style={styles.buttonContainer}>
            <View style={styles.cardIconContainer}>
              <Ionicons name="ios-finger-print" size={30} color="black" />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.title}>Finger</Text>
              <Text>Make sure your finger is clean</Text>
            </View>
          </View>
        </CustomButton>
        <CustomButton onPress={() => {}}>
          <View style={styles.buttonContainer}>
            <View style={styles.cardIconContainer}>
              <MaterialCommunityIcons
                name="face-recognition"
                size={30}
                color="black"
              />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.title}>Face Detection</Text>
              <Text>Maybe your face not allegeable</Text>
            </View>
          </View>
        </CustomButton>
        <CustomButton
          onPress={() => {
            props.navigation.navigate("Text");
          }}
        >
          <View style={styles.buttonContainer}>
            <View style={styles.cardIconContainer}>
              <MaterialCommunityIcons
                name="text-subject"
                size={30}
                color="black"
              />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.title}>Text Detection</Text>
              <Text>Detect text from your picture</Text>
            </View>
          </View>
        </CustomButton>
        <CustomButton
          onPress={() => {
            props.navigation.navigate("Upload");
          }}
        >
          <View style={styles.buttonContainer}>
            <View style={styles.cardIconContainer}>
              <MaterialCommunityIcons
                name="camera-enhance-outline"
                size={30}
                color="black"
              />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.title}>Upload image</Text>
              <Text>Don't forget to send your friend number</Text>
            </View>
          </View>
        </CustomButton>
        <CustomButton
          onPress={() => {
            props.navigation.navigate("DigiSign");
          }}
        >
          <View style={styles.buttonContainer}>
            <View style={styles.cardIconContainer}>
              <FontAwesome5 name="signature" size={30} color="black" />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.title}>Digital Signature</Text>
              <Text>I don't know the best practice to use this feature</Text>
            </View>
          </View>
        </CustomButton>
        <CustomButton
          onPress={() => {
            props.navigation.navigate("Maps");
          }}
        >
          <View style={styles.buttonContainer}>
            <View style={styles.cardIconContainer}>
              <Feather name="map-pin" size={30} color="black" />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.title}>Maps</Text>
              <Text>Linking to google maps or apple maps</Text>
            </View>
          </View>
        </CustomButton>
        <CustomButton
          onPress={() => {
            props.navigation.navigate("Pdf");
          }}
        >
          <View style={styles.buttonContainer}>
            <View style={styles.cardIconContainer}>
              <MaterialCommunityIcons
                name="file-document-box-outline"
                size={30}
                color="black"
              />
            </View>
            <View style={styles.cardTextContainer}>
              <Text style={styles.title}>PDF</Text>
              <Text>Open and downloads pdf</Text>
            </View>
          </View>
        </CustomButton>
      </ScrollView>
    </CustomSafeArea>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 10,
    flex: 1,
  },
  buttonContainer: {
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
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
    justifyContent: "center",
    alignItems: "center",
  },
  cardTextContainer: {
    width: "70%",
    paddingLeft: "5%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
});
