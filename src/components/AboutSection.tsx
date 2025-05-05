
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-100/50 -z-10"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-200 rounded-full filter blur-[120px] opacity-30 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="glass-card bg-white/80 p-8 rounded-xl border border-blue-200/50 hover:shadow-lg hover:shadow-blue-200/20 transition-all duration-300">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                About InboxPilot
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">We're on a mission to simplify email</h2>
              <p className="text-gray-700 mb-6 text-lg">
                At InboxPilot, we're passionate about simplifying email management. Our AI-powered assistant is built by a team of innovators dedicated to boosting your productivity.
              </p>
              <p className="text-gray-700 mb-8 text-lg">
                We're on a mission to simplify email management with AI innovation, crafted by a passionate team to boost your productivity.
              </p>
              <button className="btn-secondary inline-flex items-center group">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-scale-up flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blue-gradient rounded-full blur-xl opacity-30 scale-110 animate-pulse"></div>
              <div className="bg-white rounded-xl p-3 shadow-lg border border-blue-100 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Team working on InboxPilot" 
                  className="rounded-lg w-full h-auto shadow-sm object-cover aspect-video" 
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-16 h-16 rounded-full blue-gradient flex items-center justify-center text-xl font-bold text-white">
                AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
