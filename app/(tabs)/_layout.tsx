import { useTheme } from "@tamagui/core";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.color.val,
        tabBarInactiveTintColor: theme["color-11"].val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme["border-color"].val,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => null,
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "600",
          },
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: () => null,
          tabBarLabelStyle: {
            fontSize: 16,
            fontWeight: "600",
          },
        }}
      />
    </Tabs>
  );
}
