import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent, tick, selectCurrentTime } from "./countDownSlice";
import { formatTime } from "./utils";

export function CountDown() {
  const [inputTime, setInputTime] = useState(0);
  const dispatch = useDispatch();
  const currentTime = useSelector(selectCurrentTime);

  const isValidInput = isFinite(inputTime) && inputTime > 0;
  const isCounting = currentTime > 0;
  const isDisabled = !isValidInput || isCounting;

  useEffect(() => {
    // 以1秒鐘為倒數計時單位
    const tickUnit = 1000;
    let timer = null;
    if (currentTime >= tickUnit) {
      timer = setTimeout(() => {
        dispatch(tick(tickUnit));
      }, tickUnit);
    }
    return () => clearTimeout(timer);
  }, [currentTime, dispatch]);

  const onSet = () => {
    // 以1分鐘為輸入單位，轉換成毫秒
    const unit = 60000;
    setInputTime(0);
    dispatch(setCurrent(inputTime * unit));
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
      <button disabled={isDisabled} onClick={onSet}>
        設定
      </button>
      <div>{formatTime(currentTime)}</div>
    </div>
  );
}
