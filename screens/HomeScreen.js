import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, ScrollView, Platform } from "react-native";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { POSTS } from "../data/posts";
import { db } from "../firebase";
export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      console.log("__________________",snapshot.docs.map((doc) => doc.data()));
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        { posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
