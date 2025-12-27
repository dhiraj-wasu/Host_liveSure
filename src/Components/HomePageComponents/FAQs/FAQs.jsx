import React, { useState } from "react";
import styles from "./FAQs.module.css";

const faqData = [
  {
    question: "What exactly is LiveSure, and how can it help me?",
    answer:
      "LiveSure is a personal emergency and health management platform. It detects emergencies like accidents or falls, automatically alerts your family and emergency contacts, dispatches ambulances, and shares your medical data with hospitals — all to save crucial minutes during emergencies.",
  },
  {
    question: "How does LiveSure detect an emergency?",
    answer:
      "LiveSure uses your smartphone and connected wearables to monitor for events like sudden falls, abnormal movements, or manual SOS activation from your lock screen. Once detected, it starts the emergency response instantly.",
  },
  {
    question: "Can bystanders use LiveSure to help me if I’m unconscious?",
    answer:
      "Yes! Even if your phone is locked, anyone nearby can trigger an SOS through the lock screen interface. This immediately alerts emergency contacts, starts ambulance dispatch, and shares your medical details securely with responders.",
  },
  {
    question: "What kind of medical information does LiveSure store?",
    answer:
      "You can securely store your health records, medical history, allergies, prescriptions, insurance information, and emergency contacts. Everything is encrypted and only shared with authorized healthcare providers during emergencies.",
  },
  {
    question: "Is LiveSure available everywhere in India?",
    answer:
      "We are currently rolling out LiveSure across major cities and expanding rapidly. Even if ambulance dispatch isn’t yet available in your area, you can still store your health data, use SOS features, and benefit from AI health guidance.",
  },
  {
    question: "How does LiveSure help after the emergency is over?",
    answer:
      "After the immediate emergency, LiveSure continues supporting you with unified access to your medical records, AI-driven health advice, medication reminders, and easy access to teleconsultations with doctors.",
  },
  {
    question: "Is my health data safe with LiveSure?",
    answer:
      "Absolutely. LiveSure uses industry-standard encryption for all personal and health data. Only you and authorized healthcare professionals involved in your care can access your records, with your consent.",
  },
  {
    question: "How much does LiveSure cost to use?",
    answer:
      "LiveSure offers essential features free of charge, including SOS activation and basic health record storage. Premium plans with advanced features like AI health assistant, expanded storage, and hospital coordination will be available soon.",
  },
  {
    question: "Do I need a wearable device to use LiveSure?",
    answer:
      "No, you don’t need a wearable. While LiveSure works best with compatible smartwatches and fitness bands for advanced detection, the SOS and emergency features work using your smartphone alone.",
  },
  {
    question: "How do I get started with LiveSure?",
    answer:
      "Download the LiveSure app, complete your profile with key medical info, add emergency contacts, and you’re set! The system will guide you step-by-step to configure features like SOS access and health record storage.",
  },
];


const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>Do you have any questions?</h2>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
  <div key={index} className={styles.faqItem}>
    <button
      className={styles.faqQuestion}
      onClick={() => toggle(index)}
    >
      {item.question}
      <span className={styles.faqIcon}>
        {activeIndex === index ? "▲" : "▼"}
      </span>
    </button>
    <div
      className={`${styles.faqAnswer} ${
        activeIndex === index ? styles.open : ""
      }`}
    >
      <p>{item.answer}</p>
    </div>
    <hr className={styles.faqDivider} />
  </div>
))}

      </div>
    </div>
  );
};

export default FAQs;
