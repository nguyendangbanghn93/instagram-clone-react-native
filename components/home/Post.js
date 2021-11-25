import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Divider } from 'react-native-elements';

const postFooterIcons = [
    {
        name: "Like",
        imageUrl: "https://img.icons8.com/ios/50/ffffff/facebook-like--v1.png",
    },
    {
        name: "Comment",
        imageUrl: "https://img.icons8.com/ios/50/ffffff/speech-bubble--v1.png",
    },
    {
        name: "Share",
        imageUrl: "https://img.icons8.com/ios/50/ffffff/paper-plane.png",
    },
    {
        name: "Save",
        imageUrl: "https://img.icons8.com/ios/50/ffffff/bookmark-ribbon--v1.png",
    }
]
export default function Post({ post }) {

    return (
        <View style={styles.container}>
            <Divider width={1} orientation="vertical" />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentSelection post={post} />
                <Comments post={post} />
            </View>
        </View>
    )
}

const PostHeader = ({ post }) => (
    <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={{
                uri: post.profile_picture
            }}
                style={styles.story} />
            <Text style={{
                color: "white",
                marginLeft: 5,
                fontWeight: "700"
            }}>{post.user}</Text>
        </View>
        <Text style={{
            color: "white",
            fontWeight: "900"
        }}>...</Text>
    </View>
)
const PostImage = ({ post }) => (
    <View style={{ width: "100%", height: 450 }}>
        <Image
            source={{ uri: post.imageUrl }}
            style={{ height: "100%", resizeMode: "cover" }}
        />
    </View>
)
const PostFooter = () => (
    <View style={{ flexDirection: "row" }}>
        <View style={styles.leftFooterIconsContainer}>
            <Image style={styles.footerIcon} source={{ uri: postFooterIcons[0].imageUrl }} />
            <Image style={styles.footerIcon} source={{ uri: postFooterIcons[1].imageUrl }} />
            <Image style={[styles.footerIcon]} source={{ uri: postFooterIcons[2].imageUrl }} />
        </View>
        <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Image style={[styles.footerIcon]} source={{ uri: postFooterIcons[3].imageUrl }} />
        </View>
    </View>
)
const Likes = ({ post }) => (
    <View style={{ flexDirection: "row", marginTop: 4 }}>
        <Text style={{ color: "white", fontWeight: "600" }}>
            {post.likes.toLocaleString("en")} likes
        </Text>
    </View>
)
const Caption = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        <Text style={{ color: "white" }}>
            <Text style={{ fontWeight: "600" }}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>
    </View>
)
const CommentSelection = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {post?.comments?.length && <Text style={{ color: "gray" }}>
            View{post.comments.length > 1 ? " all" : ""} {post.comments.length}{" "}
            {post.comments.length > 1 ? "comments" : "comment"}
        </Text>}
    </View>
)
const Comments = ({ post }) => (
    <>
        {post.comments.map((comment, index) => (
            <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
                <Text style={{ color: "white" }}>
                    <Text style={{ fontWeight: "600" }}>{comment.user} </Text>
                    {comment.comment}
                </Text>
            </View>
        ))}
    </>
)
const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
    },
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#ff8501'
    },
    footerIcon: {
        width: 33,
        height: 33,
    },
    shareIcon: {
        transform: [{ rotate: "320deg" }]
    },
    leftFooterIconsContainer: {
        flexDirection: "row",
        width: "32%",
        justifyContent: "space-between",
    }
});