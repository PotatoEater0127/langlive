import { configureStore } from "@reduxjs/toolkit";
import countDownReducer from "../features/countdown/countDownSlice";
import counterReducer from "../features/counter/counterSlice";
import participantsReducer from "../features/participants/participantsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    countDown: countDownReducer,
    participants: participantsReducer,
  },
});
