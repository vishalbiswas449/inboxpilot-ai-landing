
import React from 'react';
import { Play } from 'lucide-react';

const HeroSection = () => {
  const handleGetStarted = () => {
    // This would be connected to Stripe in a real implementation
    console.log('Get Started clicked - would redirect to Stripe checkout');
    alert('In a real implementation, this would redirect to Stripe checkout');
  };

  const handleWatchDemo = () => {
    console.log('Watch Demo clicked');
    alert('In a real implementation, this would open a demo video');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden bg-[#f8fafc]">
      {/* Background elements */}
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-200 rounded-full filter blur-[120px] opacity-60 -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-300 rounded-full filter blur-[150px] opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Smart Email Management
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Revolutionize Your <span className="gradient-text">Email Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Save time, stay organized, and craft perfect emails with our intelligent AI-powered email assistant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={handleGetStarted} className="btn-primary">
                Get Started Free
              </button>
              <button onClick={handleWatchDemo} className="btn-secondary flex items-center justify-center">
                <Play className="mr-2 h-4 w-4" /> Watch Demo
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-400 rounded-full filter blur-[80px] opacity-30"></div>
            <div className="glass-card rounded-xl p-6 transform hover:scale-105 transition-all duration-500 animate-scale-up backdrop-blur-xl bg-white/30 border border-white/50">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
                alt="Email productivity" 
                className="rounded-lg w-full h-auto object-cover shadow-lg" 
              />
              <div className="mt-4 p-4 glass-card rounded-lg bg-white/50">
                <div className="flex items-start mb-4">
                  <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3 flex-shrink-0">
                    AI
                  </div>
                  <p className="text-sm text-gray-700">
                    I've analyzed your emails and drafted responses for your top 5 priority messages. Would you like to review them?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
