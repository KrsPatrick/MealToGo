import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

import {
  CardStyle,
  Title,
  CardCover,
  Info,
  Address,
  Rating,
} from "./restaurant-info-card.styles";

import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import styled from "styled-components";
import { Spacer } from "../../../components/spacer/spacer.component";

const Section = styled.View`
  flex-direction: row;
  align-itmes: center;
`;

const Open = styled.View`
  flex-direction: row;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address = "Gleis 9 3/4",
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.ceil(rating)));

  return (
    <CardStyle elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map((item, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isCloseTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            {/* <Spacer position="left" size="large" /> */}
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Image
              style={{ marginLeft: 16, width: 15, height: 15 }}
              source={{ uri: icon }}
            />
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </CardStyle>
  );
};

const styles = StyleSheet.create({});

export default RestaurantInfoCard;
