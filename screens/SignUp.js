import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { KeyboardSpacer } from "react-native-keyboard-spacer-fixed";

const SignUp = () => {
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [age, setAge] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const [showCPassword, setShowCPassword] = React.useState(false);

  const handleSignUp = () => {
    if (userName.trim().length == 0) {
      alert("Pelase insert username");
    } else if (password.trim().length == 0) {
      alert("Please insert password");
    } else if (confirmPassword.trim().length == 0)
      alert("plaese confirm password ");
    else {
      if (password == confirmPassword) {
        alert("success");
      } else {
        alert("wrong");
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/logo.png")}
          style={{
            width: 150,
            height: 150,
            borderRadius: 100,
            alignSelf: "center",
            marginBottom: 20,
            marginTop: 20,
          }}
        />
        <Text style={styles.headerText}>Welcome </Text>
        <Text style={styles.headerText2}>Create Account</Text>
      </View>
      <View style={styles.formContainer}>
        <Text>User name</Text>
        <TextInput
          type="outlined"
          activeUnderlineColor="purple"
          placeholder="Enter User Name"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          placeholderTextColor="#666"
          style={styles.input}
        />
        <Text>E mail</Text>
        <TextInput
          placeholder="Enter Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#666"
          style={styles.input}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Enter Password"
          autoCorrect={false}
          right={
            <TextInput.Icon
              icon={"eye"}
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            />
          }
          secureTextEntry={showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor="#666"
          style={styles.input}
        />
        <Text>Confirm Password</Text>
        <TextInput
          placeholder="Enter password again"
          autoCorrect={false}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          right={
            <TextInput.Icon
              icon={"eye"}
              onPress={() => {
                setShowCPassword(!showCPassword);
              }}
            />
          }
          secureTextEntry={showCPassword}
          placeholderTextColor="#666"
          style={styles.input}
        />
        <Text>Age</Text>
        <TextInput
          placeholder="enter age"
          value={age}
          keyboardType="numeric"
          onChangeText={(text) => setAge(text)}
          placeholderTextColor="#666"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text>Sign up</Text>
        </TouchableOpacity>
        <Text style={{ alignSelf: "center", marginBottom: 10, marginTop: 20 }}>
          If you already sign up
        </Text>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            width: "90%",
            backgroundColor: "gray",
            marginRight: "10%",
            borderRadius: 10,
            height: 40,
            justifyContent: "center",
          }}
        >
          <Text style={{ alignSelf: "center" }}> Login</Text>
        </TouchableOpacity>
      </View>
      <KeyboardSpacer space={10} />
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  formContainer: {
    width: "90%",
    justifyContent: "center",
    marginLeft: "10%",
    marginTop: 10,
  },
  input: {
    height: 40,
    width: "90%",
    marginBottom: 10,
    // color: "#333",
    fontSize: 16,
    paddingHorizontal: 20,
    borderRadius: 5,
    // borderColor: "#333",
    // borderWidth: 1,
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
  headerText: {
    marginLeft: "10%",
    fontSize: 24,
    fontWeight: "bold",
  },
  headerText2: {
    marginLeft: "10%",
    fontSize: 20,
    fontWeight: "bold",
  },
});
