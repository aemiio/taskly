import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { theme } from "../theme";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorRed }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "List",
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="list" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="clockcircleo" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          tabBarIcon: ({ color, size }) => {
            return <AntDesign name="bulb1" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
