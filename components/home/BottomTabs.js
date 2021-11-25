import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-elements';

export const bottomTabIcons = [
    {
        name: "Home",
        active: "https://img.icons8.com/ios-filled/50/ffffff/home.png",
        inactive: "https://img.icons8.com/ios/50/ffffff/home--v1.png",
    },
    {
        name: "Search",
        active: "https://img.icons8.com/ios-filled/50/ffffff/search.png",
        inactive: "https://img.icons8.com/ios/50/ffffff/search.png",
    },
    {
        name: "Reals",
        active: "https://img.icons8.com/ios-filled/50/ffffff/video.png",
        inactive: "https://img.icons8.com/ios/50/ffffff/video.png",
    },
    {
        name: "Shop",
        active: "https://img.icons8.com/ios-filled/50/ffffff/shop.png",
        inactive: "https://img.icons8.com/ios/50/ffffff/shop.png",
    },
    {
        name: "Profile",
        active: "https://pickaface.net/gallery/avatar/926354_180116_1713_ws7u5.png",
        inactive: "https://pickaface.net/gallery/avatar/926354_180116_1713_ws7u5.png",
    },
]

export default function BottomTabs({ icons }) {
    const [activeTab, setActiveTab] = useState("Home");
    const Icon = ({ icon }) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image
                source={{ uri: activeTab === icon.name ? icon.active : icon.inactive }}
                style={[
                    styles.icon,
                    icon.name === "Profile"&& styles.profilePic(activeTab)
                ]} />
        </TouchableOpacity>
    )
    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation="vertical" />
            <View style={styles.container}>
                {icons?.map((icon, index) => (
                    <Icon key={index} icon={icon} />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: 50,
        paddingTop: 10,
    },
    wrapper: {
        position: "absolute",
        width: "100%",
        bottom: "0%",
        zIndex: 999,
        backgroundColor: "#000000"
    },
    icon: {
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    profilePic: (activeTab) => ({
        borderRadius: 50,
        borderColor: "#ffffff",
        borderWidth: activeTab === "Profile" ? 2 : 0
    })
});