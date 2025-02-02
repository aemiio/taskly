/* eslint-disable prettier/prettier */
import { Link, Stack } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { theme } from "../../theme";
import { Pressable } from "react-native";
export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => {
            return (
              <Link href="/counter/history" asChild>
                <Pressable hitSlop={20}>
                  <FontAwesome
                    name="history"
                    size={24}
                    color={theme.colorRed}
                  />
                </Pressable>
              </Link>
            );
          },
        }}
      ></Stack.Screen>
    </Stack>
  );
}
