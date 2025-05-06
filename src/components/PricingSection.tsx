
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
  );
};

export default PricingSection;
