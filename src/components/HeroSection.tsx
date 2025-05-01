
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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full filter blur-[100px] opacity-60 -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-200 rounded-full filter blur-[120px] opacity-50 -z-10 animate-pulse"></div>
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-blue-100 rounded-full filter blur-[80px] opacity-40 -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Animated floating shapes */}
      <div className="absolute top-20 right-[20%] w-8 h-8 rounded-full bg-blue-400/30 animate-bounce" style={{animationDuration: '6s'}}></div>
      <div className="absolute bottom-32 left-[15%] w-6 h-6 rounded-md bg-purple-400/40 animate-bounce" style={{animationDuration: '7s', animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/2 left-[10%] w-10 h-10 rounded-lg rotate-45 bg-blue-300/20 animate-bounce" style={{animationDuration: '8s'}}></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100/80 backdrop-blur-sm text-blue-600 text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
            AI-Powered Email Assistant
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Transform Your Inbox with <br />
            <span className="text-purple-600">Assistance</span>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Handle emails faster, smarter, and more effectively with our AI assistant.
            <br />Save hours every week with intelligent automation.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <button 
              onClick={handleGetStarted} 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-300/50 hover:-translate-y-1"
            >
              Start Free Trial
            </button>
            <button 
              onClick={handleWatchDemo} 
              className="flex items-center justify-center border border-gray-300 bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:border-gray-400 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <Play className="mr-2 h-4 w-4" /> Watch Demo
            </button>
          </div>
          
          {/* Email UI Preview (optional, for larger screens) */}
          <div className="hidden lg:block w-full max-w-4xl mt-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="glass-card rounded-xl p-6 transform hover:scale-[1.02] transition-all duration-500 backdrop-blur-xl bg-white/30 border border-white/50">
              <div className="flex gap-4 mt-4 p-4 glass-card rounded-lg bg-white/80">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold flex-shrink-0">
                  AI
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Inbox Analysis Complete</h4>
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
