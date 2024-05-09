import { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import WaterForm from "../components/WaterForm";

const Modal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) onClose(); // 27 is the escape key
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <WaterForm />
      </div>
    </div>,
    document.body
  );
};

export default Modal;
