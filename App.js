import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";

import { StatusBar, StyleSheet } from "react-native";

export default function App() {
  console.log(StatusBar.currentHeight);
  return (
    <>
      <RestaurantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
