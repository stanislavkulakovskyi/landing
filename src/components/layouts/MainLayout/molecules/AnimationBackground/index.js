import React from "react";
import Lottie from "lottie-react";

import bgAnimation from "../../../../../assets/lottie/hero_background.json";

import styles from "./index.module.scss";

const AnimationBackground = () => {
  return (
    <section className={styles.container}>
      <Lottie animationData={bgAnimation} className={styles.animation} />

      <div className={styles.blur} />
    </section>
  );
};

export default AnimationBackground;
