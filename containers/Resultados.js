import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox, Button } from "react-native-elements";

export const Resultados = (props) => {
  const resultado = props?.route?.params?.respuesta?.["Tratamiento"];
  const procedimiento = props?.route?.params?.respuesta?.["Procedimiento"];
  const herramientas = props?.route?.params?.respuesta?.["Herramientas"];

  console.log(resultado, "resultados");

  return (
    <View style={styles.container}>
      <Text style={styles.textGrande}>{resultado ?? ""}</Text>

      <Text style={styles.title}>Herramientas</Text>
      <Text style={styles.text}>{herramientas ?? ""}</Text>

      <Text style={styles.title}>Procedimiento</Text>
      <Text style={styles.text}>{procedimiento ?? ""}</Text>
    </View>
  );
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
    fontSize: 18,
  },
  titleGrande: {
    textAlign: "center",
    fontWeight: "bold",
    margin: 5,
    padding: 5,
    fontSize: 21,
  },
  textGrande: {
    textAlign: "center",
    margin: 5,
    padding: 5,
    fontSize: 21,
    color: "orange",
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    margin: 5,
    paddingHorizontal: 5,
    fontSize: 18,
  },
  button: {
    width: "50%",
    alignSelf: "center",
    padding: 10,
  },
});
