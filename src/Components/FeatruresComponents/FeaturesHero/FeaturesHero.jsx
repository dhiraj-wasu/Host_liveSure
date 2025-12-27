import React from "react";
import styles from "./FeaturesHero.module.css";

const Hero = ({
  highlight = "",
  title = "",
  subtitle = "",
  primaryBtnText = "Get Started",
  primaryBtnAction = () => {},
  secondaryBtnText = "",
  secondaryBtnAction = () => {},
  imageSrc = "",
  imageAlt = "Illustration",
  showButtons = true,
}) => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroContainer}>
        {/* Left Text Section */}
        <div className={styles.heroText}>
          <h1 className={styles.mainLine}>
            {highlight && <span className={styles.highlight}>{highlight}</span>}
            {title}
          </h1>

          <p className={styles.tagLine}>{subtitle}</p>

          {showButtons && (
            <div className={styles.buttons}>
              <button className={styles.primaryBtn} onClick={primaryBtnAction}>
                {primaryBtnText}
              </button>
              {secondaryBtnText && (
                <button
                  className={styles.secondaryBtn}
                  onClick={secondaryBtnAction}
                >
                  {secondaryBtnText}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Right Image Section */}
        <div className={styles.heroImage}>
          <div className={styles.heroImageBg}></div>
          {imageSrc && (
            <img
              src={imageSrc}
              className={styles.image}
              alt={imageAlt}
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
