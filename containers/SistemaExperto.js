import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { CheckBox, Button } from "react-native-elements";

export const SistemaExperto = ({ navigation }) => {
  const [fracturada, setFracturada] = useState(false);
  const [destruida, setDestruida] = useState(false);
  const [cariada, setCariada] = useState(false);
  const [raizRecuperable, setRaizRecuperable] = useState(false);
  const [superNumerarios, setSuperNumerarios] = useState(false);
  const [malUbicada, setMalUbicada] = useState(false);
  const [realizada, setRealizada] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Corona</Text>
      <View style={styles.row}>
        <CheckBox
          title="fracturada"
          checked={fracturada}
          onPress={() => setFracturada(!fracturada)}
        />
        <CheckBox
          title="cariada"
          checked={cariada}
          onPress={() => setCariada(!cariada)}
        />

        <CheckBox
          title="destruida"
          checked={destruida}
          onPress={() => setDestruida(!destruida)}
        />
      </View>
      <Text style={styles.title}>Raiz</Text>
      <View style={styles.row}>
        <CheckBox
          title="Es recuperable"
          checked={raizRecuperable}
          onPress={() => setRaizRecuperable(!raizRecuperable)}
        />
      </View>
      <Text style={styles.title}>Casos</Text>
      <View style={styles.row}>
        <CheckBox
          title="Dientes supernumerarios"
          checked={superNumerarios}
          onPress={() => setSuperNumerarios(!superNumerarios)}
        />
      </View>
      <Text style={styles.title}>Piezas dentaria</Text>
      <View style={styles.row}>
        <CheckBox
          title="Mal ubicada"
          checked={malUbicada}
          onPress={() => setMalUbicada(!malUbicada)}
        />
      </View>
      <Text style={styles.title}>Extracción dentaria previa</Text>
      <View style={styles.row}>
        <CheckBox
          title="Se realizo una extracción dentaria previa"
          checked={realizada}
          onPress={() => setRealizada(!realizada)}
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
