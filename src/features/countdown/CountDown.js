import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decideWinner } from "../participants/participantsSlice";
import {
  setCurrentTime,
  tick,
  selectCurrentTime,
  selectStatus,
  setCountStatus,
} from "./countDownSlice";
import { formatTime, countDownStatusEnum } from "./utils";

export function CountDown() {
  const [inputTime, setInputTime] = useState(0);
  const [speed, setSpeed] = useState(1);
  const dispatch = useDispatch();
  const currentTime = useSelector(selectCurrentTime);
  const status = useSelector(selectStatus);

  const { IDLE, COUNTING, PAUSE } = countDownStatusEnum;
  const isIdle = status === IDLE;
  const isPause = status === PAUSE;
  const isCounting = status === COUNTING;
  const isInputValid = isFinite(inputTime) && inputTime > 0;
  const isInputDisabled = !isInputValid || isCounting;

  useEffect(() => {
    const tickUnit = 1000; // 以1秒鐘為倒數計時單位
    let timer;
    if (isCounting) {
      if (currentTime >= tickUnit) {
        timer = setTimeout(() => {
          dispatch(tick(tickUnit));
        }, tickUnit / speed);
      } else {
        dispatch(decideWinner());
        dispatch(setCountStatus(IDLE));
      }
    }
    return () => clearTimeout(timer);
  }, [currentTime, speed, isCounting, IDLE, dispatch]);

  const onSet = (e) => {
    e.preventDefault();
    // 以分鐘為輸入單位，轉換成毫秒
    const unit = 60000;
    setInputTime(0);
    dispatch(setCurrentTime(inputTime * unit));
    dispatch(setCountStatus(COUNTING));
  };

  const onToggle = (e) => {
    e.preventDefault();
    if (isCounting) {
      dispatch(setCountStatus(PAUSE));
    } else if (isPause) {
      dispatch(setCountStatus(COUNTING));
    }
  };

  const renderButtons = () => {
    return isIdle ? (
      <button
        className="button is-primary"
        disabled={isInputDisabled}
        onClick={onSet}
      >
        開始
      </button>
    ) : (
      <>
        <button
          className="button is-success"
          disabled={isPause}
          onClick={(e) => {
            e.preventDefault();
            setSpeed(speed * 2);
          }}
        >
          加速
        </button>
        <button className="button is-warning ml-1" onClick={onToggle}>
          {isCounting ? "暫停" : "繼續"}
        </button>
      </>
    );
  };

  return (
    <form className="card p-1">
      <h1 className="is-size-1 m-1">抽獎時間</h1>
      <div className="field has-addons is-justify-content-center p-2">
        <div className="control">
          <input
            className="input"
            type="number"
            min="0"
            value={String(inputTime)} // 轉成字串以避免leading zeros，參考https://tinyurl.com/5cu2xsup
            onChange={(e) => {
              setInputTime(e.target.value);
            }}
            onBlur={({ target: { value } }) => {
              setInputTime(Math.floor(value));
            }}
          />
        </div>
        <div className="control">
          <span className="button is-static">分鐘</span>
        </div>
        <div className="ml-2">{renderButtons()}</div>
      </div>

      <div style={{ fontSize: "6rem" }}>{formatTime(currentTime)}</div>
    </form>
  );
}
