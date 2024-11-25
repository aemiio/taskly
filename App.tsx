import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <StatusBar style="auto" />
        <Text style={styles.itemText}>Coffee</Text>
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
});
