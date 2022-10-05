import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  winner: null,
};

export const participantsSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {
    setWinner: (state) => {
      const randomIndex = Math.floor(Math.random() * state.list.length);
      state.winner = state.list[randomIndex];
    },
    clearWinner: (state) => {
      state.winner = null;
    },
  },
});

export const { setWinner, clearWinner } = participantsSlice.actions;

export const selectCount = (state) => state.counter.value;

export default participantsSlice.reducer;
