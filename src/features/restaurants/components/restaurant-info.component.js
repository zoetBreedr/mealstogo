import React from "react";
import { Text } from "react-native";

export const RestaurantInfo = ({ restaurant }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos,
    address = "100 some random street",
    openingHours = "8:00 AM - 9:00 PM",
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return <Text>Restaurant Info </Text>;
};
