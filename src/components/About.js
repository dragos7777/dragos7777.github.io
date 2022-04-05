import styles from "./About.module.css";
import UK from "../assests/uk.png";
import DE from "../assests/germany.png";
import RO from "../assests/romania.png";
import CAR from "../assests/car.png";
import BOOK from "../assests/sci-fi.png";
import MOUNTAIN from "../assests/mountain.png";
import React from "react";
const About = (props) => {
  let scrolledInto = false;
  if (props.scrollPoz === 2) {
    scrolledInto = true;
  } else {
    scrolledInto = false;
  }
  return (
    <div className={styles["container"]}>
      <div
        className={`${styles["about-content"]}  ${
          scrolledInto
            ? styles["scale-about-content"]
            : styles["scale-about-content-back"]
        }`}
      >
        <p className={styles["title"]}>ABOUT</p>
        <p className={styles.text}>
          HELLO<span className={styles.span}>!</span> I
          <span className={styles.span}>'</span>m a programmer and a web
          developer<span className={styles.span}>.</span> Finding easy solutions
          to complex problems is my passion
          <span className={styles.span}>.</span> Check out my favourite
          algorithmic{" "}
          <a
            className={styles.link}
            href="https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options/"
            target="_blank"
            rel="noreferrer"
          >
            problem
          </a>{" "}
          or{" "}
          <span
            onClick={() => {
              props.scroll();
            }}
            className={styles.link}
          >
            projects
          </span>
          <span className={styles.span}>.</span>
        </p>
        <p className={styles.text}>
          MY native language is romanian{" "}
          <img className={styles.flag} src={RO} alt="romanian flag"></img>
          <span className={styles.span}>.</span> I am a professional english{" "}
          <img className={styles.flag} src={UK} alt="UK flag"></img> speaker and
          a beginner in german{" "}
          <img className={styles.flag} src={DE} alt="german flag"></img>
          <span className={styles.span}>.</span>
        </p>
        <p className={styles.text}>
          {" "}
          I have a type B <img
            className={styles.car}
            src={CAR}
            alt="car"
          ></img>{" "}
          license which I use for my other passion hiking{" "}
          <img className={styles.car} src={MOUNTAIN} alt="mountain"></img>{" "}
          <span className={styles.span}>.</span> I can also be found reading SF
          novels <img className={styles.car} src={BOOK} alt="book"></img> or
          watching{" "}
          <a
            className={styles.link}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
          >
            matrix
          </a>
          <span className={styles.span}>.</span>
        </p>
      </div>
      <div
        className={`${styles["left-tag"]}  ${
          scrolledInto ? styles["move-left"] : styles["move-left-back"]
        }`}
      ></div>
      <div
        className={`${styles["right-tag"]}  ${
          scrolledInto ? styles["move-right"] : styles["move-right-back"]
        }`}
      ></div>
      {scrolledInto && (
        <div className={styles["typing-container"]}>
          <p className={styles["typed-out"]}>{"meta"}</p>
        </div>
      )}
    </div>
  );
};

export default About;
