import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  question: "", // 질문 텍스트
};

export const questionSlice = createSlice({
  name: "question",
  initialState: { value: initialStateValue },
  reducers: {
    questionText: (state, action) => {
      state.value.question = action.payload;
    },
  },
});

export const { questionText } = questionSlice.actions;
export default questionSlice.reducer;
