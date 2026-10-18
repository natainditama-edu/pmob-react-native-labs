import { Text, View } from "@tamagui/core";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <View flex={1} flexGrow={1} flexShrink={1} backgroundColor="$background">
      <SafeAreaView edges={["top", "left", "right"]} style={{ flex: 1 }}>
        <View
          flex={1}
          gap="$4"
          paddingHorizontal="$6"
          paddingVertical="$12"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="$8" fontWeight="bold" color="$color11" marginBottom="$2">
            Welcome!
          </Text>
          <Text fontSize="$4" color="$color7" textAlign="center">
            React Native
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
