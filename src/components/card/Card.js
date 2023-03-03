import classNames from "classnames";
import React, { useEffect, useState } from "react";
import backimg from "../../assets/image/back.png";
import "./card.scss";
import CardData from "./data.js";

const Card = () => {
  const [reverse, setReverse] = useState([]);
  const [select, setSelect] = useState([]);
  const [data, setData] = useState([]);
  const [delayData, setDelayData] = useState([]);

  useEffect(() => {
    // 섞기
    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
    setData(shuffle(CardData));

    // TODO: 새로운 배열에 shuffle된 data를 순차적으로 넣어야 함. 
    for(let j = 0; j <= data.length; j++) {
      const delayData1 = [...data];
      setDelayData(...data, data && data[j])
      console.log("de", delayData);
      // console.log('data1', data && data[j]);
    }

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // 리버스
    for (let i = 0; i <= CardData.length; i++) {
      setReverse((reverse) => [...reverse, rand(0, 1)]);
    }
  }, []);

  // 선택한 것만 보여지게
  const onSelect = (key) => {
    if (select.length <= 2) {
      setSelect((select) => [...select, key]);
    }
  };

  
  
  return (
    <div
      className={classNames("cards", {
        "is-allselect": select.length > 2,
      })}
    >
      {data?.map((item, i) => {
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
  );
};

export default Card;
