import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/card/Card";
import InfoModal from "../../components/portalModal/infomodal/InfoModal";
import history from "../../hooks/useHistory";
import "./view.scss";
import { init, cardCount } from "../../redux/card";

const View = ({ count }) => {
  const card = useSelector((state) => state.card.value);
  const [onModal, setOnModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardCount({ cardCount: count }));

    let unblock;
    if (card.selectState) {
      unblock = history.block((tx) => {
        let url = tx.location.pathname;
        let locate = window.location.href.split("/")[4];
        if (url !== `/taro/${locate}`) {
          if (
            window.confirm(
              `다른 페이지로 이동하시면 선택한 카드가 초기화 됩니다. \n이동하시겠습니까?`
            )
          ) {
            unblock();
            tx.retry();
            dispatch(cardCount({ cardCount: 0 }));
            dispatch(init());
          }
        }
      });
    }

    return () => {
      if (typeof unblock === "function") {
        unblock();
      }
    };
  }, [card.selectState, dispatch, count]);

  return (
    <div className="main-page">
      {card.cardCount !== 0 && <Card />}
      {card.selectState && (
        <div className="btn-wrap">
          <button onClick={() => setOnModal(true)}>해석풀이</button>
        </div>
      )}
      {onModal && <InfoModal setOnModal={() => setOnModal()} />}
    </div>
  );
};

export default View;
