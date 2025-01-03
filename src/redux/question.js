import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  question: "", // 질문 텍스트
  responseData: '' // 해설 답변
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
    }
  },
});

export const { questionText, responseText } = questionSlice.actions;
export default questionSlice.reducer;
