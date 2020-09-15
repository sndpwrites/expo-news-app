import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";

const styles = StyleSheet.create({
  newsContainer: {
    flexDirection: "row",
    padding: 5,
    alignItems: "stretch",
    justifyContent: "space-around",
    backgroundColor: "lightgrey",
  },
  newsTitle: {
    margin: 5,
    fontSize: 18,
    flexShrink: 1,
  },
});
export default News = ({ newsData }) => {
  const imageThumbnail = {
    uri: newsData.image || require("../assets/icon.png"),
    width: 100,
    height: 75,
  };

  return (
    <TouchableOpacity onPress={() => Linking.openURL(newsData.link)}>
      <View style={styles.newsContainer}>
        <Image source={imageThumbnail} />
        <Text style={styles.newsTitle}>{newsData.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
