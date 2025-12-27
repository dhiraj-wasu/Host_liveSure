import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import PopupForm from "./Components/PopupForm/PopupForm"; // Import your PopupForm component
import ChatBot from "./Components/ChatBot/ChatBot";
import PatientFeaturesPage from "./Pages/PatientFeaturesPage/PatientFeaturesPage";
import DoctorsFeatures from "./Pages/DoctorsFeatures/DoctorsFeatures";
import AmbulanceFeatures from "./Pages/AmbulanceFeatures/AmbulanceFeatures";
import InsuranceFeatures from "./Pages/InsuranceFeatures/InsuranceFeatures";
import GovNGOFeatures from "./Pages/GovNGOFeatures/GovNGOFeatures";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // 25 seconds (25000 ms)

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ChatBot></ChatBot>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features/patient" element={<PatientFeaturesPage />} />
          <Route path="/features/doctor" element={<DoctorsFeatures />} />
          <Route path="/features/ambulance-providers" element={<AmbulanceFeatures />} />
          <Route path="/features/insurance-providers" element={<InsuranceFeatures />} />
          <Route path="/features/government-ngo" element={<GovNGOFeatures />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default App;
