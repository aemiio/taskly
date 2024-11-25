import { StyleSheet, View } from "react-native";
import { theme } from "./theme";
import { ShoppingListItem } from "./components/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.containter}>
      <ShoppingListItem name="Coffee" />
      <ShoppingListItem name="Tea" />
      <ShoppingListItem name="Milk" />
    </View>
  );
}
const styles = StyleSheet.create({
  containter: {
    flex: 1, // Makes the container take the full screen height
    backgroundColor: theme.colorWhite,
    flexDirection: "column",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginVertical: 18
  },
});
