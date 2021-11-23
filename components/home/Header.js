import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Header() {

    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image
                    style={styles.logo}
                    source={require("../../assets/header-logo.png")}
                />
            </TouchableOpacity>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={{ uri: "https://img.icons8.com/external-becris-lineal-becris/64/ffffff/external-add-mintab-for-ios-becris-lineal-becris.png" }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={{ uri: "https://img.icons8.com/external-becris-lineal-becris/64/ffffff/external-add-mintab-for-ios-becris-lineal-becris.png" }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        style={styles.icon}
                        source={{ uri: "https://img.icons8.com/external-becris-lineal-becris/64/ffffff/external-add-mintab-for-ios-becris-lineal-becris.png" }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginHorizontal: 20
    },
    iconContainer: {
        flexDirection: "row"
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: "contain"
    },
    logo: {
        width: 100,
        height: 50,
        resizeMode: "contain"
    }
});