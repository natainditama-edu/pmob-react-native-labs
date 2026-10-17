const path = require("path");
const { getDefaultConfig } = require("expo/metro-config");
const { withTamagui } = require("@tamagui/metro-plugin");

const config = getDefaultConfig(__dirname);

// Configure path alias resolution for Metro and Tamagui
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  "@/components": path.resolve(__dirname, "src/components"),
  "@/providers": path.resolve(__dirname, "src/providers"),
  "@": path.resolve(__dirname, "src"),
};

module.exports = withTamagui(config, {
  components: ["@tamagui/core"],
  config: "./tamagui.config.ts",
});
