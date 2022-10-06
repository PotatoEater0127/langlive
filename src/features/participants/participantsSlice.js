import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchParticipants as fetchParticipantsData } from "./participantsAPI";

const initialState = {
  list: [],
  winner: null,
};

export const fetchParticipants = createAsyncThunk(
  "participants/fetchParticipantStatus",
  async () => await fetchParticipantsData()
);

export const participantsSlice = createSlice({
  name: "participants",
  initialState,
  reducers: {
    decideWinner: (state) => {
      const randomIndex = Math.floor(Math.random() * state.list.length);
      state.winner = state.list[randomIndex];
    },
    clearWinner: (state) => {
      state.winner = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchParticipants.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { decideWinner, clearWinner } = participantsSlice.actions;

export const selectList = (state) => state.participants.list;
export const selectWinner = (state) => state.participants.winner;

export default participantsSlice.reducer;
