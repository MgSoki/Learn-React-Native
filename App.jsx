import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useState } from "react";
import List from "./components/List";

export default function App() {
  const [text, setText] = useState("");
  const [lists, setLists] = useState([]);
  const handleBtn = () => {
    if (text != "") {
      const todo = {
        id: Date.now(),
        list: text,
      };
      setLists((pre) => [...pre, todo]);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={text} onChangeText={setText} />
      <Button title="Add" onPress={handleBtn} />
      
      <FlatList
        data={lists}
        renderItem={({ item }) => {
          return <List item={item} lists={lists} setLists={setLists} />;
        }}
        ItemSeparatorComponent={<Text></Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
    paddingHorizontal: 30,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    margin: 16,
    borderRadius: 8,
  },
});
