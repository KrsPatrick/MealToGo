import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";

import { StatusBar, StyleSheet } from "react-native";

export default function App() {
  console.log(StatusBar.currentHeight);
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
