import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ReviewDetail({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
