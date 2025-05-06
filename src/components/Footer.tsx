
import React, { useState } from 'react';
import { Mail, Linkedin, Twitter, Instagram, Github, ArrowRight, MapPin, Phone } from 'lucide-react';
import { toast } from "../components/ui/sonner";
import { Button } from "./ui/button";

// InboxPilot Logo component
const InboxPilotLogo = () => (
  <div className="flex items-center gap-2">
    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 text-white">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 13V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 11L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 11L21 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
    <span className="text-xl font-bold">InboxPilot</span>
  </div>
);

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
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Newsletter subscription:', email);
      
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
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-5">
            <InboxPilotLogo />
            <p className="text-gray-600 mt-3">
              Transforming email workflows with AI. Save time and communicate effectively.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/vishalbiswasuiux" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} 
                  className="text-gray-500 hover:text-blue-600 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('features')} 
                  className="text-gray-500 hover:text-blue-600 transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} 
                  className="text-gray-500 hover:text-blue-600 transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} 
                  className="text-gray-500 hover:text-blue-600 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} 
                  className="text-gray-500 hover:text-blue-600 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-500">Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-gray-500">+1-800-PILOTAI</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <a href="mailto:support@inboxpilot.com" 
                  className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                  support@inboxpilot.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Subscribe</h3>
            <p className="text-sm text-gray-500 mb-4">
              Get the latest updates and news from InboxPilot delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                    Subscribing...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 InboxPilot. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
