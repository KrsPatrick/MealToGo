import Search from "../../../components/searchbar.components";

import React from "react";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.containter}>
      <View style={styles.search}>
        <Search> searchbar</Search>
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containter: { flex: 1, marginTop: StatusBar.currentHeight },
  search: { backgroundColor: "green", padding: 16 },
  list: { flex: 1, padding: 16, backgroundColor: "blue" },
});
