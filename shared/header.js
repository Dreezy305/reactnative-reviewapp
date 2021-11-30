import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      {/* menu icon */}
      <View>
        <Text style={styles.headerText}>Reviews Application</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    // paddingTop: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#333",
    letterSpacing: 1,
  },
});
