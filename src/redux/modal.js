import { createSlice } from "@reduxjs/toolkit";

// const initialStateValue = { name: "", age: 0, email: "" };
const initialStateValue = {
  infoModal: false, //
};

export const modalSlice = createSlice({
  name: "modal",
  initialState: { value: initialStateValue },
  reducers: {
    // 카드의 스프레드 타입과 카드를 선택했을 때
    infoModalState: (state, action) => {
      state.value.infoModal = action.payload.infoModal;
      // console.log('ac', action.payload)
    },
  },
});

export const { infoModalState } = modalSlice.actions;
export default modalSlice.reducer;
