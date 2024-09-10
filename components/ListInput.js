import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function ListInput({ handleSubmit, visible, disable }) {
  const [enteredText, setEnteredText] = useState("");
  function handleInputText(text) {
    setEnteredText(text);
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/todo.png")}
          style={styles.img}
        />
        <TextInput
          value={enteredText}
          placeholder="Enter a Text"
          style={styles.textInput}
          onChangeText={handleInputText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button2}>
            <Button title="Cancel" color="#fff" onPress={disable} />
          </View>
          <View style={styles.button1}>
            <Button
              title="Add"
              onPress={() => handleSubmit(enteredText, setEnteredText(""))}
              color="#fff"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default ListInput;
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 3,
    borderColor: "#cccccc",
    padding: 14,
    borderRadius: 12,
    width: "100%",
  },
  inputContainer: {
    flex: 1,
    padding: 24,

    alignItems: "center",
    // justifyContent: "center",
    gap: 20,
    backgroundColor: "#eae8f0",
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button1: {
    width: "40%",
    backgroundColor: "#5e0acc",
    borderRadius: 12,
    marginHorizontal: 12,
  },
  button2: {
    width: "40%",
    backgroundColor: "red",
    borderRadius: 12,
    marginHorizontal: 12,
  },
  img: {
    width: 100,
    height: 100,
    margin: 16,
  },
});
