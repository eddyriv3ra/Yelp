import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./src/screens/SearchScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

/* 
Client ID
T1UhEyDa4TK5LtHKmEJTDQ

API Key
5zee3zxNhfgBb8ZpYxgGHeVtQ8NZAn8dPoiPzmiLhWLU09LOisY1hMvVrUBjhMp9MxniPrsTOjQvQhvmZY-vefE8pV3e_HeHWd-_Qg5poTl3s7P81m0o5FZeSXwbX3Yx

 */
