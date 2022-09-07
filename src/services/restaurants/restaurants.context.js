import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantRequest, restuarantTransform } from "./restaurants.service";

export const RestaurantsContext = createContext({
  restaurants: [],
});

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([1, 2, 3]);

  return (
    <RestaurantsContext.Provider value={restaurants}>
      {children}
    </RestaurantsContext.Provider>
  );
};
