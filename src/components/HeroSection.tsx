
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
    <section id="home" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-light-green/10 to-army-green/20 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-light-green rounded-full filter blur-[100px] opacity-20 animate-spin-slow"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-army-green rounded-full filter blur-[100px] opacity-10 animate-spin-slow"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Revolutionize Your Email with <span className="gradient-text">InboxPilot's AI Assistant</span>
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
          
          <div className="glass-card rounded-xl p-6 transform hover:scale-105 transition-all duration-500 animate-scale-up">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
              alt="Email productivity" 
              className="rounded-lg w-full h-auto object-cover shadow-lg" 
            />
            <div className="mt-4 p-4 glass-card rounded-lg">
              <div className="flex items-start mb-4">
                <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
              </div>
              <p className="text-sm text-gray-700">
                <span className="text-army-green font-medium">InboxPilot:</span> I've analyzed your emails and drafted responses for your top 5 priority messages. Would you like to review them?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
