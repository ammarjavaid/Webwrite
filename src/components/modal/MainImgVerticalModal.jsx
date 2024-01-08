import React from "react";
import "./veriticalModal.scss";
import { VscChromeClose } from "react-icons/vsc";
import VerticalModal from "./VerticalModal";

const MainImgVerticalModal = ({ onClose, src }) => {
  return (
    <VerticalModal>
      <div className="vertical__img__modal__content">
        <div className="vertical__close" onClick={onClose}>
          <VscChromeClose className="close__icon" />
        </div>
        <div className="vertical__images__show">
          <img src={src} alt="img" />
        </div>
      </div>
    </VerticalModal>
  );
};

export default MainImgVerticalModal;
