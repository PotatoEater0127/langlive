import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearWinner, selectWinner } from "../participants/participantsSlice";

export function LotteryResult() {
  const winner = useSelector(selectWinner);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>抽獎結果</h2>
      <img
        alt={`${winner.name} 的使用者圖片`}
        src={winner.image}
        style={{ width: "20%" }}
      />
      {winner.name}
      <button onClick={() => dispatch(clearWinner())}>再來一次</button>
    </div>
  );
}
