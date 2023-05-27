import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./slice/cartSlice";
import countSlice from "./slice/countSlice";
import logInSlice from "./slice/logInSlice";

export const store = configureStore({
  reducer: {
    cart: carReducer,
    count: countSlice,
    login: logInSlice,
  },
});
