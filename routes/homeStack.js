import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetail from "../screens/reviewDetail";

const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetail: {
    screen: ReviewDetail,
  },
};

const HomeStack = createNativeStackNavigator(screens);

// export default function HomeStack() {
//   return (
//     <View>
//       <Text></Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({});
