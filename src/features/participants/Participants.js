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
    <div className="panel is-primary">
      <h2 className="panel-heading">參與抽獎名單</h2>
      <ol style={{ maxHeight: "80vh", overflow: "auto" }}>
        {participants.map(({ name, image, key }) => (
          <li className="panel-block" key={key}>
            <figure className="is-flex" style={{ width: "100%" }}>
              <img
                alt={`${name} 的使用者圖片`}
                src={image}
                style={{ width: "30%", minWidth: "64px", maxWidth: "128px" }}
              />
              <figcaption className="is-flex is-align-items-center is-size-5-widescreen	">
                <p className="has-text-left">
                  <span className="is-size-6-widescreen">{`編號：${key}`}</span>
                  <br /> {name}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ol>
    </div>
  );
}
