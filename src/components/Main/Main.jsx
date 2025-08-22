import ItemCard from "../ItemCard/ItemCard.jsx";
import { useMemo } from "react";
import "./Main.css";
import logger from "../../utils/logger.jsx";

function Main({ recipes, onCardClick, selectedCategory, onCategoryChange }) {
  logger("Main - Recipes:", recipes);
  logger("Main - Selected Category:", selectedCategory);

  // Filter recipes by selected category
  const filteredRecipes = useMemo(() => {
    if (!recipes || !Array.isArray(recipes)) {
      return [];
    }
    return recipes.filter((recipe) => {
      return recipe.category.toLowerCase() === selectedCategory.toLowerCase();
    });
  }, [recipes, selectedCategory]);

  logger("Filtered Recipes:", filteredRecipes);

  return (
    <main className="main">
      <section className="search__section">
        <h1>Discover Delicious Recipes</h1>
        <div className="category-filters">
          {["breakfast", "lunch", "dinner", "snack"].map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? "category-btn--active" : ""}`}
              onClick={() => onCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <section className="card__section" id="card-section">
        <div className="section-header">
          <h2>
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}{" "}
            Recipes
            {filteredRecipes.length > 0 && ` (${filteredRecipes.length})`}
          </h2>
        </div>

        <div className="card__items">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <ItemCard
                key={recipe._id}
                item={recipe}
                onSelectedCard={onCardClick}
              />
            ))
          ) : (
            <p>
              No {selectedCategory} recipes found. Try a different category!
            </p>
          )}
        </div>
      </section>
    </main>
  );
}

export default Main;
