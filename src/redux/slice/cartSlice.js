import { createSlice } from "@reduxjs/toolkit";
import data from "../../data";
import { useNavigate } from "react-router-dom";
import { startTransition } from "react";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    cart: [],
    deliveryInfo: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const filter = state.cart.filter((item) => item.id !== action.payload.id);
      sessionStorage.setItem(
        "orderItem",
        JSON.stringify([...filter, action.payload])
      );
      return { ...state, cart: [...filter, action.payload] };
    },
    clearCart: (state, action) => {
      sessionStorage.removeItem("orderItem");
      return { ...state, cart: [] };
    },
    deliveryInfo: (state, action) => {
      // console.log(action.payload);
      return {
        ...state,
        deliveryInfo: [action.payload],
      };
    },
  },
});

export const { addToCart, deliveryInfo, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
