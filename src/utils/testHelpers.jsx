// Test helpers for manual API testing
import {
  searchRecipes,
  getRecipeInformation,
  getRandomRecipes,
  parseRecipeSearchResults,
  parseRandomRecipeResults,
} from "./SpoonacularApi.jsx";

/**
 * Quick API tests you can run from browser console
 * Usage: window.testAPI.runQuickTest()
 */
export const testHelpers = {
  // Test recipe search
  testSearch: async (query = "chicken") => {
    console.log(`🔍 Testing recipe search for: "${query}"`);
    try {
      const results = await searchRecipes(query, {
        number: 3,
        addRecipeInformation: true,
      });
      const parsed = parseRecipeSearchResults(results);
      console.log("✅ Search Results:", parsed);
      return parsed;
    } catch (error) {
      console.error("❌ Search Error:", error);
      throw error;
    }
  },

  // Test random recipes
  testRandom: async (category = "dinner") => {
    console.log(`🎲 Testing random recipes for: "${category}"`);
    try {
      const results = await getRandomRecipes({ tags: category, number: 3 });
      const parsed = parseRandomRecipeResults(results);
      console.log("✅ Random Results:", parsed);
      return parsed;
    } catch (error) {
      console.error("❌ Random Error:", error);
      throw error;
    }
  },

  // Test recipe details
  testDetails: async (recipeId = "715538") => {
    console.log(`📖 Testing recipe details for ID: ${recipeId}`);
    try {
      const result = await getRecipeInformation(recipeId);
      console.log("✅ Detail Results:", result);
      return result;
    } catch (error) {
      console.error("❌ Detail Error:", error);
      throw error;
    }
  },

  // Run all tests in sequence
  runAllTests: async () => {
    console.log("🚀 Running all API tests...");

    try {
      // Test 1: Search
      console.log("\n--- Test 1: Recipe Search ---");
      await testHelpers.testSearch("pasta");

      // Test 2: Random
      console.log("\n--- Test 2: Random Recipes ---");
      await testHelpers.testRandom("breakfast");

      // Test 3: Details
      console.log("\n--- Test 3: Recipe Details ---");
      await testHelpers.testDetails("715538");

      console.log("\n✅ All tests completed successfully!");
    } catch (error) {
      console.log("\n❌ Test suite failed:", error);
    }
  },

  // Quick test for immediate feedback
  runQuickTest: async () => {
    console.log("⚡ Running quick API test...");
    try {
      const result = await searchRecipes("chicken", { number: 1 });
      if (result && result.results && result.results.length > 0) {
        console.log(
          "✅ API is working! Found recipe:",
          result.results[0].title,
        );
        return true;
      } else {
        console.log("⚠️ API returned empty results");
        return false;
      }
    } catch (error) {
      console.error("❌ API test failed:", error);
      return false;
    }
  },
};

// Make available globally for console access
if (typeof window !== "undefined") {
  window.testAPI = testHelpers;
}
