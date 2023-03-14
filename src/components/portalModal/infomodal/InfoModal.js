import React, { useEffect, useState } from "react";
import classnames from "classnames";
import ModalFrame from "../ModalFrame";
import { useSelector } from "react-redux";
import CardData from "../../../constants/data";
import "./infomodal.scss";
import { TabData } from "../../../constants/CardSolveType";

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

  // console.log('dd', CardData[0].content['readingType1'][0]);
  // console.log("card", card.selectedCard);
  // console.log('cc', TabData[0][spreadType], spreadType)

  console.log("cardreverse", card.reverseCard, card.selectedCard);
  // console.log('dd', CardData[0].content.readingType[1]['upper']);
  console.log('map',
    card.selectedCard.map((selectedCard, i) => (
      card.reverseCard.map((reverseCard, index) => (
        CardData[selectedCard].content.readingType[spreadType][reverseCard === 0 ? 'upper' : 'reverse'][0]
      ))
    ))
  )
  // CardData[i]

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
        {
          TabData[0][spreadType].map((item, i) => (
            <div
              className={classnames("tab-nav", {
                "is-select": tab === i,
              })}
              key={i}
              onClick={() => setTab(i)}
            >{item}</div>
          ))
        }
      </div>
      <div className="content">
        {/* console.log('dd', CardData[0].content.readingType1[0]); */}
        {card.selectedCard.map((selectedCard, i) => (
          card.reverseCard.map((reverseCard, index) => (
            <div>{CardData[selectedCard].content.readingType[spreadType][reverseCard === 0 ? 'upper' : 'reverse'][tab]}</div>
          ))
        ))}
        {/* {tab === 0 && (
          <div>
          </div>
        )}
        {tab === 1 && <div>11</div>}
        {tab === 2 && <div>22</div>} */}
      </div>
    </ModalFrame>
  );
};
export default InfoModal;
