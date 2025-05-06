
"use client";

import * as React from "react";
import { PricingCard, type PricingTier } from "@/components/ui/pricing-card";
import { Tab } from "@/components/ui/pricing-tab";
import { motion, AnimatePresence } from "framer-motion";

interface PricingSectionProps {
  title: string;
  subtitle: string;
  tiers: PricingTier[];
  frequencies: string[];
}

export function PricingSection({
  title,
  subtitle,
  tiers,
  frequencies,
}: PricingSectionProps) {
  const [selectedFrequency, setSelectedFrequency] = React.useState(frequencies[0]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-10 py-12"
    >
      <div className="space-y-7 text-center">
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto flex w-fit rounded-full bg-gray-100/80 p-1.5 shadow-inner"
        >
          {frequencies.map((freq) => (
            <Tab
              key={freq}
              text={freq}
              selected={selectedFrequency === freq}
              setSelected={setSelectedFrequency}
              discount={freq === "yearly"}
            />
          ))}
        </motion.div>
      </div>

      <div className="grid w-full max-w-6xl gap-6 sm:grid-cols-2 xl:grid-cols-4 px-4 md:px-0">
        <AnimatePresence>
          {tiers.map((tier, i) => (
            <PricingCard
              key={tier.id}
              tier={tier}
              paymentFrequency={selectedFrequency}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
