import React, { useEffect } from "react";
import "./ConfirmDeleteModal.css";

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, itemName }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  // Handle overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="confirm-modal" onClick={handleOverlayClick}>
      <div className="confirm-modal__content">
        <button
          type="button"
          onClick={onClose}
          className="confirm-modal__close-button"
        ></button>

        <div className="confirm-modal__text">
          <h3 className="confirm-modal__title">
            Are you sure you want to delete this item?
          </h3>
          {itemName && <p className="confirm-modal__item-name">{itemName}</p>}
          <p className="confirm-modal__subtitle">
            This action is irreversible.
          </p>
        </div>

        <div className="confirm-modal__buttons">
          <button className="confirm-modal__confirm-button" onClick={onConfirm}>
            Yes, delete item
          </button>
          <button className="confirm-modal__cancel-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
