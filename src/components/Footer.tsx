
import React, { useState } from 'react';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';
import { toast } from "../components/ui/sonner";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // This would be connected to Supabase in a real implementation
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Newsletter subscription:', email);
      
      // Simulation of successful submission
      toast.success("You've successfully joined our newsletter!"); 
      setEmail('');
      
    } catch (error) {
      console.error('Error submitting subscription:', error);
      toast.error("There was an error. Please try again.");
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
                <button onClick={() => scrollToSection('home')} className="text-gray-600 hover:text-blue-600 transition-colors min-h-11 flex items-center">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600 transition-colors min-h-11 flex items-center">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-blue-600 transition-colors min-h-11 flex items-center">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors min-h-11 flex items-center">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors min-h-11 flex items-center">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center min-h-11">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <a href="mailto:support@inboxpilot.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  support@inboxpilot.com
                </a>
              </li>
              <li className="min-h-11 flex items-center">
                <span className="text-gray-600">+1-800-PILOTAI</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="glass-card bg-white/80 p-4 rounded-lg border border-blue-100/50 hover:border-blue-200 hover:shadow-blue-100/30 transition-all duration-300">
              <p className="text-gray-600 mb-4">
                Subscribe for updates and get a free email productivity guide.
              </p>
              <form onSubmit={handleSubscribe}>
                <div className="flex flex-col space-y-2">
                  <div className="group relative">
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Your email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 scale-x-0 group-focus-within:scale-x-100 transition-transform origin-left"></div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="blue-gradient text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                        Joining...
                      </span>
                    ) : (
                      'Join the Pilot Crew!'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mb-4 md:mb-0">
              © 2025 InboxPilot. All rights reserved. Made with ❤️ in Pune, India.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
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
