import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox, Button } from "react-native-elements";

export const Resultados = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: { flexDirection: "row", flexWrap: "wrap", justifyContent: "center" },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    margin: 5,
    padding: 5,
  },
  button: {
    width: "50%",
    alignSelf: "center",
    padding: 10,
  },
});
