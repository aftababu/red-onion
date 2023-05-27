import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "Count",
  initialState: 1,
  reducers: {
    increment: (state, action) => {
      const incre = state + 1;
      // localStorage.setItem("count", JSON.parse(incre));
      return incre;
    },
    decrement: (state, action) => {
      if (state > 1) {
        const decre = state - 1;
        // localStorage.setItem("count", JSON.parse(decre));
        return decre;
      } else return state;
    },
  },
});

export const { increment, decrement } = countSlice.actions;

export default countSlice.reducer;
