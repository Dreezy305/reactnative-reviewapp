import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Card from "../shared/card";

export default function ReviewDetail({ navigation }) {
  return (
    <View style={styles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <Text>{navigation.getParam("rating")}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
