import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  const [listName, setListName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter List Name"
        value={listName}
        onChangeText={(text) => setListName(text)}
      />
      <Button
        title="Create List"
        onPress={() => navigation.navigate("List", { listName })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0047ab",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#0047ab",
    borderRadius: 5,
    marginBottom: 20,
  },
});

export default Home;
