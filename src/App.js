import React from "react";
import { useSelector } from "react-redux";
import { CountDown } from "./features/countdown/CountDown";
import { Participants } from "./features/participants/Participants";
import { LotteryResult } from "./features/lotteryResult/LotteryResult";
import { selectWinner } from "./features/participants/participantsSlice";
import "./App.css";
import "bulma/css/bulma.min.css";

function App() {
  const winner = useSelector(selectWinner);
  const isFinished = winner != null;

  return (
    <div className="App">
      {isFinished ? (
        <LotteryResult />
      ) : (
        <div className="columns is-centered is-vcentered pt-4 pb-4">
          <section className="column is-4-fullhd is-5-widescreen">
            <CountDown />
          </section>
          <section className="column is-4-fullhd is-5-widescreen">
            <Participants />
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
