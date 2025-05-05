
import React, { useEffect, useRef } from 'react';
import { 
  Edit, 
  FolderCheck, 
  MessageSquare, 
  Calendar, 
  Layers,
  Shield 
} from 'lucide-react';

const features = [
  {
    title: 'Smart Drafting',
    description: 'AI-crafted emails tailored to your tone and style.',
    icon: Edit,
    delay: '100'
  },
  {
    title: 'Auto-Organization',
    description: 'Automatic email categorization and prioritization.',
    icon: FolderCheck,
    delay: '200'
  },
  {
    title: 'Quick Replies',
    description: 'One-click smart responses for common emails.',
    icon: MessageSquare,
    delay: '300'
  },
  {
    title: 'Calendar Sync',
    description: 'Seamless scheduling and meeting integration.',
    icon: Calendar,
    delay: '400'
  },
  {
    title: 'Multitasking Mastery',
    description: 'Manage multiple inboxes effortlessly.',
    icon: Layers,
    delay: '500'
  },
  {
    title: 'Security',
    description: 'Enterprise-grade encryption and privacy features.',
    icon: Shield,
    delay: '600'
  }
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const featureCards = document.querySelectorAll('.feature-card');
            featureCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="features" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50"
      ref={sectionRef}
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50 -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full filter blur-[120px] opacity-40 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Unique Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Sets InboxPilot Apart</h2>
          <p className="text-lg text-gray-600">
            Discover the unique features that make InboxPilot your ultimate email solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card glass-card bg-white/70 rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03] opacity-0"
              style={{ transitionDelay: `${parseInt(feature.delay)}ms` }}
            >
              <div className="h-12 w-12 rounded-xl blue-gradient flex items-center justify-center mb-4 shadow-lg">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
