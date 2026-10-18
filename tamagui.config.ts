import { defaultConfig } from "@tamagui/config/v5";
import { createTamagui } from "@tamagui/core";

/**
 * Global Tamagui configuration instance configured with standard tokens,
 * themes, breakpoints, and performance-optimized style shorthands.
 */
export const tamaguiConfig = createTamagui({
  ...defaultConfig,
  settings: {
    ...defaultConfig.settings,
    onlyAllowShorthands: false,
  },
});

export default tamaguiConfig;
export type AppConfig = typeof tamaguiConfig;

declare module "@tamagui/core" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface TamaguiCustomConfig extends AppConfig {}
}
