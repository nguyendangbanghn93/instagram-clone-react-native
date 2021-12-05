import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import LoginForm from "../components/loginScreen/LoginForm";
const LOGO_INSTAGRAM =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png";
export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: LOGO_INSTAGRAM, height: 100, width: 100 }} />
      </View>
      <LoginForm navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});
