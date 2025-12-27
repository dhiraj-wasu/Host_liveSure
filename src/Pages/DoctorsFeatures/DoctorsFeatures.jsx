import React from "react";
import styles from "./DoctorsFeatures.module.css";
import FeaturesHero from "../../Components/FeatruresComponents/FeaturesHero/FeaturesHero";
import FeaturesSection from "../../Components/FeatruresComponents/FeaturesSection.jsx/FeaturesSection";
import Workflow from "../../Components/FeatruresComponents/Workflow/Workflow";

const doctorFeatures = [
  {
    title: "Patient Vitals on Arrival",
    summary: "Get critical vitals even before the patient arrives.",
    icon: "/test/fallback.jpg",
    points: [
      "Live stream of vital signs during ambulance transit",
      "Pre-arrival alerts for abnormal readings",
      "Helps prepare for immediate interventions",
    ],
  },
  {
    title: "Medical History + Medication Alerts",
    summary: "Instant access to patient history and current prescriptions.",
    icon: "/test/fallback.jpg",
    points: [
      "Summarized medical history provided to ER doctors",
      "Real-time medication interaction alerts",
      "Reduces medical errors and speeds up care decisions",
    ],
  },
  {
    title: "Integrated Tele-Consult Interface",
    summary: "Coordinate with specialists seamlessly, in real-time.",
    icon: "/test/fallback.jpg",
    points: [
      "One-click specialist consultation for emergencies",
      "Integrated audio/video support within doctor dashboard",
      "Immediate collaborative diagnosis and planning",
    ],
  },
  {
    title: "AI-Powered Follow-up Alerts",
    summary: "Ensure continuous patient care with intelligent notifications.",
    icon: "/test/fallback.jpg",
    points: [
      "AI identifies follow-up care needs post-discharge",
      "Automatic reminders to doctors and patients",
      "Supports chronic disease management and recovery",
    ],
  },
  {
    title: "Unified Health Record System",
    summary: "Access complete patient records instantly, all in one place.",
    icon: "/test/fallback.jpg",
    points: [
      "Consults, labs, prescriptions, insurance data unified",
      "Granular access control with patient consent",
      "Seamless sharing across hospitals and clinics",
    ],
  },
  {
    title: "Voice Interface & Regional Language Support",
    summary: "Serve all patients with inclusive communication features.",
    icon: "/test/fallback.jpg",
    points: [
      "AI-driven regional language translations in real time",
      "Voice commands for quick navigation and data entry",
      "Offline fallback in case of poor connectivity",
    ],
  },
];

const hospitalFeatures = [
  {
    title: "Real-time Patient Intake Dashboard",
    summary: "Visualize all incoming cases at a glance.",
    icon: "/test/fallback.jpg",
    points: [
      "Live tracking of ambulances en route",
      "Automatic triage tagging for prioritization",
      "Improves resource allocation and response speed",
    ],
  },
  {
    title: "Pre-booking for ER Beds",
    summary: "Reserve emergency beds before patient arrival.",
    icon: "/test/fallback.jpg",
    points: [
      "Ambulance triggers automatic ER bed reservations",
      "Prepares medical teams before patient arrival",
      "Minimizes delays in high-pressure situations",
    ],
  },
  {
    title: "EHR Synchronization",
    summary: "Integrate with existing hospital systems easily.",
    icon: "/test/fallback.jpg",
    points: [
      "Compatible with popular Electronic Health Record (EHR) systems",
      "Secure APIs for two-way data flow",
      "Avoids duplication of data entries",
    ],
  },
  {
    title: "Consent & Secure Record Access",
    summary: "Ensure ethical, consent-driven health data sharing.",
    icon: "/test/fallback.jpg",
    points: [
      "Patients provide granular consent for each provider",
      "Immutable audit trails for all record access",
      "Aligned with data privacy regulations (e.g., HIPAA, GDPR)",
    ],
  },
];

const steps = [
  "Emergency Case Detected",
  "Ambulance & Hospital Coordination Begins",
  "Vitals & History Shared with Medical Team",
  "Real-time Collaboration with Specialists",
  "Unified Records & Follow-up Alerts for Long-term Care",
];

const DoctorFeaturesPage = () => {
  return (
    <div className="pageWrapper">
      <FeaturesHero
        highlight="LiveSure"
        title="Helps Doctor and Hospitals Streamline Emergency Care"
        subtitle="Real-time patient data, coordinated care, AI assistance — everything you need in one unified platform."
        primaryBtnText="Get Started"
        primaryBtnAction={() => console.log("Get Started clicked")}
        secondaryBtnText="See Workflow"
        secondaryBtnAction={() => console.log("See Workflow clicked")}
        imageSrc="/test/test1.png"
        imageAlt="Doctor using dashboard"
      />

      <Workflow steps={steps} />

      <FeaturesSection
        features={doctorFeatures}
        heading="Features for Doctors"
      />
      <FeaturesSection
        features={hospitalFeatures}
        heading="Features for Hospitals"
      />
    </div>
  );
};

export default DoctorFeaturesPage;
