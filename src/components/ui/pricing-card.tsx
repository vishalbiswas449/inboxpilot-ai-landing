
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
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

export function PricingCard({
  tier,
  paymentFrequency,
}: {
  tier: PricingTier;
  paymentFrequency: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-between rounded-xl border-2 bg-white p-6 transition-all duration-200 hover:shadow-lg",
        tier.highlighted
          ? "border-blue-600 shadow-lg shadow-blue-100"
          : "border-border",
        tier.popular
          ? "relative border-blue-600 shadow-lg shadow-blue-100"
          : "border-border"
      )}
    >
      {tier.popular && (
        <div className="absolute inset-x-0 top-0 inline-block -translate-y-1/2 transform rounded-full bg-blue-600 px-4 py-1 text-center text-sm font-medium text-white">
          Most Popular
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
          <span className="text-4xl font-bold">
            {typeof tier.price[paymentFrequency.toLowerCase()] === "number"
              ? `$${tier.price[paymentFrequency.toLowerCase()]}`
              : tier.price[paymentFrequency.toLowerCase()]}
          </span>
          {typeof tier.price[paymentFrequency.toLowerCase()] === "number" && (
            <span className="mb-1 text-sm font-medium text-muted-foreground">
              /{paymentFrequency.toLowerCase() === "monthly" ? "mo" : "yr"}
            </span>
          )}
        </div>
        <ul className="space-y-3 text-sm leading-6">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="h-5 w-5 flex-shrink-0 text-blue-600" />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button
        className={cn(
          "mt-8 w-full font-semibold",
          tier.highlighted || tier.popular
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-primary hover:bg-primary/90"
        )}
      >
        {tier.cta}
      </Button>
    </div>
  );
}
