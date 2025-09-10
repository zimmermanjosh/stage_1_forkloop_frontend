import React, { useState } from "react";
import AddRecipeModal from "../AddRecipeModal/AddRecipeModal.jsx";
import "./AddRecipeDemo.css";

const AddRecipeDemo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addedRecipes, setAddedRecipes] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddRecipe = (recipe) => {
    console.log("Recipe added:", recipe);
    setAddedRecipes((prev) => [...prev, recipe]);
    setIsModalOpen(false);

    // Show success message
    alert(
      `✅ Recipe "${recipe.title}" added successfully to ${recipe.category}!`,
    );
  };

  const clearRecipes = () => {
    setAddedRecipes([]);
  };

  return (
    <div className="add-recipe-demo">
      <div className="demo-header">
        <h3>🔍 Recipe Search & Add Demo</h3>
        <p>Test the new recipe search and add functionality</p>

        <div className="demo-actions">
          <button onClick={handleOpenModal} className="open-modal-btn">
            🍽️ Search & Add Recipe
          </button>
          {addedRecipes.length > 0 && (
            <button onClick={clearRecipes} className="clear-btn">
              🗑️ Clear Added Recipes
            </button>
          )}
        </div>
      </div>

      {addedRecipes.length > 0 && (
        <div className="added-recipes">
          <h4>📋 Added Recipes ({addedRecipes.length}):</h4>
          <div className="recipe-list">
            {addedRecipes.map((recipe, index) => (
              <div key={index} className="added-recipe-card">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="recipe-thumb"
                />
                <div className="recipe-details">
                  <h5>{recipe.title}</h5>
                  <div className="recipe-badges">
                    <span className="category-badge">{recipe.category}</span>
                    <span className="time-badge">
                      ⏱️ {recipe.cookingTime}min
                    </span>
                    <span className="difficulty-badge">
                      🔥 {recipe.difficulty}
                    </span>
                  </div>
                  {recipe.spoonacularScore && (
                    <div className="score-badge">
                      ⭐ {recipe.spoonacularScore}/100
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="demo-instructions">
        <h4>💡 How to test:</h4>
        <ol>
          <li>Click &quot;🍽️ Search & Add Recipe&quot; button above</li>
          <li>
            Enter a search term (e.g., &quot;chicken&quot;, &quot;pasta&quot;,
            &quot;chocolate&quot;)
          </li>
          <li>Click the search button (🔍)</li>
          <li>Select a meal category (breakfast, lunch, dinner, snack)</li>
          <li>Choose a recipe from the search results</li>
          <li>Click &quot;Add Recipe&quot; to save it</li>
        </ol>

        <div className="api-note">
          <strong>Note:</strong> If the Spoonacular API is not configured or
          fails, the modal will show mock recipe data for testing purposes.
        </div>
      </div>

      <AddRecipeModal
        isOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        onAddRecipe={handleAddRecipe}
      />
    </div>
  );
};

export default AddRecipeDemo;
