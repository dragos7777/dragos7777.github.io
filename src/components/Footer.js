import styles from "./Footer.module.css";
import React from "react";
import LINKEDIN from "../assests/linkedin2.png";
import GIT from "../assests/github.jpg";

const Footer = React.forwardRef((props, ref) => {
  return (
    <footer ref={ref} className={styles.footer}>
      <div className={styles.container}>
        <p>CONTACT</p>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/dragos-berlea-teodor/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LINKEDIN} alt="linkedin" className={styles.icon} />
          </a>
          <a
            href="https://github.com/dragos7777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GIT} alt="github" className={styles.icon} />
          </a>
        </div>
        <div className={styles.email}>
          <p>{"dragos.teodor.07.07@gmail.com"}</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
