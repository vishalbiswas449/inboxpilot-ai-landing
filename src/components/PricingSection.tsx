
import React, { useState } from 'react';
import { PricingSection as PricingSectionUI } from "./ui/pricing-section";
import { Check } from 'lucide-react';
import TrialFormModal from './TrialFormModal';

const PricingSection = () => {
  const [showTrialModal, setShowTrialModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  
  const handleSubscribe = (plan: string, price: number) => {
    setSelectedPlan(plan);
    setShowTrialModal(true);
  };

  const handleContact = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-20 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:35px_35px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-4">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-3">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Pricing Plans
          </div>
        </div>
        
        <PricingSectionUI 
          title="Pricing" 
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
                "Basic AI drafting (5 emails/day)",
                "Standard email templates (5)",
                "Email organization",
                "Community support",
                "Mobile app access",
                "Basic analytics dashboard"
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
                "Unlimited AI drafting",
                "Advanced writing styles",
                "50+ premium templates",
                "Priority support (24 hours)",
                "Complete analytics dashboard",
                "Email scheduling",
                "Custom signatures",
                "Calendar integration"
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
                "Shared templates library",
                "Admin controls & permissions",
                "User activity reporting",
                "Team inbox management",
                "Priority support (4 hours)",
                "API access",
                "Custom integrations"
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
                "Custom AI training",
                "Dedicated success manager",
                "SLA guarantees",
                "Advanced security features",
                "Custom branding",
                "On-premise deployment option",
                "24/7 premium support",
                "Compliance documentation"
              ],
              cta: "Contact Us",
              highlighted: true
            }
          ]}
        />

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center justify-center gap-4 p-6 rounded-lg bg-white shadow-lg border border-blue-100">
            <div className="flex items-center justify-center bg-blue-100 rounded-full p-3 md:mr-2">
              <Check className="h-6 w-6 text-blue-600"/>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-1">100% Satisfaction Guarantee</h3>
              <p className="text-gray-600">Try InboxPilot Pro risk-free for 14 days with our money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trial Modal */}
      <TrialFormModal 
        isOpen={showTrialModal}
        onClose={() => setShowTrialModal(false)}
      />
    </div>
  );
};

export default PricingSection;
