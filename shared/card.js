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

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    shadowOffset: { width: 1, height: 1 },
    elevation: 3,
    backgroundColor: "#fff",
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
});
