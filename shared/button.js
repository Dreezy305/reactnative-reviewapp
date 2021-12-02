import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}></Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {},
  buttonText: {},
});
