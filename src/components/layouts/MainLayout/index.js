import React from "react";

import { AnimationBackground } from "./molecules";

import styles from "./index.module.scss";

const MainLayout = () => {
  return (
    <main className={styles.container}>
      <AnimationBackground />
    </main>
  );
};

export default MainLayout;
