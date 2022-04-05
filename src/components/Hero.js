import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import Profile from "../assests/profile.png";
import { saveAs } from "file-saver";
import React from "react";
const matrixCanvas = (canvas) => {
  let matrix = "01";
  matrix = matrix.split("");
  let ctx = canvas.current.getContext("2d");
  let font_size = 15;
  let columns = canvas.current.width / font_size; //number of columns for the rain
  //an array of drops - one per column
  let drops = [];
  //x below is the x coordinate
  //1 = y co-ordinate of the drop(same for every drop initially)
  for (let x = 0; x < columns; x++) drops[x] = 1;

  //drawing the characters
  function draw() {
    //Black BG for the canvas
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
    ctx.fillRect(0, 0, canvas.current.width, canvas.current.height);

    ctx.fillStyle = "#00ff41"; //green text
    ctx.font = font_size + "px monospace";
    //looping over drops
    for (let i = 0; i < drops.length; i++) {
      //a random chinese character to print
      let text = matrix[Math.floor(Math.random() * matrix.length)];
      //x = i*font_size, y = value of drops[i]*font_size
      ctx.fillText(text, i * font_size, drops[i] * font_size);

      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if (drops[i] * font_size > canvas.current.height && Math.random() > 0.975)
        drops[i] = 0;

      //incrementing Y coordinate
      drops[i]++;
    }
  }

  setInterval(draw, 110);
};

const Hero = (props) => {
  const canvas = useRef(null);
  const handleClick = () => {
    saveAs(
      "https://firebasestorage.googleapis.com/v0/b/my-prez.appspot.com/o/CV_Dragos_Berlea_final.pdf?alt=media&token=4b6712f2-bc79-4f0e-9fb1-41b911ba648e",
      "CV.pdf"
    );
  };
  useEffect(() => {
    matrixCanvas(canvas);
  }, []);

  return (
    <div className={styles.container}>
      <canvas className={styles.canvas} ref={canvas} />{" "}
      <div className={styles["img-container"]}>
        <img src={Profile} alt="Profile" className={styles.profile}></img>
      </div>
      <div className={styles["text-container"]}>
        <div className={styles["text-style"]}>
          <p>HELLO!</p>
          <p>DRAGOS BERLEA'S PAGE</p>
          <div className={styles["button-container"]}>
            <p>{"FOR MORE INFORMATION: "}</p>{" "}
            <button className={styles.button} onClick={handleClick}>
              {"CV"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
