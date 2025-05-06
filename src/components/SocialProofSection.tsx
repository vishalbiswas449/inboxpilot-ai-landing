
import React from 'react';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

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
  },
  {
    quote: "Email organization was a mess until InboxPilot. Now everything is where I need it, when I need it.",
    name: "Emma Rodriguez",
    title: "Freelance Designer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The AI understands context so well. It drafts perfect responses that sound just like me!",
    name: "James Thompson",
    title: "Senior Developer",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#f8fafc]">
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
        
        <div className="relative overflow-hidden" style={{ padding: '20px 0' }}>
          {/* Gradient fade on left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-gradient-to-r from-[#f8fafc] to-transparent"></div>
          
          {/* Gradient fade on right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 z-10 bg-gradient-to-l from-[#f8fafc] to-transparent"></div>
          
          <Carousel
            opts={{ loop: true, align: "start" }}
            plugins={[
              AutoScroll({ 
                playOnInit: true,
                speed: 0.7
              })
            ]}
            className="w-full cursor-grab active:cursor-grabbing"
            onMouseEnter={(e) => {
              // Find and stop the autoscroll
              const emblaNode = e.currentTarget.querySelector('.embla__container');
              if (emblaNode && emblaNode instanceof HTMLElement) {
                emblaNode.style.transform = emblaNode.style.transform;
              }
            }}
            onMouseLeave={(e) => {
              // Resume autoscroll
              const carousel = e.currentTarget;
              setTimeout(() => {
                const emblaApi = (carousel as any).__emblaApi;
                if (emblaApi) emblaApi.plugins().autoScroll.play();
              }, 100);
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/3"
                >
                  <div className="flex-shrink-0 h-full bg-white/90 rounded-xl p-6 border border-blue-100 hover:border-blue-200 transition-all">
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
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
