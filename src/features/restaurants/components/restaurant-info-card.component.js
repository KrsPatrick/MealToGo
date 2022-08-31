import React from "react";
import { Text, StyleSheet } from "react-native";

import { CardStyle, Title, CardCover } from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some restaurant",
    icon,
    photos = [
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = "Gleis 9 3/4",
    open = true,
    rating = 4,
    isCloseTemporarily,
  } = restaurant;
  return (
    <CardStyle elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </CardStyle>
  );
};

const styles = StyleSheet.create({});

export default RestaurantInfoCard;
