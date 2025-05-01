
import React, { useState } from 'react';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{success?: boolean; message?: string} | null>(null);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setSubmitResult(null);
    
    // This would be connected to Supabase in a real implementation
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Newsletter subscription:', email);
      
      // Simulation of successful submission
      setSubmitResult({ 
        success: true, 
        message: 'You\'ve successfully joined our newsletter!' 
      });
      setEmail('');
      
    } catch (error) {
      console.error('Error submitting subscription:', error);
      setSubmitResult({ 
        success: false, 
        message: 'There was an error. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12">
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center text-white font-bold mr-2">
                IP
              </div>
              <span className="text-2xl font-bold text-gray-900">InboxPilot</span>
            </div>
            <p className="text-gray-600">
              Where Emails Fly Smoothly! 🚀
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600 transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-blue-600 transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <a href="mailto:support@inboxpilot.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  support@inboxpilot.com
                </a>
              </li>
              <li>
                <span className="text-gray-600">+1-800-PILOTAI</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe for updates and get a free email productivity guide.
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email"
                  required
                  className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="blue-gradient text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  {isSubmitting ? 'Joining...' : 'Join the Pilot Crew!'}
                </button>
              </div>
            </form>
            {submitResult && (
              <p className={`mt-2 text-sm ${
                submitResult.success ? 'text-green-600' : 'text-red-600'
              }`}>
                {submitResult.message}
              </p>
            )}
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 InboxPilot. All rights reserved. Made with 😄
            </p>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
