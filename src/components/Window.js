import styles from "./Window.module.css";
import Icons from "../assests/icons.jpg";
import Windows from "../assests/windows.svg";
import React from "react";
const Window = (props) => {
  return (
    <div className={styles.window}>
      <div className={styles.header}>
        <div className={styles.containerLeft}>
          <img src={Windows} alt="Windows Xp"></img>
          <p className={styles["text-style"]}>{props.title}</p>
        </div>
        <div className={styles.icons}>
          {" "}
          <img src={Icons} className={styles["icon-img"]} alt="-OX"></img>
          <div className={styles.overlay}></div>
        </div>
      </div>
      <div className={styles.frame}>{props.children}</div>
    </div>
  );
};

export default Window;
