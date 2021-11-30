import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function Header() {
  //   console.log(navigation);
  const openMenu = () => {
    // NavigationContainer.openDrawer();
  };
  return (
    <View style={styles.header}>
      {/* menu icon */}
      <MaterialIcons name="menu" size={28} color="black" style={styles.icon} />
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
  icon: {
    position: "absolute",
    left: -2,
  },
});
