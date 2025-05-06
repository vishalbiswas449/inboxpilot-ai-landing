
import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import EmailPreviewSection from "../components/EmailPreviewSection";
import SocialProofSection from "../components/SocialProofSection";
import TrustedBySection from "../components/TrustedBySection";
import PricingSection from "../components/PricingSection";
import AboutSection from "../components/AboutSection";
import ContactUsSection from "../components/ContactUsSection";
import Footer from "../components/Footer";
import { ArrowUp } from "lucide-react";
import { FaqSection } from "../components/ui/faq-section";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const FAQS = [
    {
      question: "How does InboxPilot's AI email enhancement work?",
      answer: "Our AI analyzes your email content, tone, and purpose to generate improved versions that are more professional, concise, or persuasive. It preserves your original meaning while enhancing clarity, structure, and impact.",
    },
    {
      question: "Is my email data secure with InboxPilot?",
      answer: "Absolutely. We use enterprise-grade encryption and strict privacy protocols to ensure your email data remains completely private and secure. We never store your email content after processing, and we don't use your data to train our AI models.",
    },
    {
      question: "Can I customize the AI's writing style?",
      answer: "Yes! You can choose from multiple enhancement styles including Professional, Concise, Friendly, Persuasive, Formal, and Casual. Each premium plan also allows you to create custom style profiles that match your unique voice.",
    },
    {
      question: "Which email providers does InboxPilot work with?",
      answer: "InboxPilot seamlessly integrates with all major email providers including Gmail, Outlook, Apple Mail, Yahoo, and most professional email services. Our browser extension and mobile apps make it easy to enhance emails directly in your preferred platform.",
    },
    {
      question: "What's the difference between free and paid plans?",
      answer: "Our free plan offers basic email enhancement with limited templates and styles. Paid plans unlock unlimited enhancements, advanced customization options, premium templates, priority support, and additional features like scheduling and analytics.",
    },
  ];

  useEffect(() => {
    // Update document title for SEO
    document.title = "InboxPilot - AI-Powered Email Assistant";
    
    // Add meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Save time, stay organized, and craft perfect emails with InboxPilot's intelligent AI-powered email assistant.");
    }
    
    // Handle scroll for showing scroll-to-top button
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative overflow-x-hidden bg-white">
      <Navigation />
      
      {/* Animated cursor light effect */}
      <div className="cursor-effect" />
      
      {/* Main content */}
      <main>
        <HeroSection />
        
        {/* Email Preview Section - Moved just below Hero */}
        <EmailPreviewSection />
        
        {/* Trusted By Section */}
        <TrustedBySection />

        <div className="relative">
          {/* Decorative dividers */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-16 w-full">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-blue-50"></path>
            </svg>
          </div>
          
          <FeaturesSection />
          <SocialProofSection />
          
          {/* Custom Pricing Section */}
          <div id="pricing" className="py-24 relative overflow-hidden bg-[#f8fafc]">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full filter blur-[120px] opacity-40 -z-10"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full filter blur-[100px] opacity-30 -z-10"></div>
            
            <PricingSection 
              title="Simple Pricing" 
              subtitle="Choose the best plan for your needs"
              frequencies={["Monthly", "Yearly"]}
              tiers={[
                {
                  id: "free",
                  name: "Free",
                  price: {
                    monthly: "$0",
                    yearly: "$0",
                  },
                  description: "For personal use",
                  features: [
                    "Basic AI drafting",
                    "50 emails/day",
                    "Standard support",
                    "5 templates",
                    "Email organization"
                  ],
                  cta: "Start Free"
                },
                {
                  id: "pro",
                  name: "Pro",
                  price: {
                    monthly: 15,
                    yearly: 150,
                  },
                  description: "For professionals",
                  features: [
                    "Advanced AI drafting",
                    "Unlimited emails",
                    "Priority support",
                    "Complete analytics",
                    "All templates"
                  ],
                  cta: "Get Pro",
                  popular: true
                },
                {
                  id: "team",
                  name: "Team",
                  price: {
                    monthly: 49,
                    yearly: 490,
                  },
                  description: "For small teams",
                  features: [
                    "All Pro features",
                    "Team collaboration",
                    "Shared templates",
                    "Admin controls",
                    "Advanced security"
                  ],
                  cta: "Choose Team"
                },
                {
                  id: "enterprise",
                  name: "Enterprise",
                  price: {
                    monthly: "Custom",
                    yearly: "Custom",
                  },
                  description: "For organizations",
                  features: [
                    "All Team features",
                    "Dedicated account manager",
                    "Custom integrations",
                    "Advanced security features",
                    "SLA guarantees"
                  ],
                  cta: "Contact Us",
                  highlighted: true
                }
              ]}
            />
          </div>
          
          {/* FAQ Section */}
          <FaqSection 
            title="Frequently Asked Questions"
            description="Everything you need to know about InboxPilot"
            items={FAQS}
            contactInfo={{
              title: "Still have questions?",
              description: "Our support team is here to help you",
              buttonText: "Contact Support",
              onContact: () => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          />
          
          <AboutSection />
          
          {/* Contact Us Section */}
          <ContactUsSection />
        </div>
      </main>
      
      <Footer />
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-blue-600 text-white shadow-lg z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
      
      {/* Add a loader animation that appears during page transitions */}
      <div className="page-transition-indicator"></div>
    </div>
  );
};

export default Index;
