// Data
/*
 === SPOONACULAR API SAMPLE RESPONSE ===
 {
    "recipes": [
        {
            "id": 663104,
            "image": "https://img.spoonacular.com/recipes/663104-556x370.jpg",
            "imageType": "jpg",
            "title": "Thai Fried Rice",
            "readyInMinutes": 45,
            "servings": 1,
            "sourceUrl": "http://www.foodista.com/recipe/C8D432DB/thai-fried-rice",
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "lowFodmap": false,
            "weightWatcherSmartPoints": 88,
            "gaps": "no",
            "preparationMinutes": null,
            "cookingMinutes": null,
            "aggregateLikes": 2,
            "healthScore": 71.0,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 677.79,
            "extendedIngredients": [
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "SOLID",
                    "name": "eggs",
                    "nameClean": "eggs",
                    "original": "2 eggs",
                    "originalName": "eggs",
                    "amount": 2.0,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "SOLID",
                    "name": "garlic",
                    "nameClean": "garlic",
                    "original": "clove garlic, minced fine",
                    "originalName": "garlic, minced fine",
                    "amount": 1.0,
                    "unit": "clove",
                    "meta": [
                        "minced",
                        "fine"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "clove",
                            "unitLong": "clove"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "clove",
                            "unitLong": "clove"
                        }
                    }
                },
                {
                    "id": 11333,
                    "aisle": "Produce",
                    "image": "green-pepper.jpg",
                    "consistency": "SOLID",
                    "name": "bell pepper",
                    "nameClean": "bell pepper",
                    "original": "1/2 green pepper, chopped",
                    "originalName": "green pepper, chopped",
                    "amount": 0.5,
                    "unit": "",
                    "meta": [
                        "green",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 4582,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vegetable-oil.jpg",
                    "consistency": "LIQUID",
                    "name": "oil",
                    "nameClean": "oil",
                    "original": "• Oil for fry",
                    "originalName": "Oil for fry",
                    "amount": 1.0,
                    "unit": "serving",
                    "meta": [
                        "for fry"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "SOLID",
                    "name": "big onion",
                    "nameClean": "big onion",
                    "original": "1 big onion, sliced",
                    "originalName": "big onion, sliced",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [
                        "sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 10211821,
                    "aisle": "Produce",
                    "image": "bell-pepper-orange.png",
                    "consistency": "SOLID",
                    "name": "bell pepper",
                    "nameClean": "bell pepper",
                    "original": "Pepper to taste",
                    "originalName": "Pepper to taste",
                    "amount": 1.0,
                    "unit": "serving",
                    "meta": [
                        "to taste"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 10010219,
                    "aisle": "Meat",
                    "image": "pork-tenderloin-raw.png",
                    "consistency": "SOLID",
                    "name": "pork",
                    "nameClean": "pork",
                    "original": "1 pound lean pork, sliced",
                    "originalName": "lean pork, sliced",
                    "amount": 1.0,
                    "unit": "pound",
                    "meta": [
                        "lean",
                        "sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "lb",
                            "unitLong": "pound"
                        },
                        "metric": {
                            "amount": 453.592,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 20444,
                    "aisle": "Pasta and Rice",
                    "image": "uncooked-white-rice.png",
                    "consistency": "SOLID",
                    "name": "rice",
                    "nameClean": "rice",
                    "original": "2 cups rice",
                    "originalName": "rice",
                    "amount": 2.0,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 370.0,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "SOLID",
                    "name": "salt",
                    "nameClean": "salt",
                    "original": "• Salt to taste",
                    "originalName": "Salt to taste",
                    "amount": 1.0,
                    "unit": "serving",
                    "meta": [
                        "to taste"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 16124,
                    "aisle": "Ethnic Foods",
                    "image": "soy-sauce.jpg",
                    "consistency": "LIQUID",
                    "name": "soy sauce",
                    "nameClean": "soy sauce",
                    "original": "2 1/2 tablespoons soy sauce",
                    "originalName": "soy sauce",
                    "amount": 2.5,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.5,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2.5,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "SOLID",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "2 teaspoons sugar",
                    "originalName": "sugar",
                    "amount": 2.0,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2.0,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 11529,
                    "aisle": "Produce",
                    "image": "tomato.png",
                    "consistency": "SOLID",
                    "name": "tomato",
                    "nameClean": "tomato",
                    "original": "1 tomato, diced",
                    "originalName": "tomato, diced",
                    "amount": 1.0,
                    "unit": "",
                    "meta": [
                        "diced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1.0,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 14412,
                    "aisle": "Beverages",
                    "image": "water.png",
                    "consistency": "LIQUID",
                    "name": "water",
                    "nameClean": "water",
                    "original": "4 cups water",
                    "originalName": "water",
                    "amount": 4.0,
                    "unit": "cups",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4.0,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 946.352,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "summary": "If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Thai Fried Rice might be a recipe you should try. This recipe serves 1. For <b>$6.78 per serving</b>, this recipe <b>covers 68%</b> of your daily requirements of vitamins and minerals. This main course has <b>2953 calories</b>, <b>122g of protein</b>, and <b>122g of fat</b> per serving. This recipe from Foodista has 2 fans. Only a few people really liked this Chinese dish. If you have water, salt, soy sauce, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 89%</b>. This score is outstanding. If you like this recipe, you might also like recipes such as <a href=\"https://spoonacular.com/recipes/thai-fried-rice-35966\">Thai Fried Rice</a>, <a href=\"https://spoonacular.com/recipes/thai-fried-rice-1234777\">Thai Fried Rice</a>, and <a href=\"https://spoonacular.com/recipes/thai-fried-rice-10071\">Thai Fried Rice</a>.",
            "cuisines": [
                "Chinese",
                "Asian"
            ],
            "dishTypes": [
                "side dish",
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "dairy free"
            ],
            "occasions": [],
            "instructions": "<ol><li>Saute garlic in oil. Add sliced pork; cook until brown. Add onion, tomato, and green pepper; fry slightly. Cook rice in water; add to fried mixture. Add eggs and fry. Continue stirring until eggs are cooked. Add soy sauce, salt, sugar, and pepper. Yields 6-8 servings.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Saute garlic in oil.",
                            "ingredients": [
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Add sliced pork; cook until brown.",
                            "ingredients": [
                                {
                                    "id": 10010219,
                                    "name": "pork",
                                    "localizedName": "pork",
                                    "image": "pork-tenderloin-raw.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Add onion, tomato, and green pepper; fry slightly. Cook rice in water; add to fried mixture.",
                            "ingredients": [
                                {
                                    "id": 11333,
                                    "name": "green pepper",
                                    "localizedName": "green pepper",
                                    "image": "green-pepper.jpg"
                                },
                                {
                                    "id": 11529,
                                    "name": "tomato",
                                    "localizedName": "tomato",
                                    "image": "tomato.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 20444,
                                    "name": "rice",
                                    "localizedName": "rice",
                                    "image": "uncooked-white-rice.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Add eggs and fry. Continue stirring until eggs are cooked.",
                            "ingredients": [
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Add soy sauce, salt, sugar, and pepper. Yields 6-8 servings.",
                            "ingredients": [
                                {
                                    "id": 16124,
                                    "name": "soy sauce",
                                    "localizedName": "soy sauce",
                                    "image": "soy-sauce.jpg"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularScore": 19.97466468811035,
            "spoonacularSourceUrl": "https://spoonacular.com/thai-fried-rice-663104"
        }
    ]
}
 */

