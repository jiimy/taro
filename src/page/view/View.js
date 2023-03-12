import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import InfoModal from "../../components/portalModal/infomodal/InfoModal";
import "./view.scss";
import history from "../../hooks/useHistory";

import { useSelector } from "react-redux";

const View = () => {
  const card = useSelector((state) => state.card.value);
  const [onModal, setOnModal] = useState(false);
  const [block, setBlock] = useState(false);

  useEffect(() => {
    let unblock;
    if (block) {
      unblock = history.block((tx) => {
        let url = tx.location.pathname;
        console.log("url: ", url);
        if (window.confirm(`Are you sure you want to go to "${url}"?`)) {
          unblock();
          tx.retry();
        }
      });
    }

    return () => {
      if (typeof unblock === "function") {
        unblock();
      }
    };
  }, [block]);

  const clickHandler = () => setBlock((block) => !block);

  return (
    <div className="main-page">
      <button type="button" onClick={clickHandler}>
        Toggle Block {block ? "bb" : "nonbb"}
      </button>
      <Card />
      {card.selectState && (
        <div className="btn-wrap">
          <button onClick={() => setOnModal(true)}>결과보기</button>
        </div>
      )}
      {onModal && <InfoModal setOnModal={() => setOnModal()} />}
    </div>
  );
};

export default View;
