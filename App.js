import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import MyComponent from "./src/components/searchbar.components";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";

export default function App() {
  console.log(StatusBar.currentHeight);
  return (
    <>
      <SafeAreaView style={styles.containter}>
        <View style={styles.search}>
          <MyComponent> searchbar</MyComponent>
        </View>
        <View style={styles.list}>
          <Text>dos</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  containter: { flex: 1, marginTop: StatusBar.currentHeight },
  search: { backgroundColor: "green", padding: 16 },
  list: { flex: 1, padding: 16, backgroundColor: "blue" },
});
