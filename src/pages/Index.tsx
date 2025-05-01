
import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import SocialProofSection from "../components/SocialProofSection";
import TrustedBySection from "../components/TrustedBySection";
import PricingSection from "../components/PricingSection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "InboxPilot - AI-Powered Email Assistant";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Save time, stay organized, and craft perfect emails with InboxPilot's intelligent AI-powered email assistant.");
    }
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SocialProofSection />
      <TrustedBySection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
