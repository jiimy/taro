const { QuestionType } = require("constants/QuestionType");

// 최종 질문 추출
function Interpre(card, question) {
  let subText = [];
  console.log("cc1 : ", card, question);

  const cardTexts = card.selectedCard.map((cardNumber, index) => {
    const orientation = card.reverseCard[index] === 1 ? "역방향" : "정방향";
    return `${cardNumber} ${orientation}`;
  });

  if (question)
    for (const category of QuestionType) {
      if (category.subText[question]) {
        subText = category.subText[question];
        return `${question} 타로카드 ${cardTexts.join(", ")}을 ${subText.join(
          ", "
        )}로 500자 미만으로 결과만 해석해줘`;
      } else {
        subText = question;
        return `${question} 를 질문으로 타로카드 ${cardTexts.join(", ")}을 ${subText}로 500자 미만으로 결과만 해석해줘`;
      }
    }

  // NOTE: 여기에서 조건에 따른 답변 추가
  // 예시)
  // if() {

  // }
  // console.log(
  //   "dd1: ",
  //   `${question} 타로카드 ${cardTexts.join(", ")}을 ${subText.join(
  //     ", "
  //   )}로 500자 미만으로 해석해줘`
  // );
}

export default Interpre;
