import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import CustomSafeArea from "../../components/commons/CustomSafeArea";
import SignatureScreen from "react-native-signature-canvas";
import CustomButton from "../../components/commons/CustomButton";

//This feature used to two library
// 1. react-native-signature-canvas
// 2. react-native-webview

const canvasStyle = `.m-signature-pad--footer
.button {
  display: none
  }

  .m-signature-pad--body{
      border: none;
      width: 100%;
      left: 0;
      top: 0;
      height: 100%;
      padding: 0;
      margin: 0
  }

  .m-signature-pad--footer{
      display: none
  }
`;

const DigiSignScreen = () => {
  const ref = useRef();
  const [signature, setSign] = useState(null);

  const handleSignature = (signature) => {
    console.log(signature);
    setSign(signature);
  };

  const handleEmpty = () => {
    alert("Please fill in signature");
  };
  const handleOnClear = () => {
    setSign(null)
  };
  return (
    <CustomSafeArea>
      <View style={styles.canvasContainer}>
        <SignatureScreen
          ref={ref}
          onOK={handleSignature}
          onClear={handleOnClear}
          onEmpty={handleEmpty}
          descriptionText=""
          clearText="Clear"
          confirmText="Save"
          webStyle={canvasStyle}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => {
            ref.current.readSignature();
          }}
        >
          <View style={styles.buttonContent}>
            <Text>Save</Text>
          </View>
        </CustomButton>
        <CustomButton
          onPress={() => {
            ref.current.clearSignature();
          }}
        >
          <View style={styles.buttonContent}>
            <Text>Clear</Text>
          </View>
        </CustomButton>
      </View>
      {signature && (
        <Image
          resizeMode={"contain"}
          style={{ width: "100%", height: 114 }}
          source={{ uri: signature }}
        />
      )}
    </CustomSafeArea>
  );
};

export default DigiSignScreen;

const styles = StyleSheet.create({
  canvasContainer: {
    width: "100%",
    height: "50%",
  },
  buttonContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContent: {
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 20,
    backgroundColor: "#ccc",
  },
});
