import React from "react";
import {
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Text,
  View,
} from "react-native";

const CustomModal = ({ isVisible = true, onClickBackdrop, children }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      statusBarTranslucent={true}
      visible={isVisible}
    >
      <TouchableWithoutFeedback onPress={onClickBackdrop}>
        <View style={styles.backdrop}>
          <View style={[styles.modalContent]}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    borderRadius: 5,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
});
