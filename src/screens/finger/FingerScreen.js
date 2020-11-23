import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ToastAndroid } from "react-native";
import * as LocalAuthentication from "expo-local-authentication";
import CustomSafeArea from "../../components/commons/CustomSafeArea";

let unSubscribeLocalAuthentication;

export default function FingerScreen() {
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    LocalAuthentication.cancelAuthenticate();
    const unsubscribe = setTimeout(() => {
      fingerAuth();
    }, 1000);
    return () => {
      clearTimeout(unsubscribe);
    };
  }, []);

  const fingerAuth = useCallback(() => {
    if (!detectHardware() && !checkBiometric()) {
      alert("Your phone does not support this feature");
    } else {
      unSubscribeLocalAuthentication =LocalAuthentication.authenticateAsync({
        promptMessage: "Finger Authentication",
        cancelLabel: "cancel",
      })
        .then((res) => {
          console.log(res);
          if (res.success === true) {
            if (attempt > 0) {
              setAttempt(0);
            }
            alert("You are great");
          } else {
            setAttempt((prevState) => prevState + 1);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
    return () => {
      if(unSubscribeLocalAuthentication){
        unSubscribeLocalAuthentication
      }
    }
  }, [detectHardware, checkBiometric]);

  const detectHardware = async () => {
    return await LocalAuthentication.hasHardwareAsync();
  };

  const checkBiometric = async () => {
    return await LocalAuthentication.isEnrolledAsync();
  };

  return (
    <CustomSafeArea style={styles.screen}>
      <Text style={styles.title}>Finger</Text>
      <Text>
        Please, make sure your finger is clean, if not yet, wash your finger!
      </Text>
    </CustomSafeArea>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  titleContainer: {
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
