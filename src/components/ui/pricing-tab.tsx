
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (value: string) => void;
  discount?: boolean;
}

export function Tab({ text, selected, setSelected, discount = false }: TabProps) {
  // Add subtle hover animation
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };
  
  // Add bounce animation for the discount badge
  const badgeVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      variants={buttonVariants}
    >
      <Button
        onClick={() => setSelected(text)}
        variant="ghost"
        className={cn(
          "relative h-10 rounded-full text-sm font-medium capitalize focus:outline-0 px-6 transition-all duration-300",
          selected
            ? "text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-md"
            : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/80"
        )}
      >
        {text}
        {discount && (
          <motion.span 
            className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-400 text-[10px] font-bold text-white shadow-sm"
            variants={badgeVariants}
            initial="initial"
            animate="animate"
          >
            -20%
          </motion.span>
        )}
        {selected && (
          <motion.span
            layoutId="tab-indicator"
            className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 z-[-1]"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
      </Button>
    </motion.div>
  );
}
