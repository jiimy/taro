import { createSlice } from "@reduxjs/toolkit";

const type = 'one' | 'three'
// const initialStateValue = { name: "", age: 0, email: "" };
const initialStateValue = {
    isSuffle: false, // 
    spreadType: '',
    cardCount: 0,
    selectState: false, // 모든 카드 선택완료
    selectedCard: [], // 선택한 카드
    reverseCard: [] // 선택한 카드의 리버스 상태 
};

export const cardSlice = createSlice({
  name: "card",
  initialState: { value: initialStateValue },
  reducers: {
    // 카드의 스프레드 타입과 카드를 선택했을 때
    cardState: (state, action) => {
      state.value = action.payload;
    },
    cardCount: (state, action) => {
      state.value.cardCount = action.payload.cardCount;
    },
    cardSelect: (state, action) => {
      state.value.selectedCard = action.payload.selectedCard;
      state.value.reverseCard = action.payload.reverseCard;
      state.value.selectState = action.payload.selectState;

      // state.name = action.payload.name;
      // state.age = action.payload.age;
    },
    // 카드 타입: 스프레드타입, 카드 선택 갯수
    cardType: (state, action) => {
      // state.value = action.payload;
      state.value.spreadType = action.payload.spreadType;
      state.value.cardCount = action.payload.cardCount;
    },
    // 다른 스프레드 방식일 때 초기화
    init: (state) => {
      state.value = initialStateValue;
      // state.value.cardCount = action.payload.cardCount;
      // state.value.reverseCard = action.payload.reverseCard;
      // state.value.selectState = action.payload.selectState;
    },
  },
});

export const { cardSelect, init, cardCount, cardType } = cardSlice.actions;
export default cardSlice.reducer;

