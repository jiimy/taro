// ModalFrame.tsx

import React from "react";
import PortalModal from "./PortalModal";
import classnames from "classnames";
import "./portalmodal.scss";

const ModalFrame = ({ children, setOnModal, onClose, classname, isDim }) => {
  return (
    <PortalModal>
      <div className={classnames("modal")}>
        <div className={classnames("", classname)}>
          <div className="">
            {children}
            {onClose && (
              <button className="close" onClick={() => setOnModal(false)}>
                X
              </button>
            )}
          </div>
        </div>
        {isDim && <div className="dim" onClick={() => setOnModal(false)}></div>}
      </div>
    </PortalModal>
  );
};

export default ModalFrame;
