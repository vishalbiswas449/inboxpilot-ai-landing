
import React from 'react';
import { motion } from 'framer-motion';

interface LoadingAnimationProps {
  isLoading: boolean;
}

const LoadingAnimation = ({ isLoading }: LoadingAnimationProps) => {
  if (!isLoading) return null;
  
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-white"
    >
      <div className="flex flex-col items-center">
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 1.2, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
          className="relative"
        >
          <svg width="80" height="80" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Envelope body */}
            <motion.path 
              d="M5 15L30 35L55 15V45H5V15Z" 
              fill="#2563EB"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            />
            
            {/* Envelope flap */}
            <motion.path 
              d="M5 15L30 30L55 15H5Z" 
              fill="#60A5FA"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.7 }}
            />
            
            {/* Outline */}
            <motion.rect 
              x="5" y="15" width="50" height="30" 
              stroke="#1D4ED8" 
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8 }}
            />
          </svg>
          
          {/* Animation lines */}
          <motion.div
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[80%] flex justify-center space-x-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {[0, 1, 2].map(i => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-blue-600"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </motion.div>
        
        <motion.p 
          className="mt-12 text-xl font-medium text-gray-700"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Loading InboxPilot...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingAnimation;
