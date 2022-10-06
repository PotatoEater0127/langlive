import { createSlice } from "@reduxjs/toolkit";
import { countDownStatusEnum } from "./utils";

const { IDLE } = countDownStatusEnum;

const initialState = {
  current: 0, // 目前開獎剩餘時間(milliseconds)
  status: IDLE,
};

export const countDownSlice = createSlice({
  name: "countDown",
  initialState,
  reducers: {
    setCurrentTime: (state, action) => {
      state.current = action.payload;
    },
    setCountStatus: (state, action) => {
      state.status = action.payload;
    },
    tick: (state, action) => {
      state.current -= action.payload;
    },
  },
});

export const { setCurrentTime, setCountStatus, stopCount, tick } =
  countDownSlice.actions;

export const selectCurrentTime = (state) => state.countDown.current;
export const selectStatus = (state) => state.countDown.status;

export default countDownSlice.reducer;
