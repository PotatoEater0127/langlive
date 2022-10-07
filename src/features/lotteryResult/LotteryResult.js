import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearWinner, selectWinner } from "../participants/participantsSlice";
import styles from "./LotteryResult.module.css";

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
          className={styles.picture}
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
