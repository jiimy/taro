const { QuestionType } = require("constants/QuestionType");

// 질문에 맞춘 해석 답변 종류
function SpreadResult(key) {
  for (const category of QuestionType) {
    if (category.subText[key]) {
      return category.subText[key];
    }
  }
  return 0;
}

export default SpreadResult;
