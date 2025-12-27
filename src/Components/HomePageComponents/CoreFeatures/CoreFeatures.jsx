import React, { useRef, useEffect } from "react";
import styles from "./CoreFeatures.module.css";
import {
  FaHeartbeat,
  FaPhoneAlt,
  FaAmbulance,
  FaHospitalSymbol,
  FaFileMedical,
  FaRobot,
  FaLanguage,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FeatureCard = ({ icon: Icon, title, description }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "bottom 5%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className={styles.featureCard}>
      <Icon className={styles.icon} />
      <h3 className="h3">{title}</h3>
      <p className="b2">{description}</p>
    </div>
  );
};

const CoreFeatures = () => {
  return (
    <section className={styles.coreSection}>
      <div className={styles.headingWrapper}>
        <h2 className="h2">Transforming Healthcare, Intelligently</h2>
        <p className="b1">
          Leveraging AI to empower patients and caregivers, streamline
          emergencies, and ensure continuous care for everyone.
        </p>
      </div>

      <div className={styles.featureGrid}>
        <FeatureCard
          icon={FaHeartbeat}
          title="Real-Time Emergency Detection"
          description="Instantly detect emergencies using phone and wearable sensors, triggering rapid responses."
        />

        <FeatureCard
          icon={FaPhoneAlt}
          title="One-Tap SOS with Bystander Help"
          description="Trigger SOS alerts directly from your lock screen; nearby bystanders are guided to assist."
        />

        <FeatureCard
          icon={FaAmbulance}
          title="Smart Ambulance & Hospital Booking"
          description="Automatically dispatch ambulances and reserve ER slots to minimize waiting during emergencies."
        />

        <FeatureCard
          icon={FaHospitalSymbol}
          title="Medical Data Relayed to ER"
          description="Your critical health data reaches doctors before you arrive, enabling better-prepared care."
        />

        <FeatureCard
          icon={FaFileMedical}
          title="Unified Health Records"
          description="Keep all medical records—consultations, lab tests, prescriptions, insurance—in one secure place."
        />

        <FeatureCard
          icon={FaRobot}
          title="AI Health Assistant"
          description="Daily personalized recovery plans, reminders, and guidance for long-term health and wellness."
        />

        <FeatureCard
          icon={FaLanguage}
          title="Local Languages & Offline Mode"
          description="Access healthcare guidance in regional languages with voice interaction, even without internet."
        />
      </div>
    </section>
  );
};

export default CoreFeatures;
