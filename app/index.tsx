import { StyleSheet, View, TextInput } from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { useState } from "react";

type ShoppingListItem = {
  id: string;
  name: string;
};

const initialList: ShoppingListItem[] = [
  { id: 1, name: "Coffee" },
  { id: 2, name: "Tea" },
  { id: 3, name: "Milk" },
];

export default function App() {
  const [shoppingList] = useState(initialList);
  const [value, setValue] = useState<string>()

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        style={styles.textInput}
        onChangeText={setValue}
        placeholder="Add Items"
      />
      {shoppingList.map((item) => (
        <ShoppingListItem name={item.name} key={item.id} />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take the full screen height
    backgroundColor: theme.colorWhite,
    flexDirection: "column",
    paddingHorizontal: 16,
    marginVertical: 18,
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    fontSize: 18,
    borderRadius: 50,
    marginHorizontal: 12,
    marginBottom: 12
  }
});
