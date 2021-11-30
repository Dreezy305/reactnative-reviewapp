import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Card(props) {
  //   console.log(props);
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({});
