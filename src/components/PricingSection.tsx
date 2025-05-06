
import React from 'react';
import { PricingSection as PricingSectionUI } from "./ui/pricing-section";

const PricingSection = () => {
  const handleSubscribe = (plan: string, price: number) => {
    // This would be connected to Stripe in a real implementation
    console.log(`Selected plan: ${plan} at $${price}/month`);
    alert(`In a real implementation, this would redirect to Stripe checkout for the ${plan} plan`);
  };

  const handleContact = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:35px_35px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Pricing Plans
          </div>
        </div>
        
        <PricingSectionUI 
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
    </div>
  );
};

export default PricingSection;
