import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ReviewDetail({ navigation }) {
  // const pressHandler = () => {
  //   navigation.goBack();
  // };
  return (
    <View style={styles.container}>
      <Text>Review Detail screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});
