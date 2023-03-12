import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./user";
import cardReducer from './card';
import itemsReducer from "./items";

export default configureStore({
  reducer: {
    user: useReducer,
    card: cardReducer,
    items: itemsReducer,
  },
});
