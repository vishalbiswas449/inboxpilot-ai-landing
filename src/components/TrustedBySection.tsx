
import React, { useState, useEffect } from 'react';

const companies = [
  { name: 'Reddit', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Reddit_logo_new.svg' },
  { name: 'Discord', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Discord_logo.svg' },
  { name: 'Notion', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png' },
  { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
  { name: 'Swiggy', logo: 'https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg' },
  { name: 'Zomato', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png' },
  { name: 'LinkedIn', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' }
];

// Function to shuffle array
const shuffleArray = (array: typeof companies) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const TrustedBySection = () => {
  const [shuffledCompanies, setShuffledCompanies] = useState<typeof companies>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);
  
  useEffect(() => {
    setShuffledCompanies(shuffleArray(companies));
  }, []);
  
  useEffect(() => {
    // Preload images
    if (shuffledCompanies.length > 0) {
      const imagePromises = shuffledCompanies.map(company => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = company.logo;
          img.onload = () => {
            setLoadedCount(prev => prev + 1);
            resolve(true);
          };
          img.onerror = () => resolve(false);
        });
      });
      
      Promise.all(imagePromises).then(() => {
        setImagesLoaded(true);
      });
    }
  }, [shuffledCompanies]);
  
  // Generate a random offset for each logo for a staggered look
  const getRandomOffset = () => {
    const offsets = [-16, -8, 0, 8, 16];
    return offsets[Math.floor(Math.random() * offsets.length)];
  };
  
  return (
    <section className="py-16 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Trusted Partners
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Trusted by Industry Leaders
          </h2>
        </div>
        
        <div className="glass-card bg-white/80 rounded-xl p-8 shadow-lg border border-blue-100/50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {shuffledCompanies.map((company, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-center h-16 w-[120px] transition-all duration-300 hover:scale-110 filter grayscale hover:grayscale-0 hover:drop-shadow-lg ${
                  imagesLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  animation: imagesLoaded ? 'animate-fade-in 0.6s ease-out forwards' : 'none',
                  animationDelay: `${index * 100}ms`,
                  transform: `translateY(${getRandomOffset()}px)`,
                }}
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`} 
                  className="max-h-12 max-w-[100px] w-auto object-contain"
                  onLoad={() => {
                    // Individual image loaded
                    console.log(`${company.name} logo loaded`);
                  }}
                  onError={() => {
                    console.error(`Failed to load ${company.name} logo`);
                  }}
                />
              </div>
            ))}
          </div>
          
          {/* Loading state */}
          {!imagesLoaded && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                <span className="text-sm text-blue-600 ml-2">Loading logos...</span>
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>We serve companies of all sizes, from startups to enterprises.</p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
