import { createSlice } from "@reduxjs/toolkit";
import { countDownStatusEnum } from "./utils";

const { IDLE } = countDownStatusEnum;

const initialState = {
  currentTime: 0, // 距離開獎剩餘時間(milliseconds)
  status: IDLE,
};

export const countDownSlice = createSlice({
  name: "countDown",
  initialState,
  reducers: {
    // 設定抽獎剩餘時間
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    // 設定倒數狀態
    setCountStatus: (state, action) => {
      state.status = action.payload;
    },
    // 倒數時間
    tick: (state, action) => {
      state.currentTime -= action.payload;
    },
  },
});

export const { setCurrentTime, setCountStatus, stopCount, tick } =
  countDownSlice.actions;

export const selectCurrentTime = (state) => state.countDown.currentTime;
export const selectStatus = (state) => state.countDown.status;

export default countDownSlice.reducer;
