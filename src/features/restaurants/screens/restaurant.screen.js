import Search from "../../../components/searchbar.components";

import React, { useContext } from "react";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { StyleSheet } from "react-native";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import styled from "styled-components";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({});
