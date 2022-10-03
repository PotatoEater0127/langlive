import React from "react";
import { CountDown } from "./features/countdown/CountDown";
import { Candidates } from "./features/candidates/Candidates";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CountDown />
      <Candidates />
    </div>
  );
}

export default App;
