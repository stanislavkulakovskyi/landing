import React from "react";

import { Background } from "./molecules";
import { SideMenu } from "../../shared";

import styles from "./index.module.scss";

const MainLayout = ({ children }) => {
  return (
    <main className={styles.container}>
      <section className={styles.content}>
        <SideMenu />

        <div className={styles.children}>{children}</div>
      </section>

      <Background />
    </main>
  );
};

export default MainLayout;
