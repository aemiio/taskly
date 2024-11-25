import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { theme } from "./theme";

export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to delete this?",
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => console.log("Deleting..."),
          style: "destructive",
        },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <StatusBar style="auto" />
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity
          onPress={handleDelete}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  itemText: {
    fontSize: 30,
    fontWeight: "regular",
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 8,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
