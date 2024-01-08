import React from "react";
import Modal from "./Modal";
import { VscChromeClose } from "react-icons/vsc";

const MainImgModal = ({ onClose, src }) => {
  return (
    <Modal>
      <div className="img__modal__content">
        <div className="close" onClick={onClose}>
          <VscChromeClose className="close__icon" />
        </div>
        <div className="images__show">
          <img src={src} alt="img" />
        </div>
      </div>
    </Modal>
  );
};

export default MainImgModal;
