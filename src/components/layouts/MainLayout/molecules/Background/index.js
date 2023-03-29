import React from "react";
import Lottie from "lottie-react";

import bgAnimation from "../../../../../assets/lottie/hero_background.json";
import { PLUS_STYLES_BY_INDEX } from "./constants";

import bgIllustration from "../../../../../assets/images/bg_illustration.png";

import styles from "./index.module.scss";

const Background = () => {
  const renderPlusIcons = () => {
    return Array(4)
      .fill(true)
      .map((_, index) => (
        <div
          key={`plus-${index}`}
          className={styles.plusContainer}
          style={PLUS_STYLES_BY_INDEX[index]}
        >
          <div className={styles.plusLine} />
          <div className={styles.plusLine} />
        </div>
      ));
  };

  return (
    <section className={styles.container}>
      <Lottie
        animationData={bgAnimation}
        className={styles.animation}
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
      />

      <div className={styles.blur} />

      <img
        src={bgIllustration}
        alt="belletriq"
        className={styles.bgIllustration}
      />

      {renderPlusIcons()}
    </section>
  );
};

export default Background;
