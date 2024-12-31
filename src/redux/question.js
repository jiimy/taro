import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  question: "", // 질문 텍스트
  questionType: '', // 질문에 따른 스프레드 방식 추천 등 사용
};

export const questionSlice = createSlice({
  name: "question",
  initialState: { value: initialStateValue },
  reducers: {
    questionText: (state, action) => {
      state.value.question = action.payload;
    },
    questionType: (state, action) => {
      state.value.questionType = action.payload;
    }
  },
});

export const { questionText, questionType } = questionSlice.actions;
export default questionSlice.reducer;
