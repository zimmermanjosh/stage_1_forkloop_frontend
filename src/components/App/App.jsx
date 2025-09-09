import React, { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Main from "../Main/Main.jsx";
import ItemModal from "../ItemModal/ItemModal.jsx";
import {
  getRandomRecipes,
  parseRandomRecipeResults,
} from "../../utils/SpoonacularApi.jsx";
import { defaultRecipes } from "../../utils/config.jsx";

import { CurrentRecipePreferencesContext } from "../../contexts/CurrentRecipePreferencesContext.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";
import AddRecipeModal from "../AddRecipeModal/AddRecipeModal.jsx";
import RegisterModal from "../RegisterModal/RegisterModal.jsx";
import LoginModal from "../LoginModal/LoginModal.jsx";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.jsx";
import ConfirmDeleteModal from "../ConfirmDeleteModal/ConfirmDeleteModal.jsx";
import logger from "../../utils/logger.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import Profile from "../Profile/Profile.jsx";
import {
  deleteItems,
  addItems,
  addCardLike,
  removeCardLike,
} from "../../utils/api.jsx";
import {
  register,
  login,
  checkToken,
  updateUserProfile,
} from "../../utils/auth.jsx";
import EditProfileModal from "../EditProfileModal/EditProfileModal.jsx";
import ApiTest from "../ApiTest/ApiTest.jsx";
import AuthTest from "../AuthTest/AuthTest.jsx";
import TestDashboard from "../TestDashboard/TestDashboard.jsx";
import "../../utils/testHelpers.jsx";

import version from "../../version.jsx";

function App() {
  logger("App");

  const [recipes, setRecipes] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("chicken"); // TODO: implement search functionality
  const [selectedCategory, setSelectedCategory] = useState("dinner");
  const [selectedRecipe, setSelectedRecipe] = useState({});

  const [activeModal, setActiveModal] = useState("");
  const [currentDiet, setCurrentDiet] = useState("");
  const [currentCuisine, setCurrentCuisine] = useState("");
  const [maxCookingTime, setMaxCookingTime] = useState(60);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);
  const history = useNavigate();
  const [loginError, setLoginError] = useState(false);

  useEffect(() => {
    // Load initial recipes instead of weather
    getRandomRecipes({ tags: selectedCategory, number: 12 })
      .then(parseRandomRecipeResults)
      .then((recipeData) => {
        setRecipes(recipeData);
      })
      .catch((error) => {
        console.error("Error loading recipes:", error);
        // Fallback to default recipes from config
        setRecipes(defaultRecipes);
      });
  }, [selectedCategory]);

  // Check for existing JWT token on app load
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((userData) => {
          setCurrentUser(userData);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  //modal handlers
  // TODO: Implement recipe search functionality
  // const handleRecipeSearch = (query) => {
  //   setSearchQuery(query);
  //   searchRecipes(query, {
  //     type: selectedCategory,
  //     number: 12
  //   })
  //       .then(parseRecipeSearchResults)
  //       .then(setRecipes)
  //       .catch(console.error);
  // };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const handleCreateModal = () => {
    setActiveModal("create-recipe");
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setItemToDelete(null);
    setLoginError(false);
  };

  const handleSelectedCard = (recipe) => {
    setActiveModal("recipe-detail");
    setSelectedRecipe(recipe);
  };

  logger(selectedRecipe);

  const handleRegisterModal = () => {
    setActiveModal("register");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleEditProfileModal = () => {
    setActiveModal("edit-profile");
  };

  // Recipe preference handlers
  const handleDietChange = (diet) => {
    setCurrentDiet(diet);
  };

  const handleCuisineChange = (cuisine) => {
    setCurrentCuisine(cuisine);
  };

  const handleCookingTimeChange = (time) => {
    setMaxCookingTime(time);
  };

  // Authentication handlers
  const handleRegister = ({ name, avatar, email, password }) => {
    setIsLoading(true);
    register({ name, avatar, email, password })
      .then(() => {
        return login({ email, password });
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          return checkToken(data.token);
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        handleCloseModal();
        history("/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogin = ({ email, password }) => {
    setIsLoading(true);
    setLoginError(false);

    login({ email, password })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          return checkToken(data.token);
        }
      })
      .then((userData) => {
        setCurrentUser(userData);
        setIsLoggedIn(true);
        handleCloseModal();
        history("/");
      })
      .catch((err) => {
        console.log("Login error:", err);
        setLoginError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setIsLoggedIn(false);
    history("/");
  };

  const handleUpdateUser = ({ name, avatar }) => {
    setIsLoading(true);
    updateUserProfile(name, avatar)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleDeleteModal = (recipe) => {
    console.log("🔧 Opening delete confirmation for:", recipe.title);
    setItemToDelete(recipe);
    setActiveModal("confirm-delete");
  };

  const handleConfirmDelete = () => {
    if (!itemToDelete) return;

    console.log("🔧 Confirming delete for:", itemToDelete.title);

    deleteItems(itemToDelete._id)
      .then(() => {
        console.log("✅ Recipe deleted successfully");
        handleCloseModal();
        const updatedRecipes = recipes.filter(
          (item) => item._id !== itemToDelete._id,
        );
        setRecipes(updatedRecipes);
        setItemToDelete(null);
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
        alert("Failed to delete item. Please try again.");
      });
  };

  const onAddItem = (values) => {
    addItems(values)
      .then((res) => {
        // Add to front of array (newest first)
        setRecipes((prevRecipes) => [res, ...prevRecipes]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
        alert("Failed to add item. Please try again.");
      });
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");

    // Check if this card is now liked
    if (isLiked) {
      // Add like
      addCardLike(id, token)
        .then((updatedRecipe) => {
          setRecipes((items) =>
            items.map((item) => (item._id === id ? updatedRecipe : item)),
          );
        })
        .catch((error) => {
          console.error("Error liking item:", error);
        });
    } else {
      // Remove like
      removeCardLike(id, token)
        .then((updatedRecipe) => {
          setRecipes((items) =>
            items.map((item) => (item._id === id ? updatedRecipe : item)),
          );
        })
        .catch((error) => {
          console.error("Error removing like:", error);
        });
    }
  };

  logger(recipes);
  logger(selectedCategory);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentRecipePreferencesContext.Provider
        value={{
          currentDiet,
          currentCuisine,
          maxCookingTime,
          handleDietChange,
          handleCuisineChange,
          handleCookingTimeChange,
        }}
      >
        <Header
          version={version}
          onSignOut={handleSignOut}
          onCreateModal={handleCreateModal}
          onRegisterModal={handleRegisterModal}
          onLoginModal={handleLoginModal}
          isLoggedIn={isLoggedIn}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                recipes={recipes}
                onCardClick={handleSelectedCard}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryFilter}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile
                  onSelectedCard={handleSelectedCard}
                  onCreateModal={handleCreateModal}
                  onEditProfile={handleEditProfileModal}
                  onSignOut={handleSignOut}
                  cards={recipes.filter(
                    (item) => !item.owner || item.owner === currentUser?._id,
                  )} // Include items without owner
                  onCardLike={handleCardLike}
                />
              </ProtectedRoute>
            }
          />
          <Route path="/api-test" element={<ApiTest />} />
          <Route path="/auth-test" element={<AuthTest />} />
          <Route path="/tests" element={<TestDashboard />} />
        </Routes>
        <Footer />
        {activeModal === "create-recipe" && (
          <AddRecipeModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create-recipe"}
            onAddRecipe={onAddItem}
          />
        )}
        {activeModal === "recipe-detail" && (
          <ItemModal
            selectedCard={selectedRecipe}
            onClose={handleCloseModal}
            onCardDelete={handleDeleteModal}
            isOwn={selectedRecipe.owner === currentUser?._id}
            isLoggedIn={isLoggedIn}
            onCardLike={handleCardLike}
          />
        )}
        {activeModal === "login" && (
          <LoginModal
            isOpen={activeModal === "login"}
            onClose={handleCloseModal}
            onLogin={handleLogin}
            onRegisterClick={() => setActiveModal("register")}
            isLoading={isLoading}
            loginError={loginError}
          />
        )}
        {activeModal === "register" && (
          <RegisterModal
            isOpen={activeModal === "register"}
            onClose={handleCloseModal}
            onRegister={handleRegister}
            onLoginClick={() => setActiveModal("login")}
            isLoading={isLoading}
          />
        )}
        {activeModal === "edit-profile" && (
          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            onClose={handleCloseModal}
            onUpdateUser={handleUpdateUser}
            isLoading={isLoading}
          />
        )}

        {activeModal === "confirm-delete" && (
          <ConfirmDeleteModal
            isOpen={activeModal === "confirm-delete"}
            onClose={handleCloseModal}
            onConfirm={handleConfirmDelete}
            itemName={itemToDelete?.title}
          />
        )}
      </CurrentRecipePreferencesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
