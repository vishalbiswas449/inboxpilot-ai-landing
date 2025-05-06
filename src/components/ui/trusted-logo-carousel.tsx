
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface TrustedLogoCarouselProps {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const TrustedLogoCarousel: React.FC<TrustedLogoCarouselProps> = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "logo-1",
      description: "Logo 1",
      image: "https://shadcnblocks.com/images/block/logos/astro.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-2",
      description: "Logo 2",
      image: "https://shadcnblocks.com/images/block/logos/figma.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-3",
      description: "Logo 3",
      image: "https://shadcnblocks.com/images/block/logos/nextjs.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-4",
      description: "Logo 4",
      image: "https://shadcnblocks.com/images/block/logos/react.png",
      className: "h-7 w-auto",
    },
    {
      id: "logo-5",
      description: "Logo 5",
      image: "https://shadcnblocks.com/images/block/logos/shadcn-ui.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-6",
      description: "Logo 6",
      image: "https://shadcnblocks.com/images/block/logos/supabase.svg",
      className: "h-7 w-auto",
    },
    {
      id: "logo-7",
      description: "Logo 7",
      image: "https://shadcnblocks.com/images/block/logos/tailwind.svg",
      className: "h-4 w-auto",
    },
    {
      id: "logo-8",
      description: "Logo 8",
      image: "https://shadcnblocks.com/images/block/logos/vercel.svg",
      className: "h-7 w-auto",
    },
  ],
  className,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);
  const animationRef = useRef<number | null>(null);
  
  const scroll = () => {
    if (!scrollRef.current) return;
    
    const { scrollWidth, clientWidth } = scrollRef.current;
    
    // Increment scroll position
    scrollPosition.current += 0.5;
    
    // Reset when we've scrolled the full width
    if (scrollPosition.current >= scrollWidth / 2) {
      scrollPosition.current = 0;
    }
    
    // Apply the scroll position
    if (scrollRef.current) {
      scrollRef.current.style.transform = `translateX(${-scrollPosition.current}px)`;
    }
    
    // Continue animation
    animationRef.current = requestAnimationFrame(scroll);
  };
  
  useEffect(() => {
    // Start the animation
    animationRef.current = requestAnimationFrame(scroll);
    
    // Clean up animation on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  // Create a doubled list of logos for seamless scrolling
  const allLogos = [...logos, ...logos];
  
  return (
    <section className={cn("py-32", className)}>
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center overflow-hidden lg:max-w-5xl">
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10"></div>
          
          <div className="overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex items-center"
            >
              {allLogos.map((logo, index) => (
                <div key={`${logo.id}-${index}`} className="mx-10 flex shrink-0 items-center justify-center">
                  <img
                    src={logo.image}
                    alt={logo.description}
                    className={logo.className}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export { TrustedLogoCarousel };
