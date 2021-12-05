import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { firebase } from "../../firebase";
export default function Header({ navigation }) {
  const handleSignOut = async () => {
    try {
      await firebase.auth().signOut();
      console.log("Signed out success...");
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut}>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Image
            style={styles.icon}
            source={{ uri: "https://img.icons8.com/ios/50/ffffff/add.png" }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={{ uri: "https://img.icons8.com/ios/50/ffffff/like.png" }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            style={styles.icon}
            source={{
              uri: "https://img.icons8.com/ios/50/ffffff/facebook-messenger--v1.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconContainer: {
    flexDirection: "row",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#FF3250",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});
