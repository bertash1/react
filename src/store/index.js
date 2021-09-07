import { combineReducers, configureStore } from "@reduxjs/toolkit";
import photoSlice from "./photoSlice";

const rootReducer = combineReducers({
  photo: photoSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
