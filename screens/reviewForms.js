import React from "react";
import { globalStyles } from "../styles/global";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const ReviewSchema = Yup.object({
  title: Yup.string().min(4).required(),
  body: Yup.string().min(8).required(),
  rating: Yup.string()
    .required()
    .test("is-num-1-5", "rating must be a number between 1 to 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

export default function ReviewForms({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          console.log(values, "vv1");
          addReview(values);
          actions.resetForm();
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

              <Text style={globalStyles.errorText}>{props.errors.title}</Text>

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
