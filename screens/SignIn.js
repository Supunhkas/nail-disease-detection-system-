import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { KeyboardSpacer } from "react-native-keyboard-spacer-fixed";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignIn = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoSection}>
        <Image
          source={require("../assets/logo.png")}
          style={{
            height: 150,
            width: 150,
            borderRadius: 100,
            resizeMode: "contain",
          }}
        />
      </View>

      <View style={styles.inputArea}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.label}>Email </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#666666"
          value={email}
          maxLength={40}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Password </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password "
          placeholderTextColor="#666666"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => alert("Frogot")}
          style={{ marginBottom: 40, marginTop: 20 }}
        >
          <Text>Frogot Password</Text>
        </TouchableOpacity>

        <Text> If dou you have not registerd?</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#4bb5ca",
            borderRadius: 5,
            height: 40,
            width: "90%",
            padding: 5,
            marginTop: 5,
          }}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>
            Crate New Account
          </Text>
        </TouchableOpacity>
      </View>
      <KeyboardSpacer space={10} />
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logoSection: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  welcomeText: {
    alignSelf: "flex-start",
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: "5%",
  },
  inputArea: {
    flex: 2,
    backgroundColor: "skyblue",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 5,
    position: "relative",
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginBottom: "5%",
  },
  input: {
    height: 40,
    width: "90%",
    marginBottom: 20,
    color: "#333",
    fontSize: 16,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#333",
  },
  button: {
    height: 50,
    width: "90%",
    backgroundColor: "#4BB0EE",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
