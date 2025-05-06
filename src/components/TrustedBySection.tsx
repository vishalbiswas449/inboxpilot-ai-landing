
import React from 'react';
import { Logos3 } from './ui/logos3';

const companies = [
  { id: "logo-1", description: 'Reddit', image: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Reddit_logo_new.svg', className: "h-7 w-auto" },
  { id: "logo-2", description: 'Discord', image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Discord_logo.svg', className: "h-7 w-auto" },
  { id: "logo-3", description: 'Notion', image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png', className: "h-7 w-auto" },
  { id: "logo-4", description: 'Figma', image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', className: "h-7 w-auto" },
  { id: "logo-5", description: 'Swiggy', image: 'https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg', className: "h-7 w-auto" },
  { id: "logo-6", description: 'Zomato', image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png', className: "h-7 w-auto" },
  { id: "logo-7", description: 'LinkedIn', image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png', className: "h-7 w-auto" },
];

const TrustedBySection = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <Logos3 
          heading="Trusted By Industry Leaders"
          logos={companies}
        />
      </div>
    </section>
  );
};

export default TrustedBySection;
