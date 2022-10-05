import React, { useEffect } from "react";
import { selectList, fetchParticipants } from "./participantsSlice";
import { useSelector, useDispatch } from "react-redux";

export function Participants() {
  const dispatch = useDispatch();
  const participants = useSelector(selectList);

  useEffect(() => {
    dispatch(fetchParticipants());
  }, [dispatch]);

  return (
    <div>
      <h2>參與抽獎名單</h2>
      <div style={{ height: "70vh", overflow: "auto" }}>
        {participants.map(({ name, image, key }) => (
          <div key={key}>
            <img
              alt={`${name} 的使用者圖片`}
              src={image}
              style={{ width: "20%" }}
            />
            <div>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
