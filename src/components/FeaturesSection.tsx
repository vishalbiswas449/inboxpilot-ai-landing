
import React from 'react';
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
    Icon: Edit,
    name: 'Smart Drafting',
    description: 'AI-crafted emails tailored to your tone and style.',
    background: <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-blue-100/60 blur-3xl"></div>,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2"
  },
  {
    Icon: FolderCheck,
    name: 'Auto-Organization',
    description: 'Automatic email categorization and prioritization.',
    background: <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-blue-100/60 blur-3xl"></div>,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3"
  },
  {
    Icon: MessageSquare,
    name: 'Quick Replies',
    description: 'One-click smart responses for common emails.',
    background: <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-blue-100/60 blur-2xl"></div>,
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2"
  },
  {
    Icon: Calendar,
    name: 'Calendar Sync',
    description: 'Seamless scheduling and meeting integration.',
    background: <div className="absolute -left-10 -top-10 w-32 h-32 rounded-full bg-blue-100/60 blur-2xl"></div>,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2"
  },
  {
    Icon: Layers,
    name: 'Multitasking Mastery',
    description: 'Manage multiple inboxes effortlessly.',
    background: <div className="absolute -right-15 -top-15 w-36 h-36 rounded-full bg-blue-100/60 blur-2xl"></div>,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4"
  },
  {
    Icon: Shield,
    name: 'Security',
    description: 'Enterprise-grade encryption and privacy features.',
    background: <div className="absolute -left-15 -bottom-15 w-36 h-36 rounded-full bg-blue-100/60 blur-2xl"></div>,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4"
  }
];

const FeatureCard = ({ feature }) => {
  const { Icon, name, description, className, background } = feature;
  
  return (
    <div
      key={name}
      className={`group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl
        bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]
        transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]
        hover:shadow-lg transition-all duration-300 ${className}`}
    >
      <div>{background}</div>
      <div className="z-10 flex transform-gpu flex-col gap-2 p-6 transition-all duration-300">
        <Icon className="h-12 w-12 text-blue-600 transition-all duration-300 group-hover:scale-110" />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-all duration-300">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-blue-50/30 dark:group-hover:bg-blue-900/10" />
    </div>
  );
};

const BentoGrid = ({ children, className }) => {
  return (
    <div
      className={`grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}
    >
      {children}
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section 
      id="features" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
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
        
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default FeaturesSection;
