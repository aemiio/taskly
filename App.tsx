import { StyleSheet, View } from "react-native";
import { theme } from "./theme";
import { ShoppingListItem } from "./components/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name="Coffee" isCompleted={false}/>
      <ShoppingListItem name="Tea" isCompleted />
      <ShoppingListItem name="Milk" isCompleted={true}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take the full screen height
    backgroundColor: theme.colorWhite,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginVertical: 18
  },
});
