import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { searchRecipes, parseRecipeSearchResults } from "../../utils/SpoonacularApi.jsx";
import logger from "../../utils/logger.jsx";
import "./AddRecipeModal.css";

const AddRecipeModal = ({ handleCloseModal, onAddRecipe, isOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [category, setCategory] = useState("dinner");

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setSearchQuery("");
      setSearchResults([]);
      setSelectedRecipe(null);
      setError("");
    }
  }, [isOpen]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setError("Please enter a search term");
      return;
    }

    setLoading(true);
    setError("");
    
    try {
      logger("Searching for recipes:", searchQuery);
      const data = await searchRecipes(searchQuery, {
        number: 6,
        type: category,
        addRecipeInformation: true
      });
      
      const recipes = parseRecipeSearchResults(data);
      setSearchResults(recipes);
      
      if (recipes.length === 0) {
        setError("No recipes found. Try a different search term.");
      }
    } catch (err) {
      logger("Search error:", err);
      setError("Failed to search recipes. Using fallback data.");
      
      // Fallback to mock data if API fails
      const mockRecipes = [
        {
          _id: Date.now() + 1,
          title: `${searchQuery} Recipe 1`,
          category: category,
          image: "https://img.spoonacular.com/recipes/635675-312x231.jpg",
          cookingTime: 30,
          difficulty: "easy",
          servings: 4,
          spoonacularScore: 85
        },
        {
          _id: Date.now() + 2,
          title: `${searchQuery} Recipe 2`,
          category: category,
          image: "https://img.spoonacular.com/recipes/641836-312x231.jpg",
          cookingTime: 45,
          difficulty: "medium",
          servings: 6,
          spoonacularScore: 92
        }
      ];
      setSearchResults(mockRecipes);
    }
    
    setLoading(false);
  };

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedRecipe) {
      setError("Please select a recipe to add");
      return;
    }

    // Add the selected recipe with the chosen category
    const recipeToAdd = {
      ...selectedRecipe,
      category: category,
      // Add user ownership for the saved recipe
      owner: "current_user", // This should be replaced with actual user ID
      liked: false
    };

    onAddRecipe(recipeToAdd);
    
    // Reset form
    setSearchQuery("");
    setSearchResults([]);
    setSelectedRecipe(null);
    setError("");
  };

  return (
    <ModalWithForm
      title="Search & Add Recipe"
      buttonText={selectedRecipe ? "Add Recipe" : "Select Recipe"}
      onClose={handleCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="add-recipe-modal">
        {/* Search Section */}
        <div className="search-section">
          <label className="modal__input-label">
            Search for recipes
            <div className="search-input-container">
              <input
                className="modal__input search-input"
                type="text"
                name="search"
                placeholder="e.g., chicken pasta, chocolate cake..."
                value={searchQuery}
                onChange={handleSearchChange}
                minLength={2}
                maxLength={50}
              />
              <button 
                type="button" 
                onClick={handleSearch}
                className="search-button"
                disabled={loading || !searchQuery.trim()}
              >
                {loading ? "⏳" : "🔍"}
              </button>
            </div>
          </label>
        </div>

        {/* Category Selection */}
        <div className="category-section">
          <p className="category-label">Select meal category:</p>
          <div className="category-selector">
            {["breakfast", "lunch", "dinner", "snack"].map((cat) => (
              <div key={cat} className="category-option">
                <input
                  className="input__button"
                  type="radio"
                  name="category"
                  id={cat}
                  value={cat}
                  checked={category === cat}
                  onChange={handleCategoryChange}
                />
                <label htmlFor={cat} className="category-label-text">
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Error Display */}
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="search-results">
            <h4>Search Results:</h4>
            <div className="recipe-grid">
              {searchResults.map((recipe) => (
                <div
                  key={recipe._id}
                  className={`recipe-card ${selectedRecipe?._id === recipe._id ? "selected" : ""}`}
                  onClick={() => handleRecipeSelect(recipe)}
                >
                  <img 
                    src={recipe.image} 
                    alt={recipe.title}
                    className="recipe-image"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200x150/ff6b35/ffffff?text=No+Image";
                    }}
                  />
                  <div className="recipe-info">
                    <h5 className="recipe-title">{recipe.title}</h5>
                    <div className="recipe-meta">
                      <span className="cooking-time">⏱️ {recipe.cookingTime}min</span>
                      <span className="difficulty">🔥 {recipe.difficulty}</span>
                      <span className="servings">👥 {recipe.servings}</span>
                    </div>
                    {recipe.spoonacularScore && (
                      <div className="recipe-score">
                        ⭐ {recipe.spoonacularScore}/100
                      </div>
                    )}
                  </div>
                  {selectedRecipe?._id === recipe._id && (
                    <div className="selected-indicator">✅</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Selected Recipe Preview */}
        {selectedRecipe && (
          <div className="selected-recipe-preview">
            <h4>Selected Recipe:</h4>
            <div className="preview-card">
              <img 
                src={selectedRecipe.image} 
                alt={selectedRecipe.title}
                className="preview-image"
              />
              <div className="preview-info">
                <h5>{selectedRecipe.title}</h5>
                <p>Category: <strong>{category}</strong></p>
                <p>Cooking Time: <strong>{selectedRecipe.cookingTime} minutes</strong></p>
                <p>Difficulty: <strong>{selectedRecipe.difficulty}</strong></p>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="loading-state">
            <div className="loading-spinner">⏳</div>
            <p>Searching for recipes...</p>
          </div>
        )}
      </div>
    </ModalWithForm>
  );
};

export default AddRecipeModal;