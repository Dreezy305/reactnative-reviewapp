import React from "react";
import { globalStyles } from "../styles/global";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Formik } from "formik";

export default function ReviewForms() {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {}}
      >
        {(props) => (
          <>
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review title"
                onChangeText={props.handleChange("title")}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
