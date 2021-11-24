import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import Stories from '../components/home/Stories';

export default function HomeScreen() {

    return (
        <SafeAreaView style={styles.container}>
           <Header/>
            <Stories/>
            <Post/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    }
});