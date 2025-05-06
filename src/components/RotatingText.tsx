
import React, { useEffect, useState } from 'react';

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

const RotatingText = ({
  texts,
  interval = 3000,
  className = ""
}: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayText, setDisplayText] = useState(texts[0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        const nextIndex = (currentIndex + 1) % texts.length;
        setCurrentIndex(nextIndex);
        setDisplayText(texts[nextIndex]);
        
        setTimeout(() => {
          setIsAnimating(false);
        }, 100); // Very short delay to make animation look smoother
      }, 500); // Fade out duration
    }, interval);
    
    return () => clearInterval(timer);
  }, [texts, interval, currentIndex]);

  return (
    <span className={`relative inline-block min-w-[200px] text-blue-600 ${className}`}>
      <span 
        className={`absolute inset-0 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
        aria-hidden={isAnimating}
      >
        {displayText}
      </span>
      <span className="opacity-0 select-none" aria-hidden="true">
        {texts.reduce((a, b) => a.length > b.length ? a : b)}
      </span>
    </span>
  );
};

export default RotatingText;
