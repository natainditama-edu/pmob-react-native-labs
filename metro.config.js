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

const defaultResolveRequest = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName.startsWith("@/")) {
    const targetPath = path.resolve(__dirname, "src", moduleName.slice(2));
    return context.resolveRequest(context, targetPath, platform);
  }
  return defaultResolveRequest
    ? defaultResolveRequest(context, moduleName, platform)
    : context.resolveRequest(context, moduleName, platform);
};

module.exports = withTamagui(config, {
  components: ["@tamagui/core"],
  config: "./tamagui.config.ts",
});
