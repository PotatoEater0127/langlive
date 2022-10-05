import React from "react";
import { CountDown } from "./features/countdown/CountDown";
import { Participants } from "./features/participants/Participants";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CountDown />
      <Participants />
    </div>
  );
}

export default App;
