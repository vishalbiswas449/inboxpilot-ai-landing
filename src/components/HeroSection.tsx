
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import RotatingText from './RotatingText';
import VideoModal from './VideoModal';
import { AvatarGroup } from './ui/avatar-group';
import { Particles } from './ui/particles';
import TrialFormModal from './TrialFormModal';

const HeroSection = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showTrialModal, setShowTrialModal] = useState(false);
  
  const handleGetStarted = () => {
    setShowTrialModal(true);
  };

  const handleWatchDemo = () => {
    setShowVideoModal(true);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24 pb-16">
      {/* Particles background effect */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#2563eb"
        refresh
      />
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Avatar Group Badge */}
          <AvatarGroup />
          
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Revolutionize Your Email with InboxPilot's{' '}
            <RotatingText texts={["Assistant", "AI Intelligence", "Smart Email"]} />
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
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-300/50 hover:-translate-y-1"
            >
              Start Free Trial
            </button>
            <button 
              onClick={handleWatchDemo} 
              className="flex items-center justify-center border border-gray-300 bg-white text-gray-800 px-6 py-3 rounded-full font-medium hover:border-blue-400 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <Play className="mr-2 h-4 w-4" /> Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
        videoUrl="https://www.youtube.com/watch?v=79DijItQXMM"
      />
      
      {/* Trial Modal */}
      <TrialFormModal 
        isOpen={showTrialModal}
        onClose={() => setShowTrialModal(false)}
      />
    </section>
  );
};

export default HeroSection;
