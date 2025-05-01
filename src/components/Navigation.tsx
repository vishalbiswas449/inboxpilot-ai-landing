
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Plane } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll events to update navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ['home', 'features', 'pricing', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scrolling to sections
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white bg-opacity-80 shadow-md backdrop-filter backdrop-blur-lg'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-army-green mr-2" />
            <span className="text-2xl font-bold text-army-green">InboxPilot</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            <button
              onClick={() => scrollToSection('home')}
              className={activeSection === 'home' ? 'menu-link-active' : 'menu-link'}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className={activeSection === 'features' ? 'menu-link-active' : 'menu-link'}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={activeSection === 'pricing' ? 'menu-link-active' : 'menu-link'}
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={activeSection === 'about' ? 'menu-link-active' : 'menu-link'}
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={activeSection === 'contact' ? 'menu-link-active' : 'menu-link'}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-army-green focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg animate-fade-in">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-gray-700 hover:text-army-green"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center space-y-6 text-xl">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-army-green"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-army-green"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-army-green"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-army-green"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-army-green"
            >
              Contact
            </button>
          </div>
          <div className="absolute bottom-10 flex items-center text-army-green">
            <Mail className="mr-2 h-5 w-5" />
            <span>support@inboxpilot.com</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
