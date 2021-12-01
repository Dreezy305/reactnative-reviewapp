import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default function Header({ navigation, title }) {
  console.log(navigation);
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      {/* menu icon */}
      <MaterialIcons
        name="menu"
        size={28}
        color="black"
        style={styles.icon}
        onPress={openMenu}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
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
    backgroundColor: "grey",
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
  headerTitle: {
    flexDirection: "row",
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
});
