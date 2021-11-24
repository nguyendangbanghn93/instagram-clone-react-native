import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { USERS } from '../../data/users';

export default function Stories() {

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {USERS?.map((story, index) => (
                    <View key={index} style={{ alignItems: "center" }}>
                        <Image
                            source={{ uri: story.image }}
                            style={styles.story}
                        />
                        <Text style={{ color: "white" }}>{
                            story.user?.length > 11 ?
                                (story.user.slice(0, 10) + "...") :
                                story.user
                        }</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 13
    },
    story: {
        width: 70,
        height: 70,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 3,
        borderColor: "#ff8501"
    }
});