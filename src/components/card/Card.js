import classNames from "classnames";
import React, { useEffect, useState } from "react";
import backimg from "../../assets/image/back.png";
import "./card.scss";
import CardData from "./data.js";

const Card = () => {
  const [reverse, setReverse] = useState([]);
  const [select, setSelect] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
    setData(shuffle(CardData));

    function rand(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    // TODO: 첫 렌더링시 리버싱
    for (let i = 0; i <= data.length; i++) {
      setReverse((reverse) => [...reverse, rand(0, 1)]);
    }
  }, []);

  // TODO: 선택한 것만 보여지게

  const onSelect = (key) => {
    if (select.length <= 2) {
      setSelect((select) => [...select, key]);
      console.log("dd", select);
    }
  };

  return (
    <div className="cards">
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
            {
              select.indexOf(item.index) >= 0 && 
              <p>{item.name}</p>
            }
          </div>
        );
      })}
    </div>
  );
};

export default Card;
