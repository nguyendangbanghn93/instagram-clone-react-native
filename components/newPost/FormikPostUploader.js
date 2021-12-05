import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TextInput, Button } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import validUrl from "valid-url";
import { firebase, db } from "../../firebase";
const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit."),
});
const PLACEHOLDER_IMG =
  "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=";
export default function FormikPostUploader({ navigation }) {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState(null);
  const getUserName = () => {
    const user = firebase.auth().currentUser;
    const unsubscribe = db
      .collection("users")
      .where("owner_uid", "==", user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setCurrentLoggedInUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
          });
        })
      );
    return unsubscribe;
  };
  useEffect(() => {
    getUserName();
  }, []);
  const uploadPostToFirebase = (imageUrl, caption) => {
    const unsubscribe = db
      .collection("users")
      .doc(firebase.auth().currentUser.email)
      .collection("posts")
      .add({
        imageUrl: imageUrl,
        user: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.profilePicture,
        owner_uid: firebase.auth().currentUser.uid,
        owner_email: firebase.auth().currentUser.email,
        caption: caption,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likes: 0,
        likes_by_users: [],
        comments: [],
      })
      .then(() => navigation.goBack());
    return unsubscribe;
  };
  return (
    <View>
      <Formik
        initialValues={{ caption: "", imageUrl: "" }}
        onSubmit={(values) => {
          uploadPostToFirebase(values.imageUrl, values.caption);
        }}
        validationSchema={uploadPostSchema}
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
              style={{
                margin: 20,
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Image
                source={{
                  uri: validUrl.isUri(thumbnailUrl)
                    ? thumbnailUrl
                    : PLACEHOLDER_IMG,
                }}
                style={{ width: 100, height: 100 }}
              />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <TextInput
                  style={{ color: "white", fontSize: 20 }}
                  placeholder="Write a caption..."
                  placeholderTextColor="grey"
                  multiline={true}
                  onChangeText={handleChange("caption")}
                  onBlur={handleBlur("caption")}
                  value={values.caption}
                />
              </View>
            </View>
            <Divider width={0.2} orientation="vertical" />
            <TextInput
              style={{ color: "white", fontSize: 18 }}
              placeholder="Enter image url..."
              placeholderTextColor="grey"
              onChangeText={handleChange("imageUrl")}
              onBlur={handleBlur("imageUrl")}
              value={values.imageUrl}
              onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            />
            {errors.imageUrl && (
              <Text style={{ fontSize: 10, color: "red" }}>
                {errors.imageUrl}
              </Text>
            )}
            <Button
              onPress={() => handleSubmit()}
              title="Share"
              disabled={!isValid}
            />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
