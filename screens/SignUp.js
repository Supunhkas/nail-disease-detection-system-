import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { KeyboardSpacer } from "react-native-keyboard-spacer-fixed";

const SignUp = () => {
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [age, setAge] = React.useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);
  const [showCPassword, setShowCPassword] = React.useState(false);

  const handleSignUp = () => {
    setLoading(true);
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
    console.log("welcome");
    setLoading(false);
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
        <TextInput
          label="User name"
          mode="outlined"
          left={<TextInput.Icon icon="account" iconColor="#000" />}
          activeUnderlineColor="purple"
          placeholder="Enter User Name"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          placeholderTextColor="#666"
          style={styles.input}
        />

        <TextInput
          label="Email"
          mode="outlined"
          left={<TextInput.Icon icon="email" iconColor="#000" />}
          placeholder="Enter Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholderTextColor="#666"
          style={styles.input}
        />

        <TextInput
          label="Password"
          mode="outlined"
          left={<TextInput.Icon icon="lock" iconColor="#000" />}
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

        <TextInput
          label="Confirm Password"
          mode="outlined"
          placeholder="Enter password again"
          left={<TextInput.Icon icon="lock" iconColor="#000" />}
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

        <TextInput
          label="Age"
          mode="outlined"
          placeholder="enter age"
          left={<TextInput.Icon icon="calendar-account" iconColor="#000" />}
          value={age}
          keyboardType="numeric"
          onChangeText={(text) => setAge(text)}
          placeholderTextColor="#666"
          style={styles.input}
        />
        {/* <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text>Sign up</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => handleSignUp()}>
          <Button
            icon="account-arrow-right"
            mode="text"
            style={styles.button}
            loading={loading}
          >
            Sign up
          </Button>
        </TouchableOpacity>

        <Text style={{ alignSelf: "center", marginBottom: 10, marginTop: 20 }}>
          If you already sign up
        </Text>
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
        <Button icon="login" mode="contained-tonal" style={styles.buttonLogin}>
          Login
        </Button>
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
    height: 50,
    width: "90%",
    marginBottom: 10,
    fontSize: 16,
  },
  button: {
    height: 50,
    width: "90%",
    backgroundColor: "#4BB0EE",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  buttonLogin: {
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
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
