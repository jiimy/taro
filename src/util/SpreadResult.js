import { useSelector } from "react-redux";

const { QuestionType } = require("constants/QuestionType");

// 질문에 맞춘 해석 답변 종류
function SpreadResult(key) {
  const card = useSelector((state) => state.card.value);

  for (const category of QuestionType) {
    if (category.subText[key]) {
      // console.log('m1p: ', category.subText[key])
      return category.subText[key];
    } else {
      // console.log("card : ", Array(card.selectedCard.length).fill(""));
      return Array(card.selectedCard.length).fill("");
    }
  }
}

export default SpreadResult;
