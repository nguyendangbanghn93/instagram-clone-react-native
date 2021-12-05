import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SignedInStack, SignedOutStack } from "./Navigation";
import { firebase } from "./firebase";
export default function AuthNavigation() {
  const [currentUser, setCurrentUser] = useState(null);
  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => userHandler(user));
  }, []);
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
