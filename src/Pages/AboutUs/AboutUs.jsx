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
            LiveSure, a product of Agenx Tech, is India’s first connected healthcare infrastructure — ensuring life-saving care reaches you faster and smarter, every time
          </p>
        </div>
      </section>

      {/* Our Origin Story */}
      <section className={styles.sectionAlt}>
        <div className={styles.sectionContent}>
          <div className={styles.text}>
            <h2>How It All Started</h2>
            <p>
              Imagine this — it’s 2:00 a.m. A loved one suddenly collapses at home with
              severe chest pain. You call every number — ambulance, hospital, helpline —
              but help doesn’t arrive fast enough. The ambulance reaches after 25 minutes.
              By the time they reach the hospital, the doctor says, 
              <strong>“If he had arrived just five minutes earlier, we could’ve saved him.”</strong>
            </p>
            <p>
              The tragedy? Available ICU beds and ambulances exist, but families don’t know
              in real-time. Every day in India, over 1,200 people die because care comes too late.
              Not due to lack of skill, but because the system lacks connection.
            </p>
            <p>
              That’s why Agenx Tech created <strong>LiveSure</strong> — the first AI-driven,
              fully connected healthcare ecosystem in India. It unites patients, hospitals, doctors,
              and ambulances into one synchronized network to ensure real-time care for every emergency.
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
            <img src="/test/profile.jpg" alt="Aditi Maindalkar" />
            <h4>Aditi Maindalkar</h4>
            <p>
              <strong>CEO</strong> <br /> Steering Agenx Tech's overall strategy, operations, and partnerships with clarity and empathy.
            </p>
          </div>
          <div className={styles.teamMember}>
            <img src="/test/profile.jpg" alt="Sharvari Wanjari" />
            <h4>Sharvari Wanjari</h4>
            <p>
              <strong>CTO</strong> <br /> Leading AI systems, backend engineering, and ensuring LiveSure’s network is seamless and intelligent.
            </p>
          </div>
          <div className={styles.teamMember}>
            <img src="/test/profile.jpg" alt="Dhiraj Wasu" />
            <h4>Dhiraj Wasu</h4>
            <p>
              <strong>Product Strategy Lead</strong> <br /> Driving LiveSure’s product vision, system architecture, and real-world healthcare impact.
            </p>
          </div>
          <div className={styles.teamMember}>
            <img src="/test/profile.jpg" alt="Prasad Anumula" />
            <h4>Prasad Anumula</h4>
            <p>
              <strong>CMO</strong> <br /> Building trust, partnerships, and awareness while leading LiveSure marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className={styles.block}>
          <h3>Our Mission</h3>
          <p>
            To make life-saving healthcare accessible in under 60 seconds for everyone — 
            using AI, connected devices, and India’s first unified emergency healthcare ecosystem.
          </p>
        </div>
        <div className={styles.block}>
          <h3>Our Vision</h3>
          <p>
            To become India’s most trusted AI-powered healthcare platform, 
            bridging the gap between symptom onset and timely care with zero digital barriers — 
            from urban hospitals to semi-rural clinics.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.section}>
        <h2>Why People Trust LiveSure</h2>
        <div className={styles.highlights}>
          <div className={styles.highlight}>
            <img src="/test/trust.svg" alt="Built for Urgency" />
            <h4>Built for Urgency</h4>
            <p>
              Detect emergencies instantly through wearables or app SOS. One click triggers AI-assisted
              triage, ambulance dispatch, hospital routing, and doctor notification.
            </p>
          </div>
          <div className={styles.highlight}>
            <img src="/test/expert.svg" alt="AI-powered" />
            <h4>Powered by Intelligence</h4>
            <p>
              AI coordinates every step in real-time — from detection to hospital prep — saving precious minutes.
            </p>
          </div>
          <div className={styles.highlight}>
            <img src="/test/support.svg" alt="Connected Ecosystem" />
            <h4>India’s First Connected Health Infrastructure</h4>
            <p>
              Patients, doctors, hospitals, and ambulances are all connected on one unified platform, 
              creating seamless, predictive, and personalized emergency care.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
