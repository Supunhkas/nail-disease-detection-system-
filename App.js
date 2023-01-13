import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

import BottomTabNavigator from "./components/BottomTabNavigator";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        <BottomTabNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
