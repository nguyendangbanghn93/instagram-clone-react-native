import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Test() {

    return (
        <View style={styles.container}>
            <Text>Test</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});