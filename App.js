import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./containers/Home";
import { SistemaExperto } from "./containers/SistemaExperto";
import { Resultados } from "./containers/Resultados";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const TabTop = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Introducción" component={Home} />
      <Tab.Screen name="Sistema Experto" component={SistemaExperto} />
      <Tab.Screen name="Resultados" component={Resultados} />
    </Tab.Navigator>
  );
};

const RootComponent = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="S.A.D.D. Fallas 1" component={TabTop} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <RootComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
