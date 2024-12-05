import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./user";
import cardReducer from "./card";
import itemsReducer from "./items";
import modalReducer from "./modal";
import questionReducer from "./question";

export default configureStore({
  reducer: {
    user: useReducer,
    card: cardReducer,
    items: itemsReducer,
    modal: modalReducer,
    question: questionReducer,
  },
});
