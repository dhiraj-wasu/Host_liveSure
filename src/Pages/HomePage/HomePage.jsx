import React from 'react';
import styles from "./HomePage.module.css"
import Hero from '../../Components/HomePageComponents/Hero/Hero';
import CoreFeatures from '../../Components/HomePageComponents/CoreFeatures/CoreFeatures';
import FeaturesList from '../../Components/HomePageComponents/FeaturesList/FeaturesList';
import OnboardingGuide from '../../Components/HomePageComponents/OnboardingGuide/OnboardingGuide';
import Testimonials from '../../Components/HomePageComponents/Testimonials/Testimonials';
import FAQs from '../../Components/HomePageComponents/FAQs/FAQs';
import CallToAction from '../../Components/HomePageComponents/CallToAction/CallToAction';

const HomePage = () => {
  return (
    <div>
        <Hero></Hero>
        <CoreFeatures></CoreFeatures>
        <FeaturesList></FeaturesList>
        <OnboardingGuide></OnboardingGuide>
        <Testimonials></Testimonials>
        <FAQs></FAQs>
        <CallToAction></CallToAction>
        
    </div>
  )
}

export default HomePage