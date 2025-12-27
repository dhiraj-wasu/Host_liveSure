import React from "react";
import styles from "./Hero.module.css";
import GradientText from "../../Ui/GradientText/GradientText";
import Squares from "../../Ui/SquaresBg/SquaresBg";

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1 className={styles.mainLine}>
            <span className={styles.highlight}>LiveSure</span>
            Your Healthcare Companion, from Symptom to Recovery


          </h1>

          <p className="h4">
           Think SaaS, but with AI deeply embedded at its core – for emergency care, proactive monitoring, and everyday digital health.
          </p>

          <div className={styles.buttons}>
            <button className={styles.primaryBtn}>Download Now</button>
            <button className={styles.secondaryBtn}>Partner with us </button>
            <button className={styles.secondaryBtn}>Contact us</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <div className={styles.heroImageBg}></div>
          <img src="/test/test1.png" className={styles.image}></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
