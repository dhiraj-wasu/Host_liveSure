import React, { useState, useRef } from "react";
import styles from "./FeaturesList.module.css";

const features = [
  {
    role: "Patients & Families",
    heading: "For Patients & Families",
    description: [
      "Real-time emergency detection via phone/wearables",
      "One-tap SOS with bystander guidance",
      "Unified health records: consults, labs, pharmacy, insurance",
    ],
    image: "/test/fl1.webp",
  },
  {
    role: "Doctors & Hospitals",
    heading: "For Doctors & Hospitals",
    description: [
      "Streamlined emergency intake with pre-arrival data relay",
      "AI-assisted patient care & decision support",
      "Faster diagnosis and better patient outcomes",
    ],
    image: "/test/fl2.webp",
  },
  {
    role: "Ambulance Providers",
    heading: "For Ambulance Providers",
    description: [
      "Real-time smart dispatch of ambulances",
      "Automatic hospital booking for emergency cases",
      "Navigation & patient details shared en route",
    ],
    image: "/test/fl3.webp",
  },
  {
    role: "Insurance & Health Programs",
    heading: "For Insurance & Health Programs",
    description: [
      "Automated claims with verified digital health data",
      "Link medical events to policy coverage seamlessly",
      "Reduce fraud and improve efficiency",
    ],
    image: "/test/fl1.webp",
  },
  {
    role: "Government / NGOs",
    heading: "For Governments & NGOs",
    description: [
      "Integration with public health programs",
      "Support for underserved regions via offline-first design",
      "Health data insights to drive better public health policy",
    ],
    image: "/test/fl2.webp",
  },
];

const FeaturesList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const cardRef = useRef(null); // Ref for first card to get width

  const handleNavClick = (index) => {
    setActiveIndex(index);
    if (sliderRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={styles.featuresSliderWrapper}>
      <div className={styles.headingWrapper}>
        <h2 className={styles.title}>Features for All Stakeholders</h2>
        <p className={styles.subtitle}>
          One platform, customized for every participant in the healthcare ecosystem.
        </p>
      </div>

      <nav className={styles.rolesNav}>
        {features.map((feature, index) => (
          <button
            key={feature.role}
            className={`${styles.navButton} ${activeIndex === index ? styles.activeNav : ""}`}
            onClick={() => handleNavClick(index)}
          >
            {feature.role}
          </button>
        ))}
      </nav>

      <div className={styles.slider} ref={sliderRef}>
        {features.map((feature, index) => (
          <div
            key={feature.role}
            className={styles.card}
            ref={index === 0 ? cardRef : null} // Attach ref only to first card
          >
            <div className={styles.cardText}>
              <h2 className={styles.cardHeading}>
                <span>{feature.heading.split(" ")[0]}</span>{" "}
                {feature.heading.split(" ").slice(1).join(" ")}
              </h2>
              <ul className={styles.cardPoints}>
                {feature.description.map((point, idx) => (
                  <li key={idx} className={styles.point}>
                    {point}
                  </li>
                ))}
              </ul>
              <div className={styles.buttons}>
                <button className={styles.primaryBtn}>Download Now</button>
                <button className={styles.secondaryBtn}>Learn More</button>
              </div>
            </div>
            <div className={styles.cardImage}>
              <img src={feature.image} alt={feature.role} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.paginationDots}>
        {features.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${activeIndex === index ? styles.active : ""}`}
            onClick={() => handleNavClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesList;
