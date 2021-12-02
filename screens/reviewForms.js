import React from "react";
import { globalStyles } from "../styles/global";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Formik } from "formik";

export default function ReviewForms() {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
          console.log(values, "vv1");
        }}
      >
        {(props) => (
          <>
            <View>
              <TextInput
                style={globalStyles.input}
                placeholder="Review title"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
              />

              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="Review body"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
              />

              <TextInput
                style={globalStyles.input}
                placeholder="Rating (1-5)"
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                keyboardType="numeric"
              />

              <Button
                title="submit"
                color="maroon"
                onPress={props.handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
