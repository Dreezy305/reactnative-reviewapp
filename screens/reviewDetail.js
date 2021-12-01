import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Card from "../shared/card";
import { images, globalStyles } from "../styles/global";

export default function ReviewDetail({ navigation }) {
  const rating = navigation.getParam("rating");

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        {/* <Text>{navigation.getParam("rating")}</Text> */}
        <View style={styles.rating}>
          <Text>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}
// video 28

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
