
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface PricingTier {
  id: string;
  name: string;
  price: {
    monthly: string | number;
    yearly: string | number;
  };
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  highlighted?: boolean;
}

export function PricingCard({
  tier,
  paymentFrequency,
}: {
  tier: PricingTier;
  paymentFrequency: string;
}) {
  const isYearly = paymentFrequency.toLowerCase() === "yearly";
  const priceValue = tier.price[paymentFrequency.toLowerCase()];
  const isNumericPrice = typeof priceValue === "number";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "group flex h-full flex-col justify-between rounded-xl border-2 bg-white p-6 transition-all duration-200 hover:shadow-lg",
        tier.highlighted
          ? "border-blue-600 shadow-lg shadow-blue-100"
          : "border-border",
        tier.popular
          ? "relative border-blue-600 shadow-lg shadow-blue-100"
          : "border-border"
      )}
    >
      {tier.popular && (
        <div className="absolute inset-x-0 top-0 -translate-y-1/2 transform">
          <div className="inline-flex animate-shimmer items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-[length:200%_100%] px-4 py-1 text-sm font-medium text-white shadow-md">
            Most Popular
          </div>
        </div>
      )}

      <div className="mt-3 space-y-5">
        <div className="space-y-1">
          <h3 className="text-xl font-bold">{tier.name}</h3>
          <p className="text-sm leading-6 text-muted-foreground">
            {tier.description}
          </p>
        </div>
        <div className="flex items-end gap-2 border-b border-gray-100 pb-5">
          <motion.div 
            key={`${tier.id}-${paymentFrequency}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-end"
          >
            <span className="text-4xl font-bold">
              {isNumericPrice ? `$${priceValue}` : priceValue}
            </span>
            {isNumericPrice && (
              <span className="mb-1 ml-1 text-sm font-medium text-muted-foreground">
                /{isYearly ? "yr" : "mo"}
              </span>
            )}
          </motion.div>
          
          {isNumericPrice && isYearly && (
            <span className="mb-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
              Save 20%
            </span>
          )}
        </div>
        <ul className="space-y-3 text-sm leading-6">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <div className="rounded-full bg-blue-50 p-1 text-blue-600">
                <Check className="h-4 w-4 flex-shrink-0" />
              </div>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        className={cn(
          "mt-8 w-full font-semibold group-hover:scale-[1.02] transition-transform",
          tier.highlighted || tier.popular
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-primary hover:bg-primary/90"
        )}
      >
        {tier.cta}
      </Button>
    </motion.div>
  );
}
