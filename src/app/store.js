import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import participantsReducer from "../features/participants/participantsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    participants: participantsReducer,
  },
});
