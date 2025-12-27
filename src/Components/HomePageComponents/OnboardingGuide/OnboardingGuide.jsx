import React from "react";
import { motion } from "framer-motion";
import styles from "./OnboardingGuide.module.css";

const stepsData = [
  {
    userType: "Patients",
    subtitle: "Get the best services and manage your health easily.",
    steps: [
      {
        title: "Download App",
        description: "Available on iOS & Android.",
        image: "/onboarding/download.svg",
      },
      {
        title: "Sign Up",
        description: "With mobile, email, or Aadhaar.",
        image: "/onboarding/signup.svg",
      },
      {
        title: "Fill Health Profile",
        description: "Auto-filled if insurance linked.",
        image: "/onboarding/profile.svg",
      },
      {
        title: "Test Emergency Trigger",
        description: "Optional but recommended.",
        image: "/onboarding/emergency.svg",
      },
      {
        title: "Access Features Instantly",
        description: "Book doctors, track health, more.",
        image: "/onboarding/features.svg",
      },
    ],
  },
  {
    userType: "Ambulance",
    subtitle: "Start receiving emergency SOS dispatches via LiveSure.",
    steps: [
      {
        title: "Register Fleet & Drivers",
        description: "Verify IDs & licenses.",
        image: "/onboarding/fleet.svg",
      },
      {
        title: "Enable Geo-location",
        description: "Real-time location for dispatches.",
        image: "/onboarding/location.svg",
      },
      {
        title: "Get SOS Alerts",
        description: "Receive alerts on the LiveSure dashboard.",
        image: "/onboarding/alert.svg",
      },
    ],
  },
  {
    userType: "Hospitals",
    subtitle: "Streamline emergency management with LiveSure.",
    steps: [
      {
        title: "Partner Registration",
        description: "Quick online registration.",
        image: "/onboarding/partner.svg",
      },
      {
        title: "API Integration",
        description: "Live bed status & EHR sync.",
        image: "/onboarding/api.svg",
      },
      {
        title: "Team Onboarding",
        description: "Emergency & intake team setup.",
        image: "/onboarding/team.svg",
      },
      {
        title: "Start Receiving Alerts",
        description: "Be prepared for emergency intakes.",
        image: "/onboarding/emergency-alert.svg",
      },
    ],
  },
  {
    userType: "Doctors",
    subtitle: "Set up your profile and start helping patients today.",
    steps: [
      {
        title: "Verify Credentials",
        description: "Medical license verification.",
        image: "/onboarding/verify.svg",
      },
      {
        title: "Complete Profile",
        description: "Add bio, specializations, experience.",
        image: "/onboarding/profile.svg",
      },
      {
        title: "Link Hospital Affiliations",
        description: "Optional but recommended.",
        image: "/onboarding/hospital.svg",
      },
      {
        title: "Start Consulting",
        description: "Receive patient consultations or SOS.",
        image: "/onboarding/consult.svg",
      },
    ],
  },
];

const OnboardingGuide = () => {
  return (
    <div className={styles.onboardingWrapper}>
      <h2 className="h2">Onboarding Guide</h2>
      <p className="b1">Easily onboard based on your role.</p>

      <div className={styles.guidesGrid}>
        {stepsData.map((guide, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className={styles.userType}>{guide.userType}</h3>
            <p className={styles.subtitle}>{guide.subtitle}</p>
            <div className={styles.stepsList}>
              {guide.steps.map((step, idx) => (
                <div key={idx} className={styles.stepItem}>
                  {/* <div className={styles.stepNumber}>{idx + 1}</div>  */}
                  <div className={styles.stepText}>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.learnMore}>Learn More</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OnboardingGuide;
