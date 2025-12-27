import React from 'react'
import styles from "./FeaturesSection.module.css"

const FeaturesSection = ({features, heading}) => {
  return (
 <section className={styles.featuresSection}>
        <h2>{heading}</h2>
        <div className={styles.featuresList}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <img
                src={feature.icon}
                alt={feature.title}
                className={styles.featureImage}
              />
              <div className={styles.featureContent}>
                <h3>{feature.title}</h3>
                <p className={styles.featureSummary}>{feature.summary}</p>
                <ul className={styles.featurePoints}>
                  {feature.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>  )
}

export default FeaturesSection