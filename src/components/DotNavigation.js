import { useRef, useState } from "react";
import styles from "./DotNavigation.module.css";
import NavItem from "./NavItem";
import React from "react";
const DotNavigation = (props) => {
  let { children } = props;
  const divRef = useRef();
  let scrollArea = new Map();

  const [isActive, setIsActive] = useState("nav-s1");
  const handleScroll = () => {
    const { scrollTop, clientHeight } = divRef.current;

    setIsActive(
      scrollArea.get("" + (Math.round(scrollTop / clientHeight) + 1))
    );
    props.onScroll(Math.round(scrollTop / clientHeight) + 1);
  };
  let navigation = (
    <ul className={styles["nav-list"]}>
      {children.map((element, index) => {
        const clickHandler = () => {
          element.props.scroll();

          setIsActive(`nav-${element.props.id}`);
        };
        const id = `nav-${element.props.id}`;

        scrollArea.set(id[+id.length - 1], id);

        return (
          <NavItem
            title={element.props.title}
            id={id}
            key={id}
            isActive={id === isActive}
            onClick={clickHandler}
          />
        );
      })}
    </ul>
  );

  return (
    <div className={styles["container"]} ref={divRef} onScroll={handleScroll}>
      {navigation}
      {props.children}
    </div>
  );
};

export default DotNavigation;
