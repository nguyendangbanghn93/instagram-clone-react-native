import { Formik, yupToFormErrors } from 'formik';
import * as Yup from "yup"
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url("A URL is required"),
    caption: Yup.string().max(2200, "Caption has reached the character limit.")
})
export default function FormikPostUploader() {
    useState
    return (
        <View style={styles.container}>
            <Text>FormikPostUploader</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});