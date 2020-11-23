import React, { PureComponent } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import CustomSafeArea from "../../components/commons/CustomSafeArea";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

// eslint-disable-next-line import/no-unresolved
import { RNCamera } from "react-native-camera";

export class TextScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      flash: "off",
      zoom: 0,
      autoFocus: "on",
      depth: 0,
      type: "back",
      whiteBalance: "auto",
      ratio: "16:9",
      recordOptions: {
        mute: false,
        maxDuration: 5,
        quality: RNCamera.Constants.VideoQuality["288p"],
      },
      isRecording: false,
      canDetectFaces: false,
      canDetectText: false,
      canDetectBarcode: false,
      faces: [],
      textBlocks: [],
      barcodes: [],
      measurements: {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
      },
    };

    this.takePicture = this.takePicture.bind(this);
  }

  renderTextBlocks = () => (
    <View style={styles.facesContainer} pointerEvents="none">
      {this.state.textBlocks.map((res) => {
        console.log(res.bounds.origin.x, this.state.measurements.x);
        if (
          res.bounds.origin.x >= this.state.measurements.x &&
          res.bounds.origin.y >= this.state.measurements.y
        ) {
          return this.renderTextBlock(res);
        }
      })}
    </View>
  );

  renderTextBlock = ({ bounds, value }) => (
    <React.Fragment key={value + bounds.origin.x}>
      <Text
        style={[
          styles.textBlock,
          { left: bounds.origin.x, top: bounds.origin.y },
        ]}
      >
        {value}
      </Text>
      <View
        style={[
          styles.text,
          {
            ...bounds.size,
            left: bounds.origin.x,
            top: bounds.origin.y,
          },
        ]}
      />
    </React.Fragment>
  );

  takePicture = async function () {
    if (this.camera) {
      const data = await this.camera.takePictureAsync();
      console.warn("takePicture ", data);
    }
  };

  textRecognized = (object) => {
    const { textBlocks } = object;
    this.setState({ textBlocks });
  };

  render() {
    return (
      <CustomSafeArea>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
          }}
          type={this.state.type}
          flashMode={this.state.flash}
          autoFocus={this.state.autoFocus}
          zoom={this.state.zoom}
          whiteBalance={this.state.whiteBalance}
          ratio={this.state.ratio}
          focusDepth={this.state.depth}
          trackingEnabled
          onTextRecognized={this.textRecognized}
        >
          <View style={styles.snapContainer}>
            <TouchableOpacity
              style={[styles.flipButton]}
              onPress={this.takePicture}
            ></TouchableOpacity>
          </View>
          <View
            onLayout={({ nativeEvent }) => {
              this.setState({
                measurements: nativeEvent.layout,
              });
            }}
            ref={(ref) => {
              this.containerText = ref;
            }}
            style={styles.containerText}
          />
          {this.renderTextBlocks()}
        </RNCamera>
      </CustomSafeArea>
    );
  }
}

export default TextScreen;

const styles = StyleSheet.create({
  snapContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
  },
  flipButton: {
    height: 40,
    marginHorizontal: 2,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 40,
    borderColor: "white",
    borderWidth: 4,
    padding: 5,
    alignItems: "center",
    backgroundColor: "#ccc",
    width: 80,
    height: 80,
    justifyContent: "center",
  },
  text: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 2,
    position: "absolute",
    borderColor: "#F00",
    justifyContent: "center",
  },
  textBlock: {
    color: "#F00",
    position: "absolute",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  containerText: {
    position: "absolute",
    borderColor: "red",
    borderWidth: 1,
    top: HEIGHT * 0.1,
    alignSelf: "center",
    width: "80%",
    height: "40%",
  },
});
