import React from "react";
import ReactDOM from "react-dom";
import SREGLogo from "../../../src/assets/logo-black.png";

import "./Modal.css";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay">
        <div className="modalContainer">
          <div>
            <div className="modalHeader">
            <img src={SREGLogo} alt="/" width="75px" height="auto" />
              <button onClick={onClose} className="btn">
                Close
              </button>              
            </div>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
