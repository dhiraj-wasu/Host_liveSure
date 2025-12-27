import React from "react";
import FeaturesHero from "../../Components/FeatruresComponents/FeaturesHero/FeaturesHero";
import FeaturesSection from "../../Components/FeatruresComponents/FeaturesSection.jsx/FeaturesSection";
import Workflow from "../../Components/FeatruresComponents/Workflow/Workflow";

const ambulanceFeaturesList = [
  {
    title: "Geo-tracking & Dynamic Dispatch",
    summary: "Real-time location tracking ensures the nearest ambulance is sent.",
    icon: "/icons/gps.svg",
    points: [
      "Automated dispatch based on proximity and availability",
      "Turn-by-turn optimized navigation for faster arrival",
      "Adaptive routing in case of traffic or roadblocks",
    ],
  },
  {
    title: "Live Patient Data Feed",
    summary: "Transmit real-time vitals to hospitals while en route.",
    icon: "/icons/vitals-stream.svg",
    points: [
      "Continuous vital monitoring with connected medical equipment",
      "Alerts for abnormal readings during transit",
      "Allows ER teams to prepare targeted interventions in advance",
    ],
  },
  {
    title: "Integrated Hospital Navigation",
    summary: "Ambulance team gets seamless navigation to the assigned hospital.",
    icon: "/icons/navigation.svg",
    points: [
      "Automatic hospital assignment based on ER capacity",
      "Dedicated ER entrance and bed pre-booking guidance",
      "Saves time during high-pressure emergencies",
    ],
  },
  {
    title: "Direct Communication with Hospitals",
    summary: "Stay in constant touch with receiving hospitals.",
    icon: "/icons/communication.svg",
    points: [
      "Real-time chat and call options with ER coordinators",
      "Share additional observations or patient updates instantly",
      "Reduces miscommunication and ensures preparedness",
    ],
  },
  {
    title: "Unified Health Record Integration",
    summary: "Access critical patient information securely.",
    icon: "/icons/health-record.svg",
    points: [
      "Patient history, allergies, medications at your fingertips",
      "Encrypted access with strict privacy controls",
      "Improves emergency response accuracy and efficiency",
    ],
  },
  {
    title: "Multi-language Voice Interface",
    summary: "Serve all patients regardless of language barriers.",
    icon: "/icons/language.svg",
    points: [
      "Voice-guided workflows for ambulance teams",
      "Regional language support for better patient communication",
      "Offline fallback for areas with poor network coverage",
    ],
  },
];

const steps = [
  "Real-time Emergency Detected (Phone/Wearable/SOS)",
  "Nearest Ambulance Dispatched with GPS Navigation",
  "Live Patient Data Streamed to Receiving Hospital",
  "Pre-booked ER Beds & Medical History Shared in Advance",
  "Seamless Admission, Unified Records, & AI Support for Recovery",
];

const AmbulanceFeatures = () => {
  return (
    <div className="pageWrapper">
      <FeaturesHero
        highlight="LiveSure"
        title="Ambulance services - Faster Response, Smarter Care on Every Trip"
        subtitle="Real-time dispatch, live patient data, direct hospital communication — empowering ambulance teams to save lives more effectively."
        primaryBtnText="Get Started"
        primaryBtnAction={() => console.log("Ambulance Get Started clicked")}
        secondaryBtnText="See Workflow"
        secondaryBtnAction={() => console.log("Ambulance See Workflow clicked")}
        imageSrc="/test/test1.png"
        imageAlt="Ambulance with medical team illustration"
      />

      <Workflow steps={steps} />

      <FeaturesSection
        features={ambulanceFeaturesList}
        heading="Features for Ambulance Teams"
      />
    </div>
  );
};

export default AmbulanceFeatures;
