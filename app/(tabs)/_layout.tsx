import { useTheme } from "@tamagui/core";
import { Tabs } from "expo-router";
import React from "react";
import { Platform, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Compass, House } from "@/components/icons";

export default function TabLayout() {
  const theme = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme["color-10"].val,
        tabBarInactiveTintColor: theme["color-5"].val,
        tabBarStyle: {
          backgroundColor: theme.background.val,
          borderTopColor: theme["border-color"].val,
          borderTopWidth: 1,
          height: Platform.OS === "ios" ? 88 : 64 + (insets.bottom > 0 ? insets.bottom : 0),
          paddingTop: 8,
          paddingBottom: Platform.OS === "ios" ? 28 : Math.max(insets.bottom, 8),
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: 2,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarButton: ({ ref, ...props }) => (
          <Pressable
            {...props}
            android_ripple={null}
            style={({ pressed }) => [props.style, { opacity: pressed ? 0.5 : 1 }]}
          />
        ),
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }: any) => <House color={color} size={20} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }: any) => <Compass color={color} size={20} />,
        }}
      />
    </Tabs>
  );
}
