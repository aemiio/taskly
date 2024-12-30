import { StyleSheet, View } from "react-native";
import { theme } from "../theme";
import { ListItem } from "../components/screen1";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Link
        href="/counter"
        style={{ textAlign: "center", marginBottom: 18, fontSize: 24 }}
      >
        Go to Counter
      </Link>
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
