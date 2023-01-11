import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { KeyboardSpacer } from "react-native-keyboard-spacer-fixed";
import { TextInput, HelperText } from "react-native-paper";
import { validate } from "email-validator";
import COLORS from "../constant/colors";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleBlur = () => {
    if (!email) {
      setEmailError(true);
      setEmailErrorMessage("Email is required.");
    } else if (!validate(email)) {
      setEmailError(true);
      setEmailErrorMessage("Invalid Email.");
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }
    if (!password) {
      setPasswordError(true);
      setPasswordErrorMessage("Password is required.");
    } else if (password.length < 4) {
      setPasswordError(true);
      setPasswordErrorMessage("Password should have atleast 8 characters.");
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }
  };
  const handleSignIn = () => {
    if (!email) {
      setEmailError(true);
      setEmailErrorMessage("Email is required.");
    } else if (!validate(email)) {
      setEmailError(true);
      setEmailErrorMessage("Invalid Email.");
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }
    if (!password) {
      setPasswordError(true);
      setPasswordErrorMessage("Password is required.");
    } else if (password.length < 4) {
      setPasswordError(true);
      setPasswordErrorMessage("Password should have atleast 8 characters.");
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }
    if (!emailError && !passwordError) {
      alert("welcome");
    }
  };
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

        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          mode="outlined"
          label="Email"
          value={email}
          left={<TextInput.Icon icon="email" iconColor="#000" />}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
          onBlur={handleBlur}
          onChangeText={(email) => setEmail(email)}
        />
        <HelperText type="error" visible={emailError}>
          {emailErrorMessage}
        </HelperText>

        <TextInput
          placeholder="Enter your Password "
          style={styles.input}
          label="Password"
          mode="outlined"
          value={password}
          maxLength={40}
          textContentType="password"
          autoCorrect={false}
          secureTextEntry={showPassword}
          left={<TextInput.Icon icon="lock" iconColor="#000" />}
          right={
            <TextInput.Icon
              icon={"eye"}
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            />
          }
          onChangeText={(text) => setPassword(text)}
        />
        <HelperText type="error" visible={passwordError}>
          {passwordErrorMessage}
        </HelperText>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleSignIn(email, password)}
        >
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
            justifyContent: "center",
          }}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>
            Crate New Account
          </Text>
        </TouchableOpacity>
      </View>
      <KeyboardSpacer space={5} />
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
    marginBottom: 10,
    marginTop: "20%",
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

  input: {
    height: 50,
    width: "90%",
    marginBottom: 10,
    fontSize: 16,
    borderRadius: 5,
  },
  button: {
    height: 50,
    width: "90%",
    backgroundColor: COLORS.button,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
