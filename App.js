import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ListItem from "./components/ListItem";
import ListInput from "./components/ListInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  function handleModalOpen() {
    setModalVisible(true);
  }
  function handleModalClose() {
    setModalVisible(false);
  }
  function handleSubmit(enteredText) {
    setList((prev) => [
      ...prev,
      { text: enteredText, id: Math.random().toString() },
    ]);
    handleModalClose();
  }
  function handleDeleteItem(id) {
    setList((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.rootBtn}>
          <Button title="Add Todo" color="#fff" onPress={handleModalOpen} />
        </View>
        <ListInput
          handleSubmit={handleSubmit}
          visible={modalVisible}
          disable={handleModalClose}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={list}
            renderItem={(itemData) => {
              return (
                <ListItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  handleDelete={handleDeleteItem}
                />
              );
            }}
            keyExtractor={(item, index) => item.id}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 30,
    // alignItems: "center",
    gap: 24,
  },

  listContainer: {
    flex: 5,
  },
  rootBtn: {
    backgroundColor: "#5e0acc",
    width: "40%",
    alignSelf: "center",
    borderRadius: 8,
  },
});
