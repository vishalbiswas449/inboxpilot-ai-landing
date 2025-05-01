
import React from 'react';
import { 
  Edit, 
  FolderCheck, 
  MessageSquare, 
  Calendar, 
  BarChart, 
  Shield 
} from 'lucide-react';

const features = [
  {
    title: 'Smart Drafting',
    description: 'AI-powered email drafting that learns your style and voice to create perfect responses.',
    icon: Edit,
    delay: '0'
  },
  {
    title: 'Auto-Organization',
    description: 'Automatically categorize and prioritize your inbox so you focus on what matters most.',
    icon: FolderCheck,
    delay: '150'
  },
  {
    title: 'Quick Replies',
    description: 'One-click responses for common emails, saving you hours every week.',
    icon: MessageSquare,
    delay: '300'
  },
  {
    title: 'Calendar Sync',
    description: 'Seamlessly integrate with your calendar to schedule meetings and follow-ups.',
    icon: Calendar,
    delay: '450'
  },
  {
    title: 'Analytics',
    description: 'Track response times, email volume, and productivity with detailed insights.',
    icon: BarChart,
    delay: '600'
  },
  {
    title: 'Security',
    description: 'Enterprise-grade encryption and privacy features to keep your communications safe.',
    icon: Shield,
    delay: '750'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50 -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200 rounded-full filter blur-[120px] opacity-40 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose InboxPilot?</h2>
          <p className="text-lg text-gray-600">
            Our intelligent AI assistant transforms how you manage emails, saving you time and boosting productivity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 shadow-md border border-gray-100"
              style={{
                animation: `animate-fade-in 0.6s ease-out forwards`,
                animationDelay: `${parseInt(feature.delay)}ms`,
                opacity: 0
              }}
            >
              <div className="h-12 w-12 rounded-xl blue-gradient flex items-center justify-center mb-4">
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
