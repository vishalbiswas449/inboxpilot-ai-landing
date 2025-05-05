
import React, { useRef, useEffect } from 'react';
import { Star } from 'lucide-react';

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
  const scrollContainer = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isScrolling = useRef<boolean>(false);
  const isPaused = useRef<boolean>(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startScrolling();
        } else {
          stopScrolling();
        }
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
      stopScrolling();
    };
  }, []);
  
  const startScrolling = () => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    
    const scroll = () => {
      if (!scrollContainer.current || !isScrolling.current || isPaused.current) return;
      
      const container = scrollContainer.current;
      if (container.scrollLeft >= (container.scrollWidth - container.clientWidth)) {
        // Reset scroll position when reached the end
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1; // Adjust speed here
      }
      
      requestAnimationFrame(scroll);
    };
    
    requestAnimationFrame(scroll);
  };
  
  const stopScrolling = () => {
    isScrolling.current = false;
  };
  
  const handleMouseEnter = () => {
    isPaused.current = true;
  };
  
  const handleMouseLeave = () => {
    isPaused.current = false;
  };
  
  // Clone testimonials to create infinite loop effect
  const allTestimonials = [...testimonials, ...testimonials];
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden bg-[#f8fafc]"
    >
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-200 rounded-full filter blur-[120px] opacity-30 -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full filter blur-[100px] opacity-25 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            Customer Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Loved by Professionals Worldwide</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">10,000+</p>
              <p className="text-gray-600">Active Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">1M+</p>
              <p className="text-gray-600">Emails Processed</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">4.8/5</p>
              <p className="text-gray-600">User Rating</p>
            </div>
          </div>
        </div>
        
        <div 
          className="relative overflow-hidden"
          style={{ padding: '20px 0' }}
        >
          {/* Gradient fade on left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-gradient-to-r from-[#f8fafc] to-transparent"></div>
          
          {/* Gradient fade on right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-gradient-to-l from-[#f8fafc] to-transparent"></div>
          
          <div 
            ref={scrollContainer}
            className="flex overflow-x-auto snap-x scrollbar-hide pb-6 pt-2"
            style={{ scrollBehavior: 'smooth', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
          >
            <div className="flex gap-6 pr-6">
              {allTestimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="glass-card flex-shrink-0 w-[300px] md:w-[350px] bg-white/70 rounded-xl p-6 border border-transparent hover:border-blue-200 transition-all snap-center"
                  style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.1)' }}
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
                      loading="lazy"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile touch indicator */}
        <div className="flex justify-center mt-4 md:hidden">
          <div className="flex items-center text-xs text-gray-500">
            <span className="animate-pulse">←</span>
            <span className="mx-2">Swipe</span>
            <span className="animate-pulse">→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
