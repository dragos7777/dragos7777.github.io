import styles from "./Stack.module.css";
import React from "react";
const Stack = (props) => {
  return (
    <div className={styles.stack}>
      <div className={styles["left-bar"]} />
      <div className={styles["right-bar"]} />
      <div className={styles["bottom-bar"]}>
        {" "}
        <p className={styles.title}>{props.title}</p>{" "}
      </div>

      <ul className={styles["bar-list"]}>
        {props.logoList.map((el, index) => {
          return (
            <li
              key={index}
              style={{ top: `${64 - index * 16.5}%` }}
              className={`${styles["bar-item"]} ${
                props.scrolledInto ? styles["move" + index] : ""
              }`}
            >
              <div className={styles.card}>
                <div className={styles.inner}>
                  <div className={styles.front}>
                    <img
                      src={el.logo}
                      alt="Tech Logo"
                      className={styles.logo}
                    />
                  </div>
                  <div className={styles.back}>
                    <p>{el.text}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Stack;
