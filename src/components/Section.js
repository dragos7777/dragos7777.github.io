import styles from "./Section.module.css";
import React from "react";

const Section = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className={styles.section}>
      {props.children}
    </section>
  );
});

export default Section;