export const defaultRecipes = [
  {
    _id: 635675,
    title: "Boozy BBQ Chicken",
    category: "dinner", // from dishTypes: ["lunch", "main course", "main dish", "dinner"]
    image: "https://img.spoonacular.com/recipes/635675-312x231.jpg",
    cookingTime: 45, // from readyInMinutes
    difficulty: "medium", // derived from complexity (45min = medium)
    servings: 6,
    glutenFree: true,
    dairyFree: true,
    spoonacularScore: 94,
  },
  {
    _id: 641836,
    title: "Easy Baked Parmesan Chicken",
    category: "dinner",
    image: "https://img.spoonacular.com/recipes/641836-312x231.jpg",
    cookingTime: 45,
    difficulty: "easy", // "Easy" in the title
    servings: 4,
    glutenFree: false,
    dairyFree: false,
    spoonacularScore: 90,
  },
  {
    _id: 652421,
    title: "Moroccan Chicken Tagine",
    category: "dinner",
    image: "https://img.spoonacular.com/recipes/652421-312x231.jpg",
    cookingTime: 45,
    difficulty: "medium", // Complex spice blend
    servings: 6,
    glutenFree: false,
    dairyFree: true,
    spoonacularScore: 78,
  },
  {
    _id: 637276,
    title: "Cassoulet with Chicken or Duck",
    category: "dinner",
    image: "https://img.spoonacular.com/recipes/637276-312x231.jpg",
    cookingTime: 45,
    difficulty: "hard", // Multiple proteins, complex prep
    servings: 8,
    glutenFree: false,
    dairyFree: true,
    spoonacularScore: 80,
  },
  {
    _id: 650942,
    title: "Maple-Glazed Thanksgiving Turkey",
    category: "dinner",
    image: "https://img.spoonacular.com/recipes/650942-312x231.jpg",
    cookingTime: 45,
    difficulty: "hard", // Whole turkey preparation
    servings: 12,
    glutenFree: true,
    dairyFree: false,
    spoonacularScore: 33,
  },
  {
    _id: 645621,
    title: "Grilled Chicken & Corn Red Potato Salad",
    category: "lunch", // from dishTypes: ["side dish"] but more lunch appropriate
    image: "https://img.spoonacular.com/recipes/645621-312x231.jpg",
    cookingTime: 45,
    difficulty: "easy", // Grilled and assembled
    servings: 8,
    glutenFree: true,
    dairyFree: true,
    spoonacularScore: 74,
  },
];

export const categoryFilters = {
  breakfast: "breakfast",
  lunch: "lunch",
  dinner: "dinner",
  snack: "snack",
};

export const difficultyLevels = {
  easy: "easy",
  medium: "medium",
  hard: "hard",
};

export const spoonacularAPIData = {
  APIkey: "YOUR_SPOONACULAR_API_KEY_HERE", // Replace with actual key
  baseURL: "https://api.spoonacular.com",
  endpoints: {
    complexSearch: "/recipes/complexSearch",
    recipeInformation: "/recipes/{id}/information",
    randomRecipes: "/recipes/random",
  },
};

export const userNameProfile = "Joshua Zimmerman";

// Test user data for authentication testing
export const testUser = {
  email: "jtest@test.com",
  password: "test123456",
  name: "jtest",
  avatar: "https://i.pravatar.cc/300?img=50",
  _id: "test_user_12345",
};

// removed and updated 20250718
//export const BASE_URL = "http://localhost:3001";

export const BASE_URL =
  import.meta.env.MODE === "production"
    ? "https://api.forkloop.jumpingcrab.com"
    : "http://localhost:3001";
