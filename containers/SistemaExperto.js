import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox, Button } from "react-native-elements";

export const SistemaExperto = ({ navigation }) => {
  const [corona, setCorona] = useState("ok");
  const [raiz, setRaiz] = useState("ok");
  const [casos, setCasos] = useState("ok");
  const [piezaDentaria, setPiezaDentaria] = useState("ok");
  const [extraccionPrevia, setExtraccionPrevia] = useState("no");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Corona</Text>
      <View style={styles.row}>
        <CheckBox
          title="Ok"
          checked={corona == "ok"}
          onPress={() => setCorona("ok")}
        />
        <CheckBox
          title="fracturada"
          checked={corona == "fracturada"}
          onPress={() => setCorona("fracturada")}
        />
        <CheckBox
          title="cariada"
          checked={corona == "cariada"}
          onPress={() => setCorona("cariada")}
        />

        <CheckBox
          title="destruida"
          checked={corona == "destruida"}
          onPress={() => setCorona("destruida")}
        />
      </View>
      <Text style={styles.title}>Raiz</Text>
      <View style={styles.row}>
        <CheckBox
          title="Ok"
          checked={raiz == "ok"}
          onPress={() => setRaiz("ok")}
        />

        <CheckBox
          title="No se puede recuperar"
          checked={raiz == "destruida"}
          onPress={() => setRaiz("destruida")}
        />
      </View>
      <Text style={styles.title}>Casos</Text>
      <View style={styles.row}>
        <CheckBox
          title="Ningun caso extraordinario"
          checked={casos == "ok"}
          onPress={() => setCasos("ok")}
        />

        <CheckBox
          title="Dientes supernumerarios"
          checked={casos == "supernumerarios"}
          onPress={() => setCasos("supernumerarios")}
        />
      </View>
      <Text style={styles.title}>Piezas dentaria</Text>
      <View style={styles.row}>
        <CheckBox
          title="Ok"
          checked={piezaDentaria == "ok"}
          onPress={() => setPiezaDentaria("ok")}
        />

        <CheckBox
          title="Mal ubicada"
          checked={piezaDentaria == "inconveniente"}
          onPress={() => setPiezaDentaria("inconveniente")}
        />
      </View>
      <Text style={styles.title}>Extracción dentaria previa</Text>
      <View style={styles.row}>
        <CheckBox
          title="No hubo"
          checked={extraccionPrevia == "no"}
          onPress={() => setExtraccionPrevia("no")}
        />

        <CheckBox
          title="Si hubo"
          checked={extraccionPrevia == "si"}
          onPress={() => setExtraccionPrevia("si")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Obtener resultado"
          onPress={() => navigation.navigate("Resultados")}
        />
      </View>
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
  },
  button: {
    width: "50%",
    alignSelf: "center",
    padding: 10,
  },
});
