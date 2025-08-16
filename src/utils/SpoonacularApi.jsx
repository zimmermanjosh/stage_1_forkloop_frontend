import logger from "./logger.jsx";
import { checkResponse } from "./api.jsx";
import { spoonacularAPIData } from "./config.jsx";

const { APIkey, baseURL, endpoints } = spoonacularAPIData;

// Search for recipes with filters
export const searchRecipes = (query = "chicken", options = {}) => {
  logger("!! SpoonacularAPI - searchRecipes");

  const {
    number = 12,
    diet = "",
    type = "", // breakfast, lunch, dinner
    maxReadyTime = "",
    addRecipeInformation = true,
    fillIngredients = false
  } = options;

  const params = new URLSearchParams({
    apiKey: APIkey,
    query,
    number,
    addRecipeInformation,
    fillIngredients,
    ...(diet && { diet }),
    ...(type && { type }),
    ...(maxReadyTime && { maxReadyTime })
  });

  const apiRequest = `${baseURL}${endpoints.complexSearch}?${params}`;
  logger("Request URL:", apiRequest);

  const headers = {
    "Content-Type": "application/json"
  };

  return fetch(apiRequest, { headers })
    .then((res) => {
      return checkResponse(res);
    })
    .catch((error) => {
      console.error("Error fetching recipes:", error);
      throw error;
    });
};

// Get detailed recipe information
export const getRecipeInformation = (recipeId) => {
  logger("!! SpoonacularAPI - getRecipeInformation");

  const params = new URLSearchParams({
    apiKey: APIkey,
    includeNutrition: false
  });

  const apiRequest = `${baseURL}/recipes/${recipeId}/information?${params}`;
  logger("Request URL:", apiRequest);

  const headers = {
    "Content-Type": "application/json"
  };

  return fetch(apiRequest, { headers })
    .then((res) => {
      return checkResponse(res);
    })
    .catch((error) => {
      console.error("Error fetching recipe details:", error);
      throw error;
    });
};

// Get random recipes by meal type
export const getRandomRecipes = (options = {}) => {
  logger("!! SpoonacularAPI - getRandomRecipes");

  const {
    number = 12,
    tags = "", // breakfast, lunch, dinner, vegetarian, etc.
  } = options;

  const params = new URLSearchParams({
    apiKey: APIkey,
    number,
    ...(tags && { tags })
  });

  const apiRequest = `${baseURL}${endpoints.randomRecipes}?${params}`;
  logger("Request URL:", apiRequest);

  const headers = {
    "Content-Type": "application/json"
  };

  return fetch(apiRequest, { headers })
    .then((res) => {
      return checkResponse(res);
    })
    .catch((error) => {
      console.error("Error fetching random recipes:", error);
      throw error;
    });
};

// Transform Spoonacular recipe data to our ForkLoop format
export const parseRecipeData = (spoonacularRecipe) => {
  logger("Parsing recipe:", spoonacularRecipe.title);

  // Determine difficulty based on readyInMinutes and complexity
  const getDifficulty = (readyInMinutes, extendedIngredients = []) => {
    const ingredientCount = extendedIngredients.length;
    
    if (readyInMinutes <= 20 || ingredientCount <= 5) return "easy";
    if (readyInMinutes <= 45 || ingredientCount <= 10) return "medium";
    return "hard";
  };

  // Determine category from dishTypes
  const getCategory = (dishTypes = []) => {
    const types = dishTypes.join(" ").toLowerCase();
    
    if (types.includes("breakfast")) return "breakfast";
    if (types.includes("lunch") || types.includes("side dish")) return "lunch";
    if (types.includes("dinner") || types.includes("main course")) return "dinner";
    if (types.includes("snack") || types.includes("appetizer")) return "snack";
    
    return "dinner"; // default
  };

  const recipe = {
    _id: spoonacularRecipe.id,
    title: spoonacularRecipe.title,
    category: getCategory(spoonacularRecipe.dishTypes),
    image: spoonacularRecipe.image,
    cookingTime: spoonacularRecipe.readyInMinutes || 30,
    difficulty: getDifficulty(
      spoonacularRecipe.readyInMinutes,
      spoonacularRecipe.extendedIngredients
    ),
    servings: spoonacularRecipe.servings || 4,
    glutenFree: spoonacularRecipe.glutenFree || false,
    dairyFree: spoonacularRecipe.dairyFree || false,
    vegetarian: spoonacularRecipe.vegetarian || false,
    vegan: spoonacularRecipe.vegan || false,
    spoonacularScore: Math.round(spoonacularRecipe.spoonacularScore || 0),
    sourceUrl: spoonacularRecipe.sourceUrl,
    summary: spoonacularRecipe.summary
  };

  logger("Parsed recipe:", recipe);
  return recipe;
};

// Parse multiple recipes from search results
export const parseRecipeSearchResults = (data) => {
  logger("Parsing recipe search results");
  
  if (!data.results || !Array.isArray(data.results)) {
    console.warn("Invalid recipe search results format");
    return [];
  }

  return data.results.map(parseRecipeData);
};

// Parse random recipes results
export const parseRandomRecipeResults = (data) => {
  logger("Parsing random recipe results");
  
  if (!data.recipes || !Array.isArray(data.recipes)) {
    console.warn("Invalid random recipes results format");
    return [];
  }

  return data.recipes.map(parseRecipeData);
};

/*
// USAGE EXAMPLES:

// Basic recipe search
searchRecipes("chicken")
  .then(parseRecipeSearchResults)
  .then(recipes => console.log(recipes));

// Advanced search with filters
searchRecipes("pasta", {
  diet: "vegetarian",
  type: "dinner", 
  maxReadyTime: 30,
  number: 6
}).then(parseRecipeSearchResults);

// Get random breakfast recipes
getRandomRecipes({ tags: "breakfast", number: 8 })
  .then(parseRandomRecipeResults);

// Get detailed recipe info
getRecipeInformation(635675)
  .then(parseRecipeData);
*/