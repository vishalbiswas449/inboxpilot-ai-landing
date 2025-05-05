
import React, { useEffect, useState } from 'react';

interface RotatingTextProps {
  texts: string[];
  interval?: number;
}

const RotatingText = ({ texts, interval = 3000 }: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 1000); // Fade out duration
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <span className="relative inline-block min-w-[150px] text-left">
      <span 
        className={`absolute text-blue-600 transition-opacity duration-1000 ${
          isAnimating ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {texts[currentIndex]}
      </span>
      <span className="opacity-0">{texts.reduce((a, b) => a.length > b.length ? a : b)}</span>
    </span>
  );
};

export default RotatingText;
