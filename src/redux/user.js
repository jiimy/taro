import { createSlice, current } from "@reduxjs/toolkit";

// const initialStateValue = { name: "", age: 0, email: "" };
const initialStateValue = { name: "", age: 0 };

export const userSlice = createSlice({
  name: "user",
  initialState: initialStateValue,
  reducers: {
    // NOTE: action 값은 받은 state.
    // initialState의 값을 return 한다.
    login: (state, action) => {
      state.value.email = action.payload;
    },
    login1: (state, action) => {
      // state.value.name = action.payload;
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateValue;
    },
    addTodo(state, { payload }) {
      return [
        ...state,
        {
          id: payload.id,
          title: payload.title,
          description: payload.description,
        },
      ];
    },
    increase(state, action) {
      // state.age += action.payload;
      console.log('state.age: ', state.age, action.payload.name);
      console.log('state.name: ', state.name, action.payload);
      // state.age = action.payload;
    },
  },
});

export const { login, logout, login1, addTodo, increase } = userSlice.actions;

export default userSlice.reducer;
