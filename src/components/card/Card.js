import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import backimg from "../../assets/image/back.png";
import CardData from "../../constants/data.js";
import { cardSelect, init } from "../../redux/card";
import { infoModalState } from "../../redux/modal";
import LoadingModal from "../portalModal/loadingmodal/LoadingModal";
import { useLocation } from "react-router-dom";
import "./card.scss";

const Card = () => {
  const dispatch = useDispatch();
  const [reverse, setReverse] = useState([]); // 리버스 배열
  const [reversing, setReversing] = useState([]); // 리버스 배열중 선택된 것
  const [select, setSelect] = useState([]); // 선택한것
  const [data, setData] = useState([]); // 받아온 데이터
  const [delayData, setDelayData] = useState([]); // 데이터 딜레이로 넣기
  const [delayView, setDelayView] = useState(false); // 딜레이로 보여주기?
  const card = useSelector((state) => state.card.value);
  const modal = useSelector((state) => state.modal.value);

  // console.log("cc", card);

  useEffect(() => {
    // 섞기
    async function shuffling() {
      const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
      setData(shuffle(CardData));
    }
    shuffling();

    // TODO: 훅스로 빼자
    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // 리버스
    for (let i = 0; i <= CardData.length; i++) {
      setReverse((reverse) => [...reverse, rand(-1, 1)]);
    }
    dispatch(
      infoModalState({
        infoModal: true,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    if (select.length <= card.cardCount) {
      dispatch(
        cardSelect({
          selectedCard: select,
          reverseCard: reversing,
          selectState: select.length === card.cardCount ? true : null,
          finalCard: select * reversing
        })
      );
    }
  }, [dispatch, select, reversing, card]);

  useEffect(() => {
    let n = 0;
    const timeout = setTimeout(() => {
      setDelayView(true);
      dispatch(
        infoModalState({
          infoModal: false,
        })
      );
      const interval = setInterval(() => {
        n += 1;
        if (n < data.length) {
          setDelayData((delayData) => [...delayData, data[n - 1]]);
        }
      }, 40);
      return () => clearInterval(interval);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [data, dispatch]);

  // 선택한 것만 보여지게
  const onSelect = (key, i) => {
    if (select.length < card.cardCount && select.includes(key) === false) {
      // 선택한게 n개보다 적을때
      setSelect((select) => [...select, key]);
      setReversing((reversing) => [...reversing, reverse[i]]);
    }
  };

  return (
    <div>
    {modal.infoModal && <LoadingModal />}
      {/*
       */}
      {delayView && (
        <>
          <h4>
            {card.cardCount - select.length !== 0 && (
              <>카드를 {card.cardCount - select.length}장 골라주세요.</>
            )}
            {card.cardCount - select.length === 0 && (
              <>하단의 해석풀이 버튼을 눌러 의미를 해석해보세요.</>
            )}
          </h4>
          <div
            className={classNames("cards", {
              "is-allselect": select.length > card.cardCount - 1,
            })}
          >
            {delayData?.map((item, i) => {
              return (
                <div
                  key={i}
                  className={classNames("flip", {
                    "is-reverse": reverse[i] === 1,
                    "is-active": select.indexOf(item.index) < 0,
                  })}
                  onClick={() => onSelect(item.index, i)}
                >
                  <div className="card">
                    <div className="front">
                      <img src={item.url} alt={item.name} />
                    </div>
                    <div className="back">
                      <img src={backimg} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
