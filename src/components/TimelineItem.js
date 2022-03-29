import { useState } from "react";
import styles from "./TimelineItem.module.css";
import React from "react";
const TimelineItem = (props) => {
  let isActive = false;
  if (props.isActive === props.id) {
    isActive = true;
  } else {
    isActive = false;
  }

  return (
    <div
      onClick={() => {
        props.onItemClick(props.id);
      }}
      className={styles.container}
    >
      <div className={`${styles.year} ${styles["years:after"]}`}>
        <div
          className={`${styles["year-after"]} ${
            props.scrolledInto
              ? styles["year-after-anim"]
              : styles["year-after-out-anim"]
          }`}
        ></div>
        <img src={props.logo} className={styles["logo-style"]} alt="logo"></img>
      </div>
      <div className={styles.text}>
        <div
          className={`${styles["text-style-border"]} ${
            props.scrolledInto ? styles["text-style-border-anim"] : ""
          }`}
        ></div>
        <p
          className={`${styles["text-style"]} ${
            isActive ? styles["text-style-is-active"] : ""
          }`}
        >
          {props.text}
        </p>
        <span
          className={`${styles["nav-item"]} ${
            isActive ? styles["is-active"] : ""
          }`}
        ></span>
        <p className={styles["year-style"]}>{props.year}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
