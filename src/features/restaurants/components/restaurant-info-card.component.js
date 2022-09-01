import React from "react";
import { Text, StyleSheet } from "react-native";

import { CardStyle, Title, CardCover, Info, Address, Rating } from "./restaurant-info-card.styles";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = "Gleis 9 3/4",
    open = true,
    rating = 4,
    isCloseTemporarily,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)))
  
  return (
    <CardStyle elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
            {
                ratingArray.map(() => <SvgXml xml={star} width={20} height={20} />)
            }
        </Rating>
        <SvgXml xml={open} width={20} height={20} />
        <Address>{address}</Address>
      </Info>
    </CardStyle>
  );
};

const styles = StyleSheet.create({});

export default RestaurantInfoCard;
