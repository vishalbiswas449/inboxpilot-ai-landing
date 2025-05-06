
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

// Updated company logos with better visibility and consistent sources
const companies = [{
  id: "logo-1",
  description: 'Reddit',
  image: 'https://www.redditinc.com/assets/images/site/reddit-logo.png',
  className: "h-12 w-auto"
}, {
  id: "logo-2",
  description: 'Discord',
  image: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png',
  className: "h-12 w-auto"
}, {
  id: "logo-3",
  description: 'Notion',
  image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
  className: "h-12 w-auto"
}, {
  id: "logo-4",
  description: 'Figma',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  className: "h-12 w-auto"
}, {
  id: "logo-5",
  description: 'Swiggy',
  image: 'https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg',
  className: "h-12 w-auto"
}, {
  id: "logo-6",
  description: 'Zomato',
  image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png',
  className: "h-12 w-auto"
}, {
  id: "logo-7",
  description: 'LinkedIn',
  image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
  className: "h-12 w-auto"
}];

const TrustedBySection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="my-4 text-pretty text-2xl font-bold lg:text-3xl">
            Trusted by Industry Leaders
          </h2>
        </div>
        <div className="pt-4 md:pt-6">
          <div className="relative mx-auto flex items-center justify-center">
            <Carousel
              opts={{ loop: true, align: "start" }}
              plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent className="ml-0">
                {companies.map((logo) => (
                  <CarouselItem
                    key={logo.id}
                    className="flex basis-1/4 justify-center pl-4 sm:basis-1/5 md:basis-1/6 lg:basis-1/6"
                  >
                    <div className="mx-2 flex shrink-0 items-center justify-center h-16">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
