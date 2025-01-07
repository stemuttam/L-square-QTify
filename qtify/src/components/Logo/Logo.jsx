import React from "react";
import logoImage from "../../assets/logo.png"; // Update the path to your actual logo file
import styles from "./Logo.module.css";

const Logo = ({ id }) => {
  return <img src={logoImage} alt="QTify Logo" className={styles.logo} id={id} />;
};

export default Logo;
