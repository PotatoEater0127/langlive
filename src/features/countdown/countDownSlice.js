import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: 0, // 目前開獎剩餘時間(milliseconds)
};

export const countDownSlice = createSlice({
  name: "countDown",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    tick: (state, action) => {
      state.current -= action.payload;
    },
  },
});

export const { setCurrent, tick } = countDownSlice.actions;

export const selectCurrentTime = (state) => state.countDown.current;

export default countDownSlice.reducer;
