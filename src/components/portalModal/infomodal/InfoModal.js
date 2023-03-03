import React from "react";
import ModalFrame from "../ModalFrame";
import "./infomodal.scss";

const InfoModal = ({ setOnModal }) => {
  return (
    <ModalFrame setOnModal={setOnModal} classname="info-modal" isDim>
      <div className="tab">
        <div className="tab-nav">연애</div>
        <div className="tab-nav">일</div>
        <div className="tab-nav">대인관계</div>
      </div>
      <div className="content">테스트</div>
    </ModalFrame>
  );
};
export default InfoModal;
