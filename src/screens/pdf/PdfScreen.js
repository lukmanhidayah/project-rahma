import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  ToastAndroid,
} from "react-native";
import Pdf from "react-native-pdf";
import { MaterialIcons } from "@expo/vector-icons";
import RNDM from "react-native-easy-downloader";
import * as FileSystem from "expo-file-system";

const PdfScreen = (props) => {
  const [progress, setProgress] = useState(0);

  const onDownloadPdf = () => {
    RNDM.download({
      url: "http://www.africau.edu/images/default/sample.pdf",
      savePath: RNDM.DirDownload + "/" + "sample.pdf",
      title: "sample",
    })
      .then((res) => {
        if (res) {
          //   Toast.show("Download Berhasil.");
          console.log(res);
          ToastAndroid.showWithGravityAndOffset(
            "Download success",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );

          //   this.props.navigation.setParams({
          //     numProgress: 1,
          //   });
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          ToastAndroid.showWithGravityAndOffset(
            "Download success",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
          );
          //   Toast.show("Download Gagal.");
          //   this.props.navigation.setParams({
          //     numProgress: 1,
          //   });
        }
      });
  };

  const downloadWithFileSystem = async () => {
    try {
      const { uri } = await downloadResumable.downloadAsync();
      console.log("Finished downloading to ", uri);
    } catch (e) {
      console.error(e);
    }
  };

  const callback = (downloadProgress) => {
    const progress =
      downloadProgress.totalBytesWritten /
      downloadProgress.totalBytesExpectedToWrite;
    setProgress(progress);
  };

  const downloadResumable = FileSystem.createDownloadResumable(
    "http://techslides.com/demos/sample-videos/small.mp4",
    FileSystem.documentDirectory + "small.mp4",
    {},
    callback
  );

  return (
    <View style={styles.container}>
      <Text>Download PDF</Text>
      {/* <Pdf
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
        <TouchableOpacity onPress={onDownloadPdf}>
          <View style={styles.contentButton}>
            <MaterialIcons name="file-download" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View> */}

      <View style={styles.containerButton}>
        <TouchableOpacity onPress={downloadWithFileSystem}>
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
