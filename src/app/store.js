import { configureStore } from "@reduxjs/toolkit";
import countDownReducer from "../features/countdown/countDownSlice";
import participantsReducer from "../features/participants/participantsSlice";

export const store = configureStore({
  reducer: {
    countDown: countDownReducer,
    participants: participantsReducer,
  },
});
