import { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";
import { getFromStorage, saveToStorage } from "../../utils/storage";

export default function NotesScreen() {
  const [note, setNote] = useState("");

  useEffect(() => {
    loadNote();
  }, []);

  const saveNote = async () => {
    await saveToStorage("userNote", { text: note });
    Alert.alert("Saved", "Your note has been saved!");
  };

  const loadNote = async () => {
    const savedNote = await getFromStorage("userNote");
    if (savedNote) {
      setNote(savedNote.text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Write your notes here..."
        value={note}
        onChangeText={setNote}
      />
      <Button title="Save Note" onPress={saveNote} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    textAlignVertical: "top",
  },
});
