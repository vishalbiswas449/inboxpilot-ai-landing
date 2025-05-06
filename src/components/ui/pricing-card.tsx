
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

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

interface PricingCardProps {
  tier: PricingTier;
  paymentFrequency: string;
  className?: string;
}

export function PricingCard({
  tier,
  paymentFrequency,
  className,
}: PricingCardProps) {
  const price =
    typeof tier.price[paymentFrequency as keyof typeof tier.price] === "number"
      ? `$${tier.price[paymentFrequency as keyof typeof tier.price]}`
      : tier.price[paymentFrequency as keyof typeof tier.price];

  return (
    <div
      className={cn(
        "relative flex h-full flex-1 flex-col justify-between rounded-xl p-6 shadow-sm",
        tier.highlighted
          ? "border-primary/50 bg-primary/5 dark:bg-primary/10"
          : "border bg-card",
        className
      )}
    >
      {tier.popular && (
        <div className="absolute right-4 top-4 rounded bg-primary px-3 py-1 text-xs text-primary-foreground">
          Popular
        </div>
      )}

      <div className="mb-4 space-y-2">
        <h3 className="font-bold">{tier.name}</h3>
        <div className="space-y-1">
          <div>
            <span className="text-3xl font-bold">{price}</span>
            {typeof tier.price[paymentFrequency as keyof typeof tier.price] === "number" && (
              <span className="text-muted-foreground">/{paymentFrequency.replace("ly", "")}</span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">{tier.description}</p>
        </div>
      </div>

      <div className="space-y-6">
        <ul className="space-y-2 text-sm">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={cn(
            "w-full",
            tier.highlighted ? "bg-primary hover:bg-primary/90" : ""
          )}
        >
          {tier.cta}
        </Button>
      </div>
    </div>
  );
}
