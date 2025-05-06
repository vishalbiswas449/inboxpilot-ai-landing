
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (value: string) => void;
  discount?: boolean;
}

export function Tab({ text, selected, setSelected, discount = false }: TabProps) {
  return (
    <Button
      onClick={() => setSelected(text)}
      variant="ghost"
      className={cn(
        "relative h-10 rounded-full text-sm font-medium capitalize focus:outline-0 px-6",
        selected
          ? "text-white bg-blue-600 hover:bg-blue-700 shadow-md"
          : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
      )}
    >
      {text}
      {discount && (
        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">
          -20%
        </span>
      )}
      {selected && (
        <motion.span
          layoutId="tab-indicator"
          className="absolute inset-0 rounded-full bg-blue-600 z-[-1]"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Button>
  );
}
