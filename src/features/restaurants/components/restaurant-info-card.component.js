import React from "react";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";

import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import {
  CardStyle,
  CardCover,
  Info,
  Address,
  Rating,
  Section,
  Icon,
  SectionEnd,
} from "./restaurant-info-card.styles";

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
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((item, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isCloseTemporarily && (
              <Text variant="caption">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Icon
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
