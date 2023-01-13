import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RNCamera, useCameraDevices } from "react-native-vision-camera";

const ScanScreen = () => {
  const devices = useCameraDevices("wide-angle-camera");
  const device = devices.back;

  const Loading = () => {};
  if (device == null) return <Loading />;

  return (
    <View>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({});
