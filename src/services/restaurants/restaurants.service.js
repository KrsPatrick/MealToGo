import { mocks } from "./mock";
import camelize from "camelize";

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
    };
  });
  return camelize(mappedResults);
};

export const restaurantRequest = async (
  location = "37.7749295,-122.4194155"
) => {
  try {
    const mock = await mocks[location];
    restaurantsTransform(mock);
  } catch (error) {
    console.log(error);
  }
};

restaurantRequest();
