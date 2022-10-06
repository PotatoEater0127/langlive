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

  const { COUNTING, IDLE } = countDownStatusEnum;
  const isCounting = status === COUNTING;
  const isInputValid = isFinite(inputTime) && inputTime > 0;
  const isInputDisabled = !isInputValid || isCounting;

  useEffect(() => {
    const tickUnit = 1000; // 以1秒鐘為倒數計時單位
    let timer = null;
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

  const onSet = () => {
    // 以分鐘為輸入單位，轉換成毫秒
    const unit = 60000;
    setInputTime(0);
    dispatch(setCurrentTime(inputTime * unit));
    dispatch(setCountStatus(COUNTING));
  };

  return (
    <div>
      <h2>抽獎時間</h2>
      <input
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
      分鐘
      <button disabled={isInputDisabled} onClick={onSet}>
        設定
      </button>
      <button onClick={() => setSpeed(speed * 2)}>加速</button>
      <div>{formatTime(currentTime)}</div>
    </div>
  );
}
