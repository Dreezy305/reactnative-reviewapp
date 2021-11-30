import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Card from "../shared/card";
import { images } from "../styles/global";

export default function ReviewDetail({ navigation }) {
  const rating = navigation.getParam("rating");

  return (
    <View style={styles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        {/* <Text>{navigation.getParam("rating")}</Text> */}
        <View>
          <Text>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
