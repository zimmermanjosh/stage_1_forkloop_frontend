import React from "react";

const CurrentRecipePreferencesContext = React.createContext({
  currentDiet: "",
  currentCuisine: "",
  maxCookingTime: 60,
  handleDietChange: () => {},
  handleCuisineChange: () => {},
  handleCookingTimeChange: () => {},
});

export { CurrentRecipePreferencesContext };