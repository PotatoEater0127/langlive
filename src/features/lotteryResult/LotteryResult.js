import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearWinner, selectWinner } from "../participants/participantsSlice";

export function LotteryResult() {
  const winner = useSelector(selectWinner);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="is-size-1 mt-2">抽獎結果</h1>
      <figure>
        <img
          alt={`${winner.name} 的使用者圖片`}
          src={winner.image}
          style={{
            maxWidth: "512px",
            border: "1px solid",
            borderColor: "#00d1b2",
            borderRadius: "50%",
          }}
        />
        <figcaption className="is-size-3">
          <span className="is-size-4">{`編號：${winner.key}`}</span>
          <br />
          <span>{winner.name}</span>
        </figcaption>
      </figure>
      <button
        className="button is-primary mt-2"
        onClick={() => dispatch(clearWinner())}
      >
        再來一次
      </button>
    </div>
  );
}
