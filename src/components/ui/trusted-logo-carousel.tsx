
import React, { useEffect, useRef } from "react";
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

const TrustedLogoCarousel = ({
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
}: TrustedLogoCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the logos and append them to achieve infinite scroll effect
    const cloneAndAppendLogos = () => {
      const logosDiv = scrollContainer.querySelector('.logo-container');
      if (!logosDiv) return;
      
      const clone = logosDiv.cloneNode(true);
      scrollContainer.appendChild(clone);
    };
    
    cloneAndAppendLogos();
    
    // Set up the animation
    let animationId: number;
    let startTime: number;
    const duration = 20000; // 20 seconds for one complete scroll
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      const progress = (elapsed % duration) / duration;
      const translateX = progress * -100;
      
      if (scrollContainer) {
        scrollContainer.style.transform = `translateX(${translateX}%)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [logos]);

  return (
    <section className={cn("py-16", className)}>
      <div className="container flex flex-col items-center text-center">
        <h1 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          {heading}
        </h1>
      </div>
      <div className="pt-10 md:pt-8 overflow-hidden">
        <div className="relative mx-auto flex items-center justify-center">
          <div className="w-full overflow-hidden relative">
            <div 
              ref={scrollRef}
              className="flex items-center logo-scroll"
              style={{
                width: "200%", // Important for animation
                display: "flex",
                flexDirection: "row"
              }}
            >
              <div className="logo-container flex items-center justify-around min-w-full">
                {logos.map((logo) => (
                  <div
                    key={logo.id}
                    className="mx-8 flex items-center justify-center"
                  >
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={logo.className}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { TrustedLogoCarousel };
