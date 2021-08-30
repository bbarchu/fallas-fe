import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { CheckBox, Button } from "react-native-elements";

const BASE_URL = "http://localhost:8000/";

async function postData(url = BASE_URL, data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json();
}

export const SistemaExperto = ({ navigation }) => {
  const [fracturada, setFracturada] = useState(false);
  const [esmalteCariado, setEsmalteCariado] = useState(false);
  const [dentinaCariada, setDentinaCariada] = useState(false);
  const [raizRecuperable, setRaizRecuperable] = useState(false);
  const [superNumerarios, setSuperNumerarios] = useState(false);
  const [malUbicada, setMalUbicada] = useState(false);
  const [pulpaCariada, setPulpaCariada] = useState(false);
  const [enciaInfectada, setEnciaInfectada] = useState(false);

  const getResultados = () => {
    postData(BASE_URL + "consulta", {
      coronaFracturada: fracturada ? "si" : "no",
      esmalteCariado: esmalteCariado ? "si" : "no",
      dentinaCariada: dentinaCariada ? "si" : "no",
      raizRecuperable: raizRecuperable ? "si" : "no",
      casoSupernumerario: superNumerarios ? "si" : "no",
      piezaDentariaMalUbicada: malUbicada ? "si" : "no",
      pulpaCariada: pulpaCariada ? "si" : "no",
      enciaInfectada: enciaInfectada ? "si" : "no",
    }).then((data) => {
      navigation.navigate("Resultados", {
        respuesta: data,
      });
    });
  };

  const clear = () => {
    setFracturada(false);
    setEsmalteCariado(false);
    setDentinaCariada(false);
    setRaizRecuperable(false);
    setSuperNumerarios(false);
    setMalUbicada(false);
    setPulpaCariada(false);
    setEnciaInfectada(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Corona</Text>
      <View style={styles.row}>
        <CheckBox
          title="fracturada"
          checked={fracturada}
          onPress={() => setFracturada(!fracturada)}
        />
      </View>
      <Text style={styles.title}>Esmalte</Text>
      <View style={styles.row}>
        <CheckBox
          title="cariado"
          checked={esmalteCariado}
          onPress={() => setEsmalteCariado(!esmalteCariado)}
        />
      </View>
      <Text style={styles.title}>Dentina</Text>
      <View style={styles.row}>
        <CheckBox
          title="cariada"
          checked={dentinaCariada}
          onPress={() => setDentinaCariada(!dentinaCariada)}
        />
      </View>
      <Text style={styles.title}>Raiz</Text>
      <View style={styles.row}>
        <CheckBox
          title="es recuperable"
          checked={raizRecuperable}
          onPress={() => setRaizRecuperable(!raizRecuperable)}
        />
      </View>
      <Text style={styles.title}>Casos</Text>
      <View style={styles.row}>
        <CheckBox
          title="dientes supernumerarios"
          checked={superNumerarios}
          onPress={() => setSuperNumerarios(!superNumerarios)}
        />
      </View>
      <Text style={styles.title}>Pieza dentaria</Text>
      <View style={styles.row}>
        <CheckBox
          title="mal ubicada"
          checked={malUbicada}
          onPress={() => setMalUbicada(!malUbicada)}
        />
      </View>
      <Text style={styles.title}>Pulpa</Text>
      <View style={styles.row}>
        <CheckBox
          title="cariada"
          checked={pulpaCariada}
          onPress={() => setPulpaCariada(!pulpaCariada)}
        />
      </View>
      <Text style={styles.title}>Encia </Text>
      <View style={styles.row}>
        <CheckBox
          title="infectada"
          checked={enciaInfectada}
          onPress={() => setEnciaInfectada(!enciaInfectada)}
        />
      </View>
      <View style={styles.button}>
        <Button title="Obtener resultado" onPress={() => getResultados()} />
      </View>
      <View style={styles.button}>
        <Button
          buttonStyle={{ backgroundColor: "orange" }}
          title="Limpiar"
          onPress={() => clear()}
        />
      </View>
    </ScrollView>
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
  buttonClear: {
    width: "50%",
    alignSelf: "center",
    padding: 10,
    color: "red",
  },
});
