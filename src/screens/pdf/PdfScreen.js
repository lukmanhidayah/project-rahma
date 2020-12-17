import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
} from "react-native";
import Pdf from "react-native-pdf";
import { MaterialIcons } from "@expo/vector-icons";

const PdfScreen = () => {
  return (
    <View style={styles.container}>
      <Pdf
        activityIndicator={<ActivityIndicator size="large" color="#00ff00" />}
        source={{ uri: "http://www.africau.edu/images/default/sample.pdf" }}
        // onLoadComplete={(numberOfPages, filePath) => {
        //   console.log(`number of pages: ${numberOfPages}`);
        // }}
        // onPageChanged={(page, numberOfPages) => {
        //   console.log(`current page: ${page}`);
        // }}
        onError={(error) => {
          console.log(error);
        }}
        style={styles.pdf}
      />
      <View style={styles.containerButton}>
        <TouchableOpacity>
          <View style={styles.contentButton}>
            <MaterialIcons name="file-download" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PdfScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  containerButton: {
    position: "absolute",
    bottom: 20,
    right: 10,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
  },
  contentButton: {
    width: 50,
    backgroundColor: "#808080",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
