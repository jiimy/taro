import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  question: "", // 질문 텍스트
  responseData: "", // 해설 답변
  questionState: false, // 질문 선택 유무
  questionCard: [] // 이전 카드 선택과 비교
};

export const questionSlice = createSlice({
  name: "question",
  initialState: { value: initialStateValue },
  reducers: {
    questionText: (state, action) => {
      state.value.question = action.payload;
    },
    responseText: (state, action) => {
      state.value.responseData = action.payload;
    },
    questionState: (state) => {
      state.value.questionState = !state.value.questionState;
    },
    questionCard: (state,action) => {
      state.value.questionCard = action.payload.questionCard
    }
  },
});

export const { questionText, responseText, questionState, questionCard } =
  questionSlice.actions;
export default questionSlice.reducer;
