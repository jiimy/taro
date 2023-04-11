import classnames from "classnames";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TabData } from "../../../constants/CardSolveType";
import CardData from "../../../constants/data";
import ModalFrame from "../ModalFrame";
import "./infomodal.scss";

const InfoModal = ({ setOnModal, spreadType }) => {
  const card = useSelector((state) => state.card.value);
  const [cardData, setCardData] = useState();
  const [tab, setTab] = useState(0);

  useEffect(() => {
    setCardData([]);
    for (let i = 0; i < card.selectedCard.length; i++) {
      setCardData((cardData) => [
        ...cardData,
        Object.values(CardData[card.selectedCard[i]]),
      ]);
    }
  }, [card]);

  const select = card.selectedCard.map((selectedCard, i) => {
    return CardData[selectedCard].content.readingType[spreadType];
  });
  const reverse = card.reverseCard.map((reverseCard, i) => {
    return select[i][reverseCard === 0 ? "upper" : "lower"];
  });
  const mean = card.selectedCard.map((selectedCard, i) => {
    return CardData[selectedCard].content[
      // card.reverseCard[i] === 0 ? "mean" : "lowerMean"
      "mean"
    ];
  });


  // NOTE: 추후에 정방향과 역방향 의미를 추가할때 사용할 const 
  const stateMean = card.selectedCard.map((selectedCard, i) => {
    return CardData[selectedCard].content[
      card.reverseCard[i] === 0 ? "upperMean" : "lowerMean"
    ];
  });

  let strArr = Object.keys(reverse).map((item, index) => reverse[item]);

  return (
    <ModalFrame setOnModal={setOnModal} classname="info-modal" isDim>
      <div className="title">선택된 카드</div>
      {reverse.length !== 1 && (
        <div className="card-position">
          <strong>각 위치에 있는 카드의 의미</strong>
          <div className="desc">
            {TabData[0][spreadType].map((item, i) => (
              <div className="item">{item}</div>
            ))}
          </div>
        </div>
      )}
      <ul>
        {cardData &&
          cardData.map((item, i) => (
            <li
              key={i}
              className={classnames("", {
                "is-reverse": card.reverseCard[i] === 1,
                "is-focus": reverse.length === 1 ? false : tab === i,
              })}
              onClick={() => setTab(i)}
            >
              <img src={item[2]} alt={item[1]} />
            </li>
          ))}
      </ul>

      <div className="mean-area">
        <div className="mean">
          <strong>카드의 기본 의미</strong>
          {reverse.length === 1 ? mean : mean[tab]}
        </div>
        <div className="state-mean">
          <strong>{card.reverseCard[tab] === 1 ? '역방향' : '정방향'}</strong>
          {reverse.length === 1 ? stateMean : stateMean[tab]}
        </div>
      </div>

      <div className="tag">
        {TabData[0][spreadType].map((item, i) => (
          <div
            className={classnames("tag-item", {
              "is-select": tab === i,
            })}
            key={i}
            onClick={() => setTab(i)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="content">
        {/* NOTE: 카드 한개 선택인경우 */}
        {reverse.length === 1 && <div>{strArr[0][tab]}</div>}
        {/* NOTE: 2개 이상 선택인경우 */}
        {reverse.length >= 2 &&
          reverse.map((item, index) => (
            <div
              key={index}
              className={classnames("tab-content", {
                "is-select": tab === index,
              })}
            >
              {item[index]}
            </div>
          ))}
      </div>
    </ModalFrame>
  );
};
export default InfoModal;
