import "./itemModal.css";
import logger from "../../utils/logger.jsx";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";

const RecipeModal = ({ selectedCard, onClose, onCardDelete, isLoggedIn }) => {
  logger("RecipeModal");
  const currentUser = useContext(CurrentUserContext);

  // For recipes, we'll use the recipe data structure
  const recipe = selectedCard;
  const isOwn = recipe.owner === currentUser?._id || !recipe.owner;
  const showDeleteButton = isLoggedIn && isOwn;

  // Handle both recipe image formats
  const recipeImage = recipe.image || recipe.imageUrl;
  const recipeTitle = recipe.title || recipe.name;

  // Format cooking time
  const cookingTime = recipe.readyInMinutes || recipe.cookingTime || 'N/A';
  
  // Format difficulty
  const difficulty = recipe.difficulty || 'Medium';
  
  // Format servings
  const servings = recipe.servings || 'N/A';

  // Clean up HTML from summary
  const cleanSummary = recipe.summary 
    ? recipe.summary.replace(/<[^>]*>/g, '').slice(0, 300) + '...'
    : 'No description available.';

  return (
    <div className="modal">
      <div className="modal__content recipe-modal__content">
        <button
          type="button"
          onClick={onClose}
          className="preview__close-button"
        ></button>

        <div className="modal__image-container">
          <img
            className="modal__image"
            alt={recipeTitle}
            src={recipeImage}
          />
          <div className={`recipe-modal__difficulty-badge recipe-modal__difficulty--${difficulty.toLowerCase()}`}>
            {difficulty}
          </div>
        </div>

        <div className="recipe-modal__content-section">
          <div className="recipe-modal__header">
            <h2 className="recipe-modal__title">{recipeTitle}</h2>
            <div className="recipe-modal__meta">
              <span className="recipe-modal__time">🕒 {cookingTime} min</span>
              <span className="recipe-modal__servings">👥 {servings} servings</span>
              <span className="recipe-modal__category">🍽️ {recipe.category}</span>
            </div>
          </div>

          <div className="recipe-modal__description">
            <h3>About this recipe</h3>
            <p>{cleanSummary}</p>
          </div>

          {recipe.extendedIngredients && (
            <div className="recipe-modal__ingredients">
              <h3>Ingredients</h3>
              <ul>
                {recipe.extendedIngredients.slice(0, 8).map((ingredient, index) => (
                  <li key={index}>
                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                  </li>
                ))}
                {recipe.extendedIngredients.length > 8 && (
                  <li className="recipe-modal__more-ingredients">
                    ...and {recipe.extendedIngredients.length - 8} more ingredients
                  </li>
                )}
              </ul>
            </div>
          )}

          {recipe.dishTypes && recipe.dishTypes.length > 0 && (
            <div className="recipe-modal__tags">
              <h4>Dish Types:</h4>
              <div className="recipe-modal__tag-list">
                {recipe.dishTypes.map((type, index) => (
                  <span key={index} className="recipe-modal__tag">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          )}

          {recipe.sourceUrl && (
            <div className="recipe-modal__source">
              <a 
                href={recipe.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="recipe-modal__source-link"
              >
                📖 View Full Recipe
              </a>
            </div>
          )}
        </div>

        <div className="modal__footer">
          <div className="recipe-modal__actions">
            {showDeleteButton && (
              <button
                className="modal__delete-button"
                onClick={() => onCardDelete(recipe)}
              >
                Remove Recipe
              </button>
            )}
            <button 
              className="recipe-modal__save-button"
              onClick={() => console.log('Save recipe feature coming soon!')}
            >
              💾 Save Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;