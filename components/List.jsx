import { useState } from "react";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";

export default function List({ item: { id, list }, lists, setLists }) {
  const [edit, setEdit] = useState(false);
  const [doneEdit, setDoneEdit] = useState("");

  const handelDel = (argId) => {
    setLists(lists.filter((list) => list.id !== argId));
  };
  const handleEdit = () => {
    setEdit(!edit);
  };

  return (
    <View style={styles.listContainer}>
      {edit ? (
        <>
          <TextInput style={styles.editBox} onChange={setDoneEdit} autoFocus onBlur={handleEdit}>
            {list}
          </TextInput>
        </>
      ) : (
        <>
          <Text>{list}</Text>
        </>
      )}

      <Pressable style={styles.press} onPress={() => handelDel(id)}>
        <Text>Delete</Text>
      </Pressable>

      <Pressable style={styles.press} onPress={handleEdit}>
        <Text>Edit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  press: {
    borderColor: "black",
    borderWidth: 1,
    width: 50,
    textAlign: "center",
  },
  editBox: {
    borderWidth: 1,
    padding: 5,
    borderColor: "grey",
  },
});
