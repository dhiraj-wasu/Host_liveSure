import React from "react";
import styles from "./PatientFeaturesPage.module.css";
import FeaturesHero from "../../Components/FeatruresComponents/FeaturesHero/FeaturesHero";
import FeaturesSection from "../../Components/FeatruresComponents/FeaturesSection.jsx/FeaturesSection";
import Workflow from "../../Components/FeatruresComponents/Workflow/Workflow";

const features = [
  {
    title: "Real-time Emergency Detection",
    summary: "Instantly detect emergencies using your devices.",
    icon: "/test/fallback.jpg",
    points: [
      "Continuous monitoring via phone and wearables",
      "Automatic detection of falls, crashes, or distress",
      "Instant alerts sent to emergency contacts",
    ],
  },
  {
    title: "One-tap SOS (Lock Screen Access)",
    summary: "Get help fast with a single tap from your lock screen.",
    icon: "/test/fallback.jpg",
    points: [
      "Accessible even when the phone is locked",
      "Bystanders can trigger SOS without unlocking",
      "Location and medical info shared instantly with responders",
    ],
  },
  {
    title: "Smart Ambulance Dispatch",
    summary: "Automatically call the nearest ambulance when needed.",
    icon: "/test/fallback.jpg",
    points: [
      "Connects with nearest available ambulances",
      "Real-time ETA and tracking updates",
      "Reduces critical response time significantly",
    ],
  },
  {
    title: "Hospital Coordination",
    summary: "Prepare hospitals before you arrive for faster care.",
    icon: "/test/fallback.jpg",
    points: [
      "Pre-shares your medical history with receiving hospitals",
      "Streamlines admission and triage processes",
      "Saves crucial minutes during life-threatening emergencies",
    ],
  },
  {
    title: "Unified Health Record System",
    summary: "All your health information organized in one secure place.",
    icon: "/test/fallback.jpg",
    points: [
      "Stores consults, lab reports, prescriptions, and insurance",
      "Easily accessible by you and authorized doctors",
      "End-to-end encrypted for privacy and security",
    ],
  },
  {
    title: "AI Health Assistant",
    summary: "Personalized health guidance powered by AI.",
    icon: "/test/fallback.jpg",
    points: [
      "Daily recovery recommendations tailored to your condition",
      "Automated medication reminders",
      "Provides preventive health insights and advice",
    ],
  },
];

const steps = [
  "Emergency Detected Automatically or via SOS",
  "Ambulance Dispatched Instantly",
  "Medical Info Shared with ER Before Arrival",
  "Ongoing Care with Unified Health Records & AI Support",
];

const PatientFeaturesPage = () => {
  return (
    <div className="pageWrapper">
      {/* Hero Section */}

      <FeaturesHero
        highlight="LiveSure"
        title="Empowers Patients & Families"
        subtitle="From emergency alerts to lifelong health management — all in one place."
        primaryBtnText="Get Started"
        primaryBtnAction={() => console.log("Get Started clicked")}
        secondaryBtnText="See Workflow"
        secondaryBtnAction={() => console.log("See Workflow clicked")}
        imageSrc="/test/test1.png"
        imageAlt="Patient Assistance Illustration"
      />

      <Workflow steps={steps}></Workflow>
      
     <FeaturesSection features={features} heading="Key Features for Patients & Families" ></FeaturesSection>
    </div>
  );
};

export default PatientFeaturesPage;
