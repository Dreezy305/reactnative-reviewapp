import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "zelda, breath of fresh air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "catch them all again",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: "Final fantasy",
      rating: 3,
      body: "lorem ipsum",
      key: "1",
    },
  ]);
  const pressHandler = () => {
    // navigation.navigate("ReviewDetail");
    navigation.push("ReviewDetail");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
    </View>
  );
}
