import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { firebase, db } from "../../firebase";
export default function SignupForm({ navigation }) {
  const signupFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    username: Yup.string().required().min(2, "A username is required"),
    password: Yup.string()
      .required()
      .min(8, "Your password has to have at least 8 characters"),
  });
  const getRandomProfilePicture = async () => {
    const res = await fetch("https://randomuser.me/api");
    const data = await res.json();
    return data.results[0].picture.large;
  };
  const onSignup = async (email, password, username) => {
    try {
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      db.collection("users")
        .doc(authUser.user.email)
        .set({
          owner_uid: authUser.user.uid,
          username: username,
          email: authUser.user.email,
          profile_picture: await getRandomProfilePicture(),
        });
      console.log("Firebase user created Success: ", email, password);
    } catch (error) {
      Alert.alert("My lord...", error.message, [
        { text: "Ok", onPress: () => console.log("ok"), style: "cancel" },
      ]);
    }
  };
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        onSubmit={(values) => {
          console.log(values);
          onSignup(values.email, values.password, values.username);
        }}
        validationSchema={signupFormSchema}
        validateOnMount={true}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, user or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.username.length < 1 || values.username.length >= 2
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Username"
                autoCapitalize="none"
                keyboardType="default"
                textContentType="username"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}></View>
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Sign up</Text>
            </Pressable>
            <View style={styles.signUpContainer}>
              <Text>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.push("LoginScreen")}>
                <Text style={{ color: "#6bb0f5" }}>Sig in</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#FAFAFA",
    borderWidth: 1,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096f6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginTop: 80,
  },
});
