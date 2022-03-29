import styles from "./TechStack.module.css";
import { useEffect, useRef } from "react";
import Stack from "./Stack";
import React from "react";
import JSLogo from "../assests/javascript.svg";
import HTML from "../assests/html.svg";
import CSS from "../assests/css.svg";
import FIREBASE from "../assests/firebase.png";
import PYTHON from "../assests/python.png";
import NODE from "../assests/node.svg";
import DJANGO from "../assests/django.png";
import REACT from "../assests/react.png";
import SQL from "../assests/mysql.png";
import GIT from "../assests/git.png";
import SOLIDITY from "../assests/solidity.svg";
import MATLAB from "../assests/matlab.png";

const frontend = [
  { logo: JSLogo, text: "JAVA SCRIPT" },
  { logo: HTML, text: "HTML" },
  { logo: CSS, text: "CSS" },
  { logo: REACT, text: "REACT" },
];
const backend = [
  { logo: NODE, text: "NODE" },
  { logo: PYTHON, text: "PYTHON" },
  { logo: FIREBASE, text: "FIREBASE" },
  { logo: SQL, text: "MYSQL" },
];
const interests = [
  { logo: DJANGO, text: "DJANGO" },
  { logo: GIT, text: "GIT" },
  { logo: SOLIDITY, text: "SOLIDITY" },
  { logo: MATLAB, text: "MATLAB" },
];
const TechStack = (props) => {
  let scrolledInto = false;
  if (props.scrollPoz === 3) {
    scrolledInto = true;
  } else {
    scrolledInto = false;
  }

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>TechStack</h2>

        <div className={styles.content}>
          {/* <div
            className={scrolledInto.current ? styles["comm-prompt"] : undefined}
          >
            <div
              className={`  ${
                scrolledInto.current ? styles["typing-container"] : undefined
              }`}
            >
              <p
                id="line"
                className={`${
                  scrolledInto.current
                    ? styles["typed-out"] + " " + styles["line"]
                    : undefined
                }`}
              >
                {`~/root$ const response = await get('https://api.brain.com/stack')`}
              </p>
            </div>
          </div> */}

          <Stack
            scrolledInto={scrolledInto}
            logoList={frontend}
            title="FRONTEND"
          />
          <Stack
            scrolledInto={scrolledInto}
            logoList={backend}
            title="BACKEND"
          />
          <Stack
            scrolledInto={scrolledInto}
            logoList={interests}
            title="TOOLS AND INTERESTS"
          />
        </div>
      </div>
    </>
  );
};

export default TechStack;
