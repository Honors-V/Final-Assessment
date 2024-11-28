import React, { useState, useEffect } from "react";
import { View, Text, Button, Platform, StyleSheet, Alert } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

const Reminder = ({ listName }) => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  // Request notification permissions
  const requestPermissions = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status !== "granted") {
      alert("Permission for notifications is required.");
    }
  };

  // Schedule the notification
  const scheduleNotification = async () => {
    // Ensure the date is in the future
    if (date <= new Date()) {
      alert("Please select a future date and time for the reminder.");
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Reminder!",
        body: `Don't forget your shopping list: ${listName}`,
      },
      trigger: date,
    });
    Alert.alert("Reminder Set", `Reminder set for ${date.toLocaleString()}`);
  };

  // Handle date change
  const onDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  useEffect(() => {
    requestPermissions(); // Request permission when the component mounts
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Set a Reminder:</Text>
      <Button title="Pick Date & Time" onPress={() => setShowPicker(true)} />
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={onDateChange}
          minimumDate={new Date()}
        />
      )}
      <Button
        title="Set Reminder"
        onPress={scheduleNotification}
        color="#4A90E2"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: "#f8f9fa",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#4A90E2",
  },
});

export default Reminder;
