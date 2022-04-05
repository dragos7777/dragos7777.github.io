import styles from "./Project.module.css";
import Tetris from "../assests/tetris.jpg";
import Stonk from "../assests/stonks.png";
import React from "react";
const Project = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{"PROJECTS"}</p>
      <div className={styles["projects-container"]}>
        <div className={styles["tetris-container"]}>
          <p className={styles.title}>{"TETRIS"}</p>
          <div className={styles["tetris-img-container"]}>
            <a
              href="https://dragos7777.github.io/tetris/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Tetris} alt="tetris" className={styles["tetris-img"]} />
            </a>
          </div>
          <div className={styles["tetris-text"]}>
            <p>{"The classic game of tetris made in vanilla JS by me!"}</p>
          </div>
        </div>
        <div className={styles["stonk-container"]}>
          <p className={styles.title}>{"VIRTUAL STONKS"}</p>
          <div className={styles["stonk-img-container"]}>
            <a
              href="https://dragos7777.github.io/virtual-stonks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Stonk} alt="stonks" className={styles["stonk-img"]} />
            </a>
          </div>
          <div className={styles["stonk-text"]}>
            <p>
              {
                "A web app that simmulates buying and selling stocks. Powerd by REACT with ROUTER and REDUX!"
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
