import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { globalStyles } from "../styles/global";
import { MaterialIcons } from "@expo/vector-icons";
import Card from "../shared/card";
import ReviewForms from "./reviewForms";

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
      key: "3",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModalOpen(false)}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
          />
          {/* <Text>Hello from the modal</Text> */}
          <ReviewForms />
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetail", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});
