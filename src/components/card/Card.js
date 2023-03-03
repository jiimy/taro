import classNames from "classnames";
import React, { useEffect, useState } from "react";
import backimg from "../../assets/image/back.png";
import LoadingModal from "../portalModal/loadingmodal/LoadingModal";
import "./card.scss";
import CardData from "./data.js";

const Card = () => {
  const [reverse, setReverse] = useState([]);
  const [select, setSelect] = useState([]);
  const [data, setData] = useState([]);
  const [delayData, setDelayData] = useState([]);
  const [delayView, setDelayView] = useState(false);
  const [loadingModal, setLoadingModal] = useState(true);

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
      setReverse((reverse) => [...reverse, rand(0, 1)]);
    }
  }, []);

  useEffect(() => {
    // TODO: 새로운 배열에 shuffle된 data를 순차적으로 넣어야 함.
    let n = 0;
    const timeout = setTimeout(() => {
      setDelayView(true);
      setLoadingModal(false);
      const interval = setInterval(() => {
        n += 1;
        if (n < data.length) {
          setDelayData((delayData) => [...delayData, data[n - 1]]);
        }
      }, 40);
      return () => clearInterval(interval);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [data]);

  // 선택한 것만 보여지게
  const onSelect = (key) => {
    if (select.length <= 2) {
      setSelect((select) => [...select, key]);
    }
  };

  return (
    <div>
      {loadingModal && <LoadingModal />}
      {delayView && (
        <div
          className={classNames("cards", {
            "is-allselect": select.length > 2,
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
                onClick={() => onSelect(item.index)}
              >
                <div className="card">
                  <div className="front">
                    <img src={item.url} alt={item.name} />
                  </div>
                  <div className="back">
                    <img src={backimg} alt="" />
                  </div>
                </div>
                {/*
            //  NOTE: 보여주는게 더 이상함
            {select.indexOf(item.index) >= 0 && <p>{item.name}</p>}
           */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Card;
