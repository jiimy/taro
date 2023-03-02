// ModalFrame.tsx

import React from "react";
import PortalModal from "./PortalModal";

const ModalFrame = ({ children, setOnModal, onClose }) => {
  return (
    <PortalModal>
      <div className="modal" onClick={() => setOnModal(false)}>
        <div className="">
          {children}
          {onClose && (
            <button className="close" onClick={() => setOnModal(false)}>
              X
            </button>
          )}
        </div>
      </div>
      <div className="dim"></div>
    </PortalModal>
  );
};

export default ModalFrame;
