import { useState } from "react";
import styles from "./Timeline.module.css";
import TimelineItem from "./TimelineItem";
import BOSCH from "../assests/bosch.svg";
import UBB from "../assests/UBB.svg";
import JKU from "../assests/JKU.png";
import React from "react";

const info = {
  id1: {
    skills: [
      "bulldsfdsfet1",
      "budsf gfdgf dgfsdgfdsg dfgsgd fgdfsdf gsdgfdgfdsdff dsdfs llet1",
      "bulledsffdsdsdgst1",
    ],
    description: ["bullet1", "bullet1", "bullet1"],
  },
  id2: {
    skills: ["bullet3", "bullet3", "bullet3"],
    description: ["bullet2", "bullet2", "bullet2"],
  },
  id3: {
    skills: ["bullet3", "bullet3", "bullet3"],
    description: ["bullet3", "bullet3", "bullet3"],
  },
};

const Timeline = (props) => {
  let scrolledInto = false;
  const [isActive, setisActive] = useState("id1");
  const onItemClick = (id) => {
    setisActive(id);
  };
  if (props.scrollPoz === 4) {
    scrolledInto = true;
  } else {
    scrolledInto = false;
  }

  const descrptionList = Array(...info[isActive].description).map((item) => (
    <p key={Math.random()}>{"- " + item}</p>
  ));
  const skillsList = Array(...info[isActive].skills).map((item) => (
    <p key={Math.random()}>{"- " + item}</p>
  ));
  return (
    <div className={styles.container}>
      <div className={styles.information}>
        <div className={styles["left-title"]}>
          <p>
            {"EDUCATION"} <span className={styles["and-font-left"]}>{"&"}</span>
          </p>
        </div>
        <div className={styles["information-detail"]}>
          <div className={styles.description}>
            <p>Description</p>
            {descrptionList}
          </div>
          <div className={styles.skills}>
            {" "}
            <p>Skills</p>
            {skillsList}
          </div>
        </div>
      </div>
      <div className={styles.timeline}>
        <div className={styles["right-title"]}>
          <p>
            {" "}
            <span className={styles["and-font-right"]}>{"&"}</span>
            {" EXPERIENCE"}
          </p>
        </div>
        <div className={styles["timeline-list"]}>
          <TimelineItem
            year={"2019-2022"}
            text={"  Software Engineer at Bosch Cluj"}
            scrolledInto={scrolledInto}
            isActive={isActive}
            onItemClick={onItemClick}
            id={"id1"}
            key={"id1"}
            logo={BOSCH}
          />
          <TimelineItem
            year={"2017-2018"}
            text={"   Erasmus at JKU Linz"}
            scrolledInto={scrolledInto}
            isActive={isActive}
            onItemClick={onItemClick}
            id={"id2"}
            key={"id2"}
            logo={JKU}
          />
          <TimelineItem
            year={"2016-2020"}
            text={"  Bachelor's Degree at UBB Cluj"}
            scrolledInto={scrolledInto}
            isActive={isActive}
            onItemClick={onItemClick}
            id={"id3"}
            key={"id3"}
            logo={UBB}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
