import { StyleSheet, View } from "react-native";
import { theme } from "./theme";
import { ListItem } from "./components/screen1";

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem name="coffee" isCompleted={false}></ListItem>
      <ListItem name="milk" isCompleted></ListItem>
      <ListItem name="tea" isCompleted></ListItem>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
});
