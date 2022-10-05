import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent, tick, selectCurrentTime } from "./countDownSlice";

export function CountDown() {
  const [inputTime, setInputTime] = useState(0);
  const dispatch = useDispatch();
  const currentTime = useSelector(selectCurrentTime);
  const isReady = isFinite(inputTime) && inputTime > 0;

  useEffect(() => {
    // 以1秒鐘為倒數計時單位
    const tickUnit = 1000;
    if (currentTime >= tickUnit) {
      setTimeout(() => {
        dispatch(tick(tickUnit));
      }, tickUnit);
    }
  }, [currentTime]);

  const onSet = () => {
    dispatch(setCurrent(inputTime));
  };

  return (
    <div>
      <h2>抽獎時間</h2>
      <input
        type="number"
        min="0"
        value={inputTime}
        onChange={(e) => setInputTime(e.target.value)}
      />
      分鐘
      <button disabled={!isReady} onClick={onSet}>
        設定
      </button>
      <div>{currentTime}</div>
    </div>
  );
}
