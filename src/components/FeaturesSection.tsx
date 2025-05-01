
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
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-light-green/10 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose InboxPilot?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powerful features to transform how you manage your inbox.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              style={{
                animation: `animate-fade-in 0.6s ease-out forwards`,
                animationDelay: `${parseInt(feature.delay)}ms`,
                opacity: 0
              }}
            >
              <div className="h-12 w-12 rounded-full green-gradient flex items-center justify-center mb-4">
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
