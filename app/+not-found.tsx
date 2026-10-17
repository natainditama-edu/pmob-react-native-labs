import { Text, View } from "@tamagui/core";
import { Link, Stack } from "expo-router";
import React from "react";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!", headerShown: false }} />
      <View flex={1} alignItems="center" justifyContent="center" padding="5" backgroundColor="background" gap="4">
        <Text fontSize="7" fontWeight="bold" color="color">
          {"This screen doesn't exist"}
        </Text>
        <Link href="/" asChild>
          <View
            borderWidth={1}
            borderRadius="md"
            paddingVertical="3"
            paddingHorizontal="4"
            borderColor="border-color"
            backgroundColor="background-hover"
          >
            <Text fontSize="4" color="accent-color" fontWeight="600">
              Go to home screen!
            </Text>
          </View>
        </Link>
      </View>
    </>
  );
}
