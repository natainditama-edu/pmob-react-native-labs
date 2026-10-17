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
  // Silence harmless upstream package exports fallback warnings for internal relative imports in Tamagui
  if (context.unstable_logWarning) {
    const originalLogWarning = context.unstable_logWarning;
    context.unstable_logWarning = (message) => {
      if (
        typeof message === "string" &&
        message.includes("Falling back to file-based resolution")
      ) {
        return;
      }
      return originalLogWarning(message);
    };
  }

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
