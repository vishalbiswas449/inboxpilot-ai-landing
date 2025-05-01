
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "InboxPilot has completely transformed how I handle email. I save at least 10 hours per week!",
    name: "Sarah Johnson",
    title: "Marketing Director",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The smart drafting feature feels like having a personal assistant. It knows exactly what I want to say.",
    name: "Michael Chen",
    title: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "As a CEO, my inbox was overwhelming. InboxPilot helped me reclaim control and focus on what matters.",
    name: "Priya Patel",
    title: "CEO, TechStart",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The analytics feature showed me I was spending 40% of my day on email. InboxPilot cut that in half!",
    name: "David Wilson",
    title: "Sales Director",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const SocialProofSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.ceil(testimonials.length / getItemsPerView()) - 1 : prevIndex - 1
    );
  };
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === Math.ceil(testimonials.length / getItemsPerView()) - 1 ? 0 : prevIndex + 1
    );
  };

  // Responsive items per view
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3; // Default for SSR
  };

  // Calculate visible testimonials
  const visibleTestimonials = () => {
    const itemsPerView = getItemsPerView();
    const start = currentIndex * itemsPerView;
    return testimonials.slice(start, start + itemsPerView);
  };

  return (
    <section className="py-20 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Professionals Worldwide</h2>
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-army-green">10,000+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-army-green">1M+</p>
              <p className="text-gray-600">Emails Processed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-army-green">4.8/5</p>
              <p className="text-gray-600">User Rating</p>
            </div>
          </div>
        </div>
        
        <div className="relative">
          {/* Mobile carousel controls */}
          <div className="flex justify-between mb-4 md:hidden">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-army-green" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-army-green" />
            </button>
          </div>
          
          {/* Desktop carousel */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 transition-all duration-500 hover:shadow-xl animate-scale-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile carousel */}
          <div className="md:hidden">
            {visibleTestimonials().map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 mb-4"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Desktop carousel controls */}
          <div className="hidden md:flex justify-center mt-8 space-x-2">
            {[...Array(Math.ceil(testimonials.length / getItemsPerView()))].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index ? 'w-8 bg-army-green' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
