import React from "react";
import ModalFrame from "../ModalFrame";
import "./loadingmodal.scss";

const LoadingModal = ({ setOnModal }) => {
  return (
    <ModalFrame setOnModal={setOnModal} classname="loading-modal">
      {/*
    <div className="loading">카드를 섞고 있습니다.</div>
   */}
      <div className="flickity-container">
        <div className="hand">
          <div className="card card-1">
            <span></span>
          </div>
          <div className="card card-2">
            <span></span>
          </div>
          <div className="card card-3">
            <span></span>
          </div>
        </div>
      </div>
    </ModalFrame>
  );
};
export default LoadingModal;
