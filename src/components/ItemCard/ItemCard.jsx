import "./ItemCard.css";
import logger from "../../utils/logger.jsx";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";

const ItemCard = ({ item, onSelectedCard, onCardLike }) => {
  logger("RecipeCard");

  const currentUser = useContext(CurrentUserContext);

  // Handle both recipe data (image, title) and legacy clothing data (imageUrl, name)
  const recipeImage = item.image || item.imageUrl;
  const recipeTitle = item.title || item.name;

  if (!item || !recipeImage || !recipeTitle) {
    return <div className="card__error">Invalid recipe data</div>;
  }

  const isLiked =
    item.likes && currentUser
      ? item.likes.some((id) => id === currentUser._id)
      : false;

  const handleLikeClick = (e) => {
    e.stopPropagation();
    onCardLike({ id: item._id, isLiked: !isLiked });
  };

  return (
    <div className="card recipe-card">
      <div
        className="card__image-container"
        onClick={() => onSelectedCard(item)}
      >
        <img alt={recipeTitle} src={recipeImage} className="card__image" />
        {item.difficulty && (
          <div
            className={`card__difficulty card__difficulty--${item.difficulty}`}
          >
            {item.difficulty}
          </div>
        )}
      </div>

      <div className="card__content">
        <div className="card__header">
          <h3 className="card__title">{recipeTitle}</h3>
          {currentUser && onCardLike && (
            <button
              type="button"
              className={`card__like-button ${isLiked ? "card__like-button_active" : ""}`}
              onClick={handleLikeClick}
            >
              ♥
            </button>
          )}
        </div>

        <div className="card__info">
          {item.cookingTime && (
            <span className="card__time">🕒 {item.cookingTime} min</span>
          )}
          {item.servings && (
            <span className="card__servings">👥 {item.servings} servings</span>
          )}
        </div>

        {(item.glutenFree || item.dairyFree || item.vegetarian) && (
          <div className="card__tags">
            {item.glutenFree && (
              <span className="card__tag card__tag--gf">GF</span>
            )}
            {item.dairyFree && (
              <span className="card__tag card__tag--df">DF</span>
            )}
            {item.vegetarian && (
              <span className="card__tag card__tag--v">V</span>
            )}
            {item.vegan && <span className="card__tag card__tag--vg">VG</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
