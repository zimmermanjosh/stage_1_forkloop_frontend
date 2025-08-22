import "./Header.css";
import DateTime from "../DateTime/DateTime.jsx";
import logoImage from "../../images/dashboard/FL89x40.svg";
import logger from "../../utils/logger.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";

const Header = ({
                  onCreateModal,
                  onRegisterModal,
                  onLoginModal,
                  isLoggedIn
                }) => {
  logger("!! Header");

  const currentUser = useContext(CurrentUserContext);

  // Create a function to render the avatar or first letter placeholder
  const renderAvatar = () => {
    return currentUser?.avatar ? (
      <img src={currentUser.avatar} alt="avatar" className="header__avatar" />
    ) : (
      <div className="header__avatar-placeholder">
        {currentUser?.name ? currentUser.name.charAt(0).toUpperCase() : ""}
      </div>
    );
  };

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <img src={logoImage} alt="ForkLoop logo" className="header__logo-image"></img>
          </Link>
        </div>
        <div>
          <DateTime />
        </div>
      </div>

      <div className="header__avatar-logo">

        {isLoggedIn ? (
          <>
            <div>
              <button type="text" onClick={onCreateModal} className="header__button">
                + Add Recipe
              </button>
            </div>
            <Link to="/profile" className="header__profile-link">
              <div className="header__name">{currentUser?.name}</div>
              {renderAvatar()}
            </Link>
          </>
        ) : (
          <>
            <button type="text" onClick={onRegisterModal} className="header__button">
              Sign Up
            </button>
            <button type="text" onClick={onLoginModal} className="header__button">
              Log In
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;