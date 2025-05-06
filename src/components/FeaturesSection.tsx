
import React from 'react';
import { 
  Edit, 
  FolderCheck, 
  MessageSquare, 
  Calendar, 
  Layers,
  Shield 
} from 'lucide-react';
import { BentoCard, BentoGrid } from './ui/bento-grid';

const features = [
  {
    Icon: Edit,
    name: 'Smart Drafting',
    description: 'AI-crafted emails tailored to your tone and style.',
    href: "#",
    cta: "Explore",
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    background: <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-blue-100/60 blur-3xl"></div>
  },
  {
    Icon: FolderCheck,
    name: 'Auto-Organization',
    description: 'Automatic email categorization and prioritization.',
    href: "#",
    cta: "Discover",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    background: <div className="absolute -left-20 -bottom-20 w-40 h-40 rounded-full bg-blue-100/60 blur-3xl"></div>
  },
  {
    Icon: MessageSquare,
    name: 'Quick Replies',
    description: 'One-click smart responses for common emails.',
    href: "#",
    cta: "Learn More",
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2",
    background: <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-blue-100/60 blur-2xl"></div>
  },
  {
    Icon: Calendar,
    name: 'Calendar Sync',
    description: 'Seamless scheduling and meeting integration.',
    href: "#",
    cta: "View Details",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
    background: <div className="absolute -left-10 -top-10 w-32 h-32 rounded-full bg-blue-100/60 blur-2xl"></div>
  },
  {
    Icon: Layers,
    name: 'Multitasking Mastery',
    description: 'Manage multiple inboxes effortlessly.',
    href: "#",
    cta: "See More",
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    background: <div className="absolute -right-15 -top-15 w-36 h-36 rounded-full bg-blue-100/60 blur-2xl"></div>
  },
  {
    Icon: Shield,
    name: 'Security',
    description: 'Enterprise-grade encryption and privacy features.',
    href: "#",
    cta: "Read More",
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4",
    background: <div className="absolute -left-15 -bottom-15 w-36 h-36 rounded-full bg-blue-100/60 blur-2xl"></div>
  }
];

const FeaturesSection = () => {
  return (
    <section 
      id="features" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
      {/* Background elements */}
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
          {features.map((feature) => (
            <BentoCard
              key={feature.name}
              Icon={feature.Icon}
              name={feature.name}
              description={feature.description}
              href={feature.href}
              cta={feature.cta}
              className={feature.className}
              background={feature.background}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default FeaturesSection;
