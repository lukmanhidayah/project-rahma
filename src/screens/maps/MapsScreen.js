import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { showLocation, Popup } from "react-native-map-link";

// documentation https://github.com/flexible-agency/react-native-map-link
// I decided not to use google-maps on the app, coz it requires a billing account with a credit card by now

const options = {
  latitude: -6.902459,
  longitude: 107.61873,
  title: "Gedung Sate",
//   dialogTitle: "This is the dialog Title",
//   dialogMessage: "This is the amazing dialog Message",
//   cancelText: "This is the cancel button text",
};

export default class MapsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Popup
          isVisible={this.state.isVisible}
          onCancelPressed={() => this.setState({ isVisible: false })}
          onAppPressed={() => this.setState({ isVisible: false })}
          onBackButtonPressed={() => this.setState({ isVisible: false })}
          options={options}
        />

        <Button
          onPress={() => showLocation(options)}
          title="Show in Maps using action sheet"
        />
        <Button
          onPress={() => {
            this.setState({ isVisible: true });
          }}
          title="Show in Maps using Popup"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
