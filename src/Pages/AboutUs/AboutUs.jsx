import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      {/* Hero Section - The WHY */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Why LiveSure Exists</h1>
          <p>
            Making life-saving healthcare accessible in under 60 seconds for
            everyone.
          </p>
        </div>
      </section>

      {/* Our Origin Story */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionContent}>
          <div className={styles.text}>
            <h2>How It All Started</h2>
            <p>
              LiveSure was born from a deeply personal experience—when a loved
              one suffered a medical emergency, delays in getting help led to
              devastating consequences.
            </p>
            <p>
              That raised a powerful question:{" "}
              <strong>
                “What if the app knew you were in trouble—even before you did?”
              </strong>
            </p>
            <p>
              With AI, sensors, and a connected healthcare ecosystem, we set out
              to build a system that detects emergencies, dispatches help, and
              supports you until recovery.
            </p>
          </div>
          <div className={styles.image}>
            <img src="/test/about1.webp" alt="Our Origin Story" />
          </div>
        </div>
      </section>

      {/* Meet the Founders */}
      <section className={styles.section}>
        <h2>Meet the Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="/test/profile.jpg" alt="Ankit Rao" />
            <h4>Ankit Rao</h4>
            <p>
              <strong>CEO & Product Lead</strong> <br />  Driving product vision with a focus on
              meaningful healthcare impact.
            </p>
          </div>
          <div className={styles.teamMember}>
            <img src="/test/profile.jpg" alt="Meena Das" />
            <h4>Meena Das</h4>
            <p>
              <strong>CTO, AI & Sensor Systems</strong> <br /> Architecting intelligent, real-time
              systems for critical healthcare needs.
            </p>
          </div>
          <div className={styles.teamMember}>
            <img src="/test/profile.jpg" alt="Dr. Ajay Kulkarni" />
            <h4>Dr. Ajay Kulkarni</h4>
            <p>
              <strong>CPO Clinical Advisor</strong> <br /> Bringing frontline medical expertise to ensure
              care is always patient-centered.
            </p>
          </div>
          <div className={styles.teamMember}>
  <img src="/test/profile.jpg" alt="Dr. Ajay Kulkarni" />
  <h4>Team Member</h4>
  <p>
    <strong>CMO, Team Member</strong> <br /> Overseeing clinical strategy, guiding medical teams, and
    ensuring the highest standards of patient care.
  </p>
</div>

        </div>

       
      </section>

      {/* Company Evolution */}
      {/* <section className={styles.sectionAlt}>
        <h2>Our Journey So Far</h2>
        <ul className={styles.timeline}>
          <li>
            <h4>2023</h4>
            <p>Founded LiveSure with the goal to bridge delays in emergency healthcare response.</p>
          </li>
          <li>
            <h4>2024</h4>
            <p>Developed real-time emergency detection with phone/wearable integration.</p>
          </li>
          <li>
            <h4>2025</h4>
            <p>Built a networked ecosystem of hospitals, ambulances, and health providers across cities.</p>
          </li>
        </ul>
      </section> */}

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className={styles.block}>
          <h3>Our Mission</h3>
          <p>
            To make life-saving healthcare accessible in under 60 seconds for
            everyone – using intelligent technology, human-centered design, and
            a networked emergency ecosystem.
          </p>
        </div>
        <div className={styles.block}>
          <h3>Our Vision</h3>
          <p>
            To become India’s most trusted AI-powered emergency and digital
            health platform, bridging the gap between symptom onset and timely
            care with zero digital barriers.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.section}>
        <h2>Why People Trust LiveSure</h2>
        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <img src="/test/trust.svg" alt="Trusted by Professionals" />
            <h4>Built for Urgency</h4>
            <p>
              Real-time emergency detection using phone and wearable sensors,
              with one-tap SOS right from the lock screen.
            </p>
          </div>
          <div className={styles.highlight}>
            <img src="/test/expert.svg" alt="AI-powered" />
            <h4>Powered by Intelligence</h4>
            <p>
              AI-driven ambulance dispatch, hospital booking, and health
              assistance guiding you through recovery.
            </p>
          </div>
          <div className={styles.highlight}>
            <img src="/test/support.svg" alt="Support" />
            <h4>Designed for Dignity</h4>
            <p>
              Multilingual, voice-enabled, offline-ready—built to make sure no
              one is left behind when care is needed most.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
