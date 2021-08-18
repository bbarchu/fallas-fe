import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const Home = () => (
  <View style={styles.container}>
    <Text style={styles.texto}>
      El usuario tiene la capacidad de observar los síntomas del paciente y
      recolectar información de los mismos. Sin embargo, no tiene la experiencia
      y el conocimiento necesario para hacer un diagnóstico y poder recomendarle
      al paciente el tratamiento más apropiado para él. Para poder brindar un
      servicio útil a sus clientes, el usuario hará uso de nuestro sistema
      experto que será capaz de inferir el tratamiento ideal para cada uno de
      ellos. El input del sistema será toda la información que el usuario sea
      capaz de recolectar acerca del cuadro del paciente, tanto por los estudios
      a los cuales lo someta como lo que él mismo puede observar. El sistema irá
      un paso más allá de la recomendación del tratamiento, especificando las
      herramientas y materiales que deberían utilizarse para llevarse a cabo así
      como el protocolo y las precauciones que deban tenerse en cuenta durante
      el proceso.
    </Text>

    <Text style={styles.textoAlcance}>
      Delimitamos el alcance de nuestro sistema experto sesgando sus
      conocimiento a únicamente 3 tratamientos:
    </Text>
    <View style={styles.row}>
      <View style={styles.col}>
        <Text style={styles.item}> Corona provisoria </Text>
        <Text style={styles.item}> Corona definitiva </Text>
        <Text style={styles.item}> Placa miorrelajante</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    fontSize: 15,
    color: "#111",
    textAlign: "center",
    padding: 10,
    margin: 10,
  },
  textoAlcance: {
    fontSize: 20,
    padding: 10,
    margin: 10,
    textAlign: "justify",
  },
  col: { flexDirection: "column" },
  row: { alignItems: "center" },
  item: { fontSize: 25, fontWeight: "bold" },
});
