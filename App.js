import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Notifications from "expo-notifications";
import Home from "./components/Home";
import List from "./components/List";

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    // Request notification permissions when the app loads
    const requestPermissions = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        alert("You need to enable notifications for reminders to work.");
      }
    };
    requestPermissions();

    // Handling background notifications
    Notifications.addNotificationReceivedListener((notification) => {
      console.log(notification);
    });

    // Handling notifications when app is opened
    Notifications.addNotificationResponseReceivedListener((response) => {
      console.log(response);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#4A90E2" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
