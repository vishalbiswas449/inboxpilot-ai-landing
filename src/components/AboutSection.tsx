
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
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About InboxPilot</h2>
            <p className="text-gray-700 mb-6 text-lg">
              At InboxPilot, we're passionate about simplifying email management. Our AI-powered assistant is built by a team of innovators dedicated to boosting your productivity.
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              Founded in 2023, we've combined the latest advancements in artificial intelligence with thoughtful UX design to create an email assistant that truly understands how people work.
            </p>
            <button className="btn-secondary inline-flex items-center group">
              Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          <div className="order-1 lg:order-2 animate-scale-up">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 relative">
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full blue-gradient flex items-center justify-center text-xl font-bold text-white">
                AI
              </div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Team working on InboxPilot" 
                className="rounded-lg w-full h-auto shadow-lg object-cover aspect-video" 
              />
              <div className="mt-6 space-y-4">
                <div className="bg-blue-600 rounded-lg p-4 text-sm text-white">
                  "Our mission is to give you back the time and mental space that gets consumed by email overload."
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></div>
                  <span className="text-xs text-gray-600">InboxPilot AI is always learning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
