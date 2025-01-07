import { useSelector } from "react-redux";

const { QuestionType } = require("constants/QuestionType");

// 질문에 맞춘 해석 답변 종류
function SpreadResult({ qustion, count }) {
  for (const category of QuestionType) {
    if (category.subText[qustion]) {
      // console.log('m1p: ', category.subText[key])
      return <>{category.subText[qustion].length === count ? "추천" : ""}</>;
    }
    // else {
    //   // console.log("card : ", Array(card.selectedCard.length).fill(""));
    //   return Array(card.selectedCard.length).fill("");
    // }
  }
}

export default SpreadResult;
