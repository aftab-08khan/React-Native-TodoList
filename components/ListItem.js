import { Pressable, StyleSheet, Text, View } from "react-native";

function ListItem(props) {
  return (
    <Pressable
      android_ripple="#210644"
      onPress={props.handleDelete.bind(this, props.id)}
      style={({ pressed }) => pressed && styles.pressedList}
    >
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}
export default ListItem;
const styles = StyleSheet.create({
  listItem: {
    marginVertical: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 10,
  },
  listItemText: {
    padding: 12,

    color: "white",
    fontSize: 16,
  },
  pressedList: {
    opacity: 0.5,
  },
});
