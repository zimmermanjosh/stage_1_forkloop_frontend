import React, { useState } from "react";
import {
  searchRecipes,
  getRecipeInformation,
  getRandomRecipes,
  parseRecipeSearchResults,
  parseRandomRecipeResults,
} from "../../utils/SpoonacularApi.jsx";
import "./ApiTest.css";

const ApiTest = () => {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [testType, setTestType] = useState("");

  const runTest = async (testFunction, testName) => {
    setLoading(true);
    setError(null);
    setTestType(testName);

    try {
      const result = await testFunction();
      setResults(result);
      console.log(`✅ ${testName} Success:`, result);
    } catch (err) {
      setError(err.message);
      console.error(`❌ ${testName} Error:`, err);
    } finally {
      setLoading(false);
    }
  };

  const testSearchRecipes = async () => {
    const rawResults = await searchRecipes("chicken", {
      number: 3,
      addRecipeInformation: true,
    });
    return parseRecipeSearchResults(rawResults);
  };

  const testRandomRecipes = async () => {
    const rawResults = await getRandomRecipes({
      tags: "dinner",
      number: 3,
    });
    return parseRandomRecipeResults(rawResults);
  };

  const testRecipeDetail = async () => {
    // First get a recipe ID, then fetch details
    const searchResults = await searchRecipes("pasta", { number: 1 });
    if (searchResults.results && searchResults.results.length > 0) {
      const recipeId = searchResults.results[0].id;
      return await getRecipeInformation(recipeId);
    }
    throw new Error("No recipe found to test details");
  };

  const clearResults = () => {
    setResults(null);
    setError(null);
    setTestType("");
  };

  return (
    <div className="api-test">
      <h2>🧪 Spoonacular API Test Component</h2>

      <div className="test-buttons">
        <button
          onClick={() => runTest(testSearchRecipes, "Search Recipes")}
          disabled={loading}
        >
          Test Recipe Search
        </button>

        <button
          onClick={() => runTest(testRandomRecipes, "Random Recipes")}
          disabled={loading}
        >
          Test Random Recipes
        </button>

        <button
          onClick={() => runTest(testRecipeDetail, "Recipe Details")}
          disabled={loading}
        >
          Test Recipe Details
        </button>

        <button onClick={clearResults}>Clear Results</button>
      </div>

      {loading && (
        <div className="test-status loading">🔄 Testing {testType}...</div>
      )}

      {error && (
        <div className="test-status error">
          ❌ <strong>Error:</strong> {error}
        </div>
      )}

      {results && (
        <div className="test-results">
          <h3>✅ {testType} Results:</h3>
          <div className="results-summary">
            {Array.isArray(results) ? (
              <div>
                <p>
                  <strong>Found {results.length} recipes:</strong>
                </p>
                {results.map((recipe, index) => (
                  <div key={recipe.id || index} className="recipe-summary">
                    <h4>{recipe.title || recipe.name}</h4>
                    <p>ID: {recipe.id}</p>
                    <p>Category: {recipe.category}</p>
                    <p>Difficulty: {recipe.difficulty}</p>
                    <p>
                      Cook Time: {recipe.readyInMinutes || recipe.cookingTime}{" "}
                      min
                    </p>
                    {recipe.image && (
                      <img src={recipe.image} alt={recipe.title} width="100" />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="single-recipe">
                <h4>{results.title}</h4>
                <p>ID: {results.id}</p>
                <p>Ready in: {results.readyInMinutes} minutes</p>
                <p>Servings: {results.servings}</p>
                {results.image && (
                  <img src={results.image} alt={results.title} width="200" />
                )}
                {results.summary && (
                  <div>
                    <strong>Summary:</strong>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: results.summary.slice(0, 200) + "...",
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>

          <details>
            <summary>Raw API Response (Click to expand)</summary>
            <pre>{JSON.stringify(results, null, 2)}</pre>
          </details>
        </div>
      )}
    </div>
  );
};

export default ApiTest;
