import { StyleSheet, TextInput, FlatList, View, Text } from "react-native";
import { theme } from "../theme";
import { useEffect, useState } from "react";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { getFromStorage, saveToStorage } from "../utils/storage";

type ShoppingListItemType = {
  id: string;
  name: string;
  completedAtTimestamp?: number;
  lastUpdatedTimestamp: number;
};

const storageKey = "shopping-list";

const toTitleCase = (str: string) => {
  return str
    .trim()
    .replace(/\s+/g, " ") // Remove extra spaces
    .replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    );
};

export default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchInitial = async () => {
      const data = await getFromStorage(storageKey);
      if (data) {
        setShoppingList(data);
      }
    };
    fetchInitial();
  }, []);

  const handleSubmit = () => {
    const trimmedValue = value.trim();
    if (trimmedValue) {
      const newShoppingList = [
        {
          id: `${Date.now()}-${Math.random()}`,
          name: toTitleCase(trimmedValue),
          lastUpdatedTimestamp: Date.now(),
        },
        ...shoppingList,
      ];
      setShoppingList(newShoppingList);
      saveToStorage(storageKey, shoppingList);
      setValue("");
    } else {
      alert("Please enter an item.");
    }
  };

  const handleDelete = (id: string) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    setShoppingList(newShoppingList);
    saveToStorage(storageKey, shoppingList);
  };

  const handleToggleComplete = (id: string) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completedAtTimestamp: item.completedAtTimestamp
            ? undefined
            : Date.now(),
          lastUpdatedTimestamp: Date.now(),
        };
      }
      return item;
    });
    setShoppingList(newShoppingList);
    saveToStorage(storageKey, shoppingList);
  };

  function orderShoppingList(shoppingList: ShoppingListItemType[]) {
    return shoppingList.sort((item1, item2) => {
      if (item1.completedAtTimestamp && item2.completedAtTimestamp) {
        return item2.completedAtTimestamp - item1.completedAtTimestamp;
      }
      if (item1.completedAtTimestamp && !item2.completedAtTimestamp) {
        return 1;
      }
      if (!item1.completedAtTimestamp && item2.completedAtTimestamp) {
        return -1;
      }
      return item2.lastUpdatedTimestamp - item1.lastUpdatedTimestamp;
    });
  }

  return (
    <FlatList
      data={orderShoppingList(shoppingList)}
      keyExtractor={(item) => item.id}
      stickyHeaderIndices={[0]}
      contentContainerStyle={styles.contentContainer}
      ListHeaderComponent={
        <TextInput
          placeholder="E.g Coffee"
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      }
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>Your shopping list is empty.</Text>
        </View>
      }
      renderItem={({ item }) => (
        <ShoppingListItem
          name={item.name}
          isCompleted={Boolean(item.completedAtTimestamp)}
          onDelete={() => handleDelete(item.id)}
          onToggleComplete={() => handleToggleComplete(item.id)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    paddingTop: 24,
  },
  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
});
