import React from "react";
import { globalStyles } from "../styles/global";
import { StyleSheet, Text, View } from "react-native";
import { Formik } from "formik";

export default function ReviewForms() {
  return (
    <View style={globalStyles.container}>
      <Formik></Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
