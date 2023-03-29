import React from "react";

import { Background } from "./molecules";

import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <main className={styles.container}>
      <section className={styles.children}>{children}</section>

      <Background />
    </main>
  );
};

export default MainLayout;
