import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NewsList from "./src";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nepali News App</Text>
      <NewsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    margin: 10,
    padding: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
