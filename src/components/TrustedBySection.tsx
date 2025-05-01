
import React from 'react';

const companies = [
  { name: 'Reddit', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Reddit_logo_new.svg' },
  { name: 'Discord', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Discord_logo.svg' },
  { name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
  { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
  { name: 'Swiggy', logo: 'https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg' },
  { name: 'Zomato', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png' },
  { name: 'LinkedIn', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' }
];

const TrustedBySection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-50/50 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Trusted by Industry Leaders
        </h2>
        
        <div className="glass-card rounded-xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center h-16 w-full transition-all duration-300 hover:scale-110 filter grayscale hover:grayscale-0 hover:drop-shadow-lg"
                style={{
                  animation: 'animate-fade-in 0.6s ease-out forwards',
                  animationDelay: `${index * 100}ms`,
                  opacity: 0
                }}
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
