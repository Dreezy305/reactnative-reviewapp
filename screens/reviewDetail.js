import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ReviewDetail({ navigation }) {
  console.log(navigation, "vv");
  // const pressHandler = () => {
  //   navigation.goBack();
  // };
  return (
    <View style={styles.container}>
      <Text>{navigation.getParam("title")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
