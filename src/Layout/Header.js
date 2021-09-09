import React, { Fragment } from "react";
import headerImage from "../assets/header-image.jpg";
import logo from "../assets/logo.png";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <Fragment>
      <header className={styles.header}>
        <img src={logo} alt="Los pollos hermanos's logo" />
        <h1>Los Pollos Hermanos</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={headerImage} alt="Los pollos hermanos's dishes" />
      </div>
    </Fragment>
  );
}
