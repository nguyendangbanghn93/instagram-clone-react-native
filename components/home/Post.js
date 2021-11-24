import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';

export default function Post({ post }) {

    return (
        <View style={styles.container}>
            <Divider width={1} orientation="vertical" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
});