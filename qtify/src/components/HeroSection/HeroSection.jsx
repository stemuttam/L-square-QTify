import React from "react";
import styles from "./HeroSection.module.css";
import Headphone from "../../assets/headphone.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1> 100 Thousand Songs, ad - free </h1>
        <h1> Over thousands podcast episodes</h1>
      </div>
      <img src={heroImage} alt="Hero_Image" />
    </div>
  );
};

export default HeroSection;
