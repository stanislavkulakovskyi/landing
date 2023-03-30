import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";

import { PUBLIC_ROUTES } from "../../../utils/constants/routes";
import { getIsRouteActive } from "../../../utils/helpers/navigation";

import styles from "./index.module.scss";

const SideMenu = () => {
  const { pathname, hash } = useLocation();

  const renderNavigation = () => {
    return PUBLIC_ROUTES.map((route) => {
      const { title, path } = route;
      const isActive = getIsRouteActive(pathname, hash, path);

      return (
        <NavLink
          key={path}
          to={path}
          className={() =>
            classNames(styles.link, {
              [styles.link__active]: isActive,
            })
          }
        >
          {title}
        </NavLink>
      );
    });
  };

  return (
    <div className={styles.container}>
      <p className={styles.btqText}>belletriq</p>

      <div className={styles.navContainer}>
        <div className={classNames(styles.burger, styles.burger__top)} />

        <nav className={styles.nav}>{renderNavigation()}</nav>

        <div className={classNames(styles.burger, styles.burger__bottom)} />
      </div>

      <p className={styles.btqText}>btq music</p>
    </div>
  );
};

export default SideMenu;
