
/**
 * Interactive animation utilities for enhancing the user experience
 */

// Cursor light effect that follows mouse movement
export const initCursorEffect = () => {
  const cursorEffect = document.querySelector('.cursor-effect');
  if (!cursorEffect) return;
  
  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    
    // Position the light effect at mouse position
    if (cursorEffect instanceof HTMLElement) {
      cursorEffect.style.left = `${clientX}px`;
      cursorEffect.style.top = `${clientY}px`;
      cursorEffect.classList.add('active');
    }
  };
  
  // Debounce function to improve performance
  const debounce = (func: Function, wait: number) => {
    let timeout: number | null = null;
    return (...args: any) => {
      if (timeout) window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        func(...args);
      }, wait);
    };
  };
  
  // Use debounced version for better performance
  document.addEventListener('mousemove', debounce(handleMouseMove, 10));
};

// Simulate page transition loading effect
export const simulatePageLoading = () => {
  document.body.classList.add('page-loading');
  
  const pageTransitionIndicator = document.querySelector('.page-transition-indicator');
  if (pageTransitionIndicator instanceof HTMLElement) {
    pageTransitionIndicator.style.width = '0%';
    setTimeout(() => {
      pageTransitionIndicator.style.width = '100%';
      setTimeout(() => {
        document.body.classList.remove('page-loading');
        pageTransitionIndicator.style.width = '0%';
      }, 1000);
    }, 100);
  } else {
    setTimeout(() => {
      document.body.classList.remove('page-loading');
    }, 1000);
  }
};

// Initialize scroll animations
export const initScrollAnimations = () => {
  // Add animation to elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const windowHeight = window.innerHeight;
    
    elements.forEach((element) => {
      const elementPosition = (element as HTMLElement).getBoundingClientRect().top;
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animated');
      }
    });
    
    // Feature cards animation
    const featureSections = document.querySelectorAll('#features');
    featureSections.forEach(section => {
      const sectionTop = (section as HTMLElement).getBoundingClientRect().top;
      const featureCards = section.querySelectorAll('.feature-card');
      
      if (sectionTop < windowHeight - 150) {
        featureCards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('visible');
          }, index * 100);
        });
      }
    });
  };
  
  // Initial check for elements in view
  animateOnScroll();
  
  // Check on scroll
  window.addEventListener('scroll', animateOnScroll);
};

// Initialize all animations
export const initAllAnimations = () => {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initCursorEffect();
      simulatePageLoading();
      initScrollAnimations();
    });
  } else {
    initCursorEffect();
    simulatePageLoading();
    initScrollAnimations();
  }
};

export default initAllAnimations;
