import React, { useState, useEffect, useCallback } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import CustomSafeArea from "../../components/commons/CustomSafeArea";
import CustomButton from "../../components/commons/CustomButton";
import CustomModal from "../../components/commons/CustomModal";

const UploadScreen = () => {
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    try {
      closeModal();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const snapImage = async () => {
    try {
      closeModal();
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const showModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <CustomSafeArea style={styles.screen}>
      <View style={styles.imageContainer}>
        <Feather name="camera-off" size={80} color="gray" style={styles.icon} />
        {image && <Image source={{ uri: image }} style={styles.image} />}
      </View>
      <CustomButton onPress={showModal}>
        <View style={styles.card}>
          <Text>Choose image</Text>
        </View>
      </CustomButton>
      <CustomModal isVisible={modalVisible} onClickBackdrop={closeModal}>
        <TouchableOpacity onPress={snapImage}>
          <View style={styles.modalButtonContainer}>
            <Text style={styles.textButton}>Open Camera</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={pickImage}>
          <View style={styles.modalButtonContainer}>
            <Text style={styles.textButton}>Open Gallery</Text>
          </View>
        </TouchableOpacity>
      </CustomModal>
    </CustomSafeArea>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  /* Other styles hidden to keep the example brief... */
  screen: {
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageContainer: {
    width: 300,
    height: 300,
    backgroundColor: "#eee",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  icon: {
    position: "absolute",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  card: {
    borderWidth: 0.2,
    borderColor: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    margin: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  modalButtonContainer: {
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  textButton: {
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
});
