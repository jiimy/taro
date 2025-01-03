const { QuestionType } = require("constants/QuestionType");

// 최종 질문 추출
function Interpre(card, question) {
  let subText = [];
  for (const category of QuestionType) {
    if (category.subText[question]) {
      subText = category.subText[question];
      break;
    }
  }

  const cardTexts = card.selectedCard.map((cardNumber, index) => {
    const orientation = card.reverseCard[index] === 1 ? "역방향" : "정방향";
    return `${cardNumber} ${orientation}`;
  });

  // NOTE: 여기에서 조건에 따른 답변 추가 
  // 예시) 
  // if() {

  // }

  return `${question} 타로카드 ${cardTexts.join(", ")}을 ${subText.join(
    ", "
  )}로 500자 미만으로 해석해줘`;
}

export default Interpre;
