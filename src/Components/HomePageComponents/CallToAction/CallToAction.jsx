import React from "react";
import styles from "./CallToAction.module.css";
import Squares from "../../Ui/SquaresBg/SquaresBg";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        <Squares
        className={styles.squaresBg}
        speed={0.2}
        squareSize={40}
        direction="diagonal" // up, down, left, right, diagonal
        borderColor="#002b45e6"
        hoverFillColor="#eee"
      />{" "}
        <div className={styles.ctaContent}>
          <h2 >Your Future, Secured with LifeSure</h2>
          <p>
            Protect your loved ones with a plan that fits your needs. Get expert
            guidance, easy online application, and complete peace of mind today.
          </p>
          <button className={styles.ctaButton}>Download Now</button>
        </div>
        <div className={styles.ctaImage}>
          <img
            src="/test/fl1.webp" // 🖼️ Add your desired image path
            alt="Secure your future with LifeSure"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
