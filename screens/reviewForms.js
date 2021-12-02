import React from "react";
import { globalStyles } from "../styles/global";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import FlatButton from "../shared/button";

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
                onBlur={props.handleBlur("title")}
              />

              <Text style={globalStyles.errorText}>
                {props.touched.title && props.errors.title}
              </Text>

              <TextInput
                multiline
                style={globalStyles.input}
                placeholder="Review body"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
                onBlur={props.handleBlur("body")}
              />

              <Text style={globalStyles.errorText}>
                {props.touched.body && props.errors.body}
              </Text>

              <TextInput
                style={globalStyles.input}
                placeholder="Rating (1-5)"
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                keyboardType="numeric"
                onBlur={props.handleBlur("rating")}
              />

              <Text style={globalStyles.errorText}>
                {props.touched.rating && props.errors.rating}
              </Text>

              <FlatButton text="submit" onPress={props.handleSubmit} />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
