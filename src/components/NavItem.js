import { useState } from "react";
import styles from "./NavItem.module.css";
import React from "react";
const NavItem = (props) => {
  const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(true);
  };
  const handleUnhover = () => {
    setHover(false);
  };
  return (
    <>
      <li
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
        id={props.id}
        onClick={props.onClick}
        className={`${styles["nav-item"]} ${
          props.isActive ? styles["is-active"] : ""
        }`}
      >
        <p
          className={`${styles.text} ${hover ? styles.hover : styles.unhover}`}
        >
          {props.title}
        </p>
      </li>
    </>
  );
};

export default NavItem;
