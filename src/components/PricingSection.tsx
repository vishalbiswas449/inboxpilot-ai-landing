
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
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#f8fafc]">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-200 rounded-full filter blur-[120px] opacity-40 -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full filter blur-[100px] opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Simple Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Choose Your Perfect Plan</h2>
          <p className="text-lg text-gray-600">
            No hidden fees. No contracts. Cancel anytime.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <div className="glass-card bg-white/80 rounded-2xl p-8 transition-all duration-500 border border-gray-200 hover:shadow-lg hover:shadow-blue-200/30 hover:-translate-y-2 animate-scale-up">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-600">/month</span>
            </div>
            <hr className="my-6 border-gray-200" />
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                <span>Basic AI drafting</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                <span>50 emails/day</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
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
              className="w-full py-3 px-4 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
            >
              Start Free
            </button>
          </div>
          
          {/* Pro Plan */}
          <div className="glass-card bg-white/90 rounded-2xl p-8 relative transform scale-105 border-2 border-blue-200 shadow-lg shadow-blue-200/20 z-10 animate-scale-up" style={{ animationDelay: '150ms' }}>
            <div className="absolute top-0 right-0 blue-gradient text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
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
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                <span>Advanced AI drafting</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                <span>Unlimited emails</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                <span>Priority support</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                <span>Complete analytics</span>
              </li>
              <li className="flex items-center">
                <X className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">Custom integrations</span>
              </li>
            </ul>
            <button 
              onClick={() => handleSubscribe('Pro', 15)} 
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Get Pro
            </button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="glass-card bg-white/80 rounded-2xl p-8 transition-all duration-500 border border-gray-200 hover:shadow-lg hover:shadow-blue-200/30 hover:-translate-y-2 animate-scale-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <hr className="my-6 border-gray-200" />
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                <span>All Pro features</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                <span>Advanced security features</span>
              </li>
              <li className="flex items-center">
                <Check className="h-5 w-5 text-blue-500 mr-2" />
                <span>SLA guarantees</span>
              </li>
            </ul>
            <button 
              onClick={handleContact} 
              className="w-full py-3 px-4 border border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
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
