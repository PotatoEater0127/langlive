import React from "react";
import { useSelector } from "react-redux";
import { CountDown } from "./features/countdown/CountDown";
import { Participants } from "./features/participants/Participants";
import { LotteryResult } from "./features/lotteryResult/LotteryResult";
import { selectWinner } from "./features/participants/participantsSlice";
import "./App.css";

function App() {
  const winner = useSelector(selectWinner);
  const isFinished = winner != null;

  return (
    <div className="App">
      {isFinished ? (
        <LotteryResult />
      ) : (
        <>
          <CountDown />
          <Participants />
        </>
      )}
    </div>
  );
}

export default App;
