import React, { useEffect } from "react";
import { selectList, fetchParticipants } from "./participantsSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Participants.module.css";

export function Participants() {
  const dispatch = useDispatch();
  const participants = useSelector(selectList);

  useEffect(() => {
    dispatch(fetchParticipants());
  }, [dispatch]);

  return (
    <div className="panel is-primary">
      <h2 className="panel-heading">參與抽獎名單</h2>
      <ol className={styles.list}>
        {participants.map(({ name, image, key }) => (
          <li className="panel-block" key={key}>
            <figure className={`${styles.stretch} is-flex`}>
              <img
                alt={`${name} 的使用者圖片`}
                src={image}
                className={styles.picture}
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
