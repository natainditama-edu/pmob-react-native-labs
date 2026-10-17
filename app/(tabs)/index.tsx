import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
    width: "80%",
    height: "80%",
    marginTop: "20%",
    marginLeft: "10%",
  },
  title: {
    alignItems: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
