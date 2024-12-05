import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  question: "",
};

export const questionSlice = createSlice({
  name: "question",
  initialState: { value: initialStateValue },
  reducers: {
    questionText: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { questionText } = questionSlice.actions;
export default questionSlice.reducer;
