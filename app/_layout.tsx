import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";

import { UiProvider } from "@/providers/ui-provider";

SplashScreen.preventAutoHideAsync().catch(() => {
  // Safe no-op on platforms where splash screen auto-hide prevention is unavailable
});

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync().catch(() => {
        // Safe no-op
      });
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <UiProvider theme="system">
      <Stack
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="+not-found"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </UiProvider>
  );
}
