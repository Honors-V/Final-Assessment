import React, { useState } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Dropdown from "./Dropdown";
import Reminder from "./Reminder";

const List = ({ route }) => {
  const { listName } = route.params;
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [category, setCategory] = useState("General");

  const addItem = () => {
    if (item) {
      setItems([...items, { name: item, category }]);
      setItem("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{listName}</Text>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Add an item"
          placeholderTextColor="#B0C4DE"
          value={item}
          onChangeText={(text) => setItem(text)}
        />
        <Dropdown category={category} setCategory={setCategory} />
      </View>
      <TouchableOpacity style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>
              {item.name} - <Text style={styles.category}>{item.category}</Text>
            </Text>
          </View>
        )}
      />
      {/* Reminder Component */}
      <Reminder listName={listName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 20,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  button: {
    backgroundColor: "#4A90E2",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  item: {
    padding: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  itemText: {
    fontSize: 18,
  },
  category: {
    color: "#4A90E2",
    fontWeight: "bold",
  },
});

export default List;
