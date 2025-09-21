import { useEffect } from "react";
import "../ModalWithForm/ModalWithForm.css";
import logger from "../../utils/logger.jsx";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
  onSubmit,
}) => {
  logger("ModalWithForm");

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  // Handle overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal modal_type_${name}`} onClick={handleOverlayClick}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        ></button>
        <h3>{title}</h3>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <button type="submit" className="submit__button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};
export default ModalWithForm;
