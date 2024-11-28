import React from "react";
import { Picker } from "@react-native-picker/picker";

const Dropdown = ({ category, setCategory }) => {
  return (
    <Picker
      selectedValue={category}
      onValueChange={(itemValue) => setCategory(itemValue)}
      style={{ height: 50, flex: 1 }}
    >
      <Picker.Item label="General" value="General" />
      <Picker.Item label="Fruits" value="Fruits" />
      <Picker.Item label="Vegetables" value="Vegetables" />
      <Picker.Item label="Dairy" value="Dairy" />
      <Picker.Item label="Snacks" value="Snacks" />
    </Picker>
  );
};

export default Dropdown;
