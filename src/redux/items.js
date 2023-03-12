import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: 0,
};

export const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { add } = itemsSlice.actions;
export default itemsSlice.reducer;
