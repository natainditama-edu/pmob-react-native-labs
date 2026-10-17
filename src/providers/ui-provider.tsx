import { TamaguiProvider } from "@tamagui/core";
import React, { useMemo } from "react";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { tamaguiConfig } from "../../tamagui.config";

export interface UiProviderProps {
  /**
   * Child component hierarchy to be wrapped by the UI provider infrastructure.
   */
  children: React.ReactNode;

  /**
   * Optional theme mode override.
   */
  theme?: "light" | "dark" | "system";
}

/**
 * Root UI Provider orchestrating gesture recognition, safe area insets,
 * and design system theming across the entire application lifecycle.
 */
export function UiProvider({ children, theme = "system" }: UiProviderProps) {
  const systemColorScheme = useColorScheme();

  const resolvedTheme = useMemo<"light" | "dark">(() => {
    if (theme === "light" || theme === "dark") {
      return theme;
    }

    return systemColorScheme === "dark" ? "dark" : "light";
  }, [theme, systemColorScheme]);

  return (
    <GestureHandlerRootView style={{ flex: 1, flexGrow: 1 }}>
      <SafeAreaProvider style={{ flex: 1, flexGrow: 1, flexShrink: 1 }}>
        <TamaguiProvider config={tamaguiConfig} defaultTheme={resolvedTheme}>
          {children}
        </TamaguiProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
