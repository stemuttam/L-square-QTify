import React from "react";
import logoImage from "../../assets/logo.png"; // Update the path to your actual logo file

const Logo = ({ id }) => {
  return <img src={logoImage} alt="QTify Logo" className={styles.logo} id={id} />;
};

export default Logo;
