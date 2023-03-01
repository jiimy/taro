import React from "react";
import "./card.scss";
import CardData from "./data.js";

const Card = () => {
  const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);
  const list = shuffle(CardData);
  return (
    <div className="cards">
      {list?.map((item, i) => {
        return (
          <div key={i} className="card">
            <img src={item.url} alt={item.name} />
            <div>{item.name}</div>
            {item.index}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
