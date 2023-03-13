import React, { useEffect, useState } from "react";
import classnames from "classnames";
import ModalFrame from "../ModalFrame";
import { useSelector } from "react-redux";
import CardData from "../../../constants/data";
import "./infomodal.scss";

const MapRender = ({ data, type }) => {
  return (
    <div>
      {type === "list" && (
        <ul>
          <li>asdfasdf</li>
        </ul>
      )}
    </div>
  );
};

const InfoModal = ({ setOnModal }) => {
  const card = useSelector((state) => state.card.value);
  const [cardData, setCardData] = useState();
  const [tab, setTab] = useState("love");

  useEffect(() => {
    setCardData([]);
    for (let i = 0; i < card.selectedCard.length; i++) {
      setCardData((cardData) => [
        ...cardData,
        Object.values(CardData[card.selectedCard[i]]),
      ]);
    }
  }, [card]);

  // console.log('dd', CardData[0].content);
  console.log("card", card.selectedCard);

  return (
    <ModalFrame setOnModal={setOnModal} classname="info-modal" isDim>
      <div className="title">선택된 카드</div>
      <ul>
        {cardData &&
          cardData.map((item, i) => (
            <li
              key={i}
              className={classnames("", {
                "is-reverse": card.reverseCard[i] === 1,
              })}
            >
              <img src={item[2]} alt={item[1]} />
            </li>
          ))}
      </ul>

      <MapRender data={cardData} type={"list"} />

      <div className="tab">
        <div className="tab-nav" onClick={() => setTab(0)}>
          연애
        </div>
        <div className="tab-nav" onClick={() => setTab(1)}>
          일
        </div>
        <div className="tab-nav" onClick={() => setTab(2)}>
          대인관계
        </div>
      </div>
      <div className="content">테스트</div>
    </ModalFrame>
  );
};
export default InfoModal;
