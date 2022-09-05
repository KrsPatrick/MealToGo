import Search from "../../../components/searchbar.components";

import React from "react";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import { StyleSheet } from "react-native";
import { SafeArea } from "../../../utils/safe-area.component";

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
  return (
    <SafeArea>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

const styles = StyleSheet.create({});
