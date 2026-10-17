import { Text, View } from "@tamagui/core";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, flexGrow: 1, flexShrink: 1 }}>
      <View flex={1} gap="4" padding="5" backgroundColor="background" justifyContent="center" alignItems="center">
        <Text fontSize="8" fontWeight="bold" color="color" marginBottom="2">
          Welcome!
        </Text>
        <Text fontSize="4" color="color-11" textAlign="center">
          React Native
        </Text>
      </View>
    </SafeAreaView>
  );
}
