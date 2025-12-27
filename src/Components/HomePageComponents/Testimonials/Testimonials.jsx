import React from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    role: "Patients",
    image: "/testimonials/patients.svg", 
    review:
      "Livesure has completely changed the way I manage my health. Booking appointments, accessing reports, and speaking with doctors has never been this easy and stress-free.",
    highlight: "",
  },
  {
    role: "Manager",
    image: "/testimonials/admin.svg", 
    review:
      "As a caregiver for my elderly parents, Livesure makes it easy to track their prescriptions, appointments, and health updates—all in one place. It gives me peace of mind.",
    highlight: "",
  },
  {
    role: "Doctors",
    image: "/testimonials/doctors.svg", 
    review:
      "Livesure bridges the gap between patients and healthcare providers. It allows me to give timely advice and better care, improving patient outcomes with every interaction.",
    highlight: "",
  },
];


const stats = [
  { percent: "92", text: "of Livesure users find it easier to manage their medical appointments*" },
  { percent: "89", text: "of users feel more connected to their doctors through Livesure*" },
  { percent: "85", text: "say Livesure has improved their overall healthcare experience*" },
];


const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
<h2 className="h2">Our Results</h2>
      <div className="b1">Join experts and doctors growing with LiveSure</div>

      <div className={styles.cards}>
        {testimonials.map((t, index) => (
          <div key={index} className={styles.card}>
            <span className={styles.role}>{t.role}</span>
            <img src={t.image} alt={t.role} />
            <p>{t.review}</p>
          </div>
        ))}
      </div>

      <div className={styles.stats}>
        {stats.map((s, index) => (
          <div key={index} className={styles.stat}>
            <strong>{s.percent} </strong><span className="alternateFont">%</span>
            <span className={styles.statText}>{s.text}</span>
          </div>
        ))}
      </div>

      <p className={styles.note}><span className="alternateFont">*</span>Based on internal study using survey data from test phase users</p>
    </section>
  );
};

export default Testimonials;
