
import React from 'react';
import { Check, X } from 'lucide-react';

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
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-light-green/5 to-army-green/10 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="glass-card rounded-xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-scale-up">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <hr className="my-6 border-gray-200" />
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Basic AI drafting</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>50 emails/day</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Standard support</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">Advanced analytics</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">Priority support</span>
              </li>
            </ul>
            <button 
              onClick={() => handleSubscribe('Free', 0)} 
              className="w-full py-3 px-4 border border-army-green text-army-green rounded-full font-medium hover:bg-army-green hover:text-white transition-colors duration-300"
            >
              Start Free
            </button>
          </div>
          
          {/* Pro Plan */}
          <div className="glass-card rounded-xl p-8 relative transform scale-105 shadow-lg border-2 border-army-green/30 z-10 animate-scale-up" style={{ animationDelay: '150ms' }}>
            <div className="absolute top-0 right-0 bg-gradient-to-r from-army-green to-light-green text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
              POPULAR
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$15</span>
              <span className="text-gray-600">/month</span>
            </div>
            <hr className="my-6 border-gray-200" />
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Advanced AI drafting</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Unlimited emails</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Complete analytics</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">Custom integrations</span>
              </li>
            </ul>
            <button 
              onClick={() => handleSubscribe('Pro', 15)} 
              className="w-full py-3 px-4 bg-gradient-to-r from-army-green to-light-green text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Get Pro
            </button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="glass-card rounded-xl p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-scale-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <hr className="my-6 border-gray-200" />
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>All Pro features</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>Advanced security features</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>SLA guarantees</span>
              </li>
            </ul>
            <button 
              onClick={handleContact} 
              className="w-full py-3 px-4 border border-army-green text-army-green rounded-full font-medium hover:bg-army-green hover:text-white transition-colors duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
