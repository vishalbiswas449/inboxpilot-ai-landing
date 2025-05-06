
"use client";

import * as React from "react";
import { ChevronDown, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  items: {
    question: string;
    answer: string;
  }[];
  contactInfo?: {
    title: string;
    description: string;
    buttonText: string;
    onContact?: () => void;
  };
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ className, title, description, items, contactInfo, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-16 w-full bg-gradient-to-b from-transparent via-muted/50 to-transparent",
          className
        )}
        {...props}
      >
        <div className="container">
          {/* Header */}
          <div
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
              {title}
            </h2>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>

          {/* FAQ Items */}
          <div className="max-w-2xl mx-auto space-y-2">
            {items.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                index={index}
              />
            ))}
          </div>

          {/* Contact Section */}
          {contactInfo && (
            <div
              className="max-w-md mx-auto mt-12 p-6 rounded-lg text-center"
            >
              <div className="inline-flex items-center justify-center p-1.5 rounded-full mb-4">
                <Mail className="h-4 w-4" />
              </div>
              <p className="text-sm font-medium text-foreground mb-1">
                {contactInfo.title}
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                {contactInfo.description}
              </p>
              <Button size="sm" onClick={contactInfo.onContact}>
                {contactInfo.buttonText}
              </Button>
            </div>
          )}
        </div>
      </section>
    );
  }
);
FaqSection.displayName = "FaqSection";

// Internal FaqItem component
const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    question: string;
    answer: string;
    index: number;
  }
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { question, answer, index } = props;

  return (
    <div
      ref={ref}
      className={cn(
        "group rounded-lg",
        "transition-all duration-200 ease-in-out",
        "border border-border/50",
        isOpen
          ? "bg-gradient-to-br from-background via-muted/50 to-background"
          : "hover:bg-muted/50"
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 h-auto justify-between hover:bg-transparent"
      >
        <h3
          className={cn(
            "text-base font-medium transition-colors duration-200 text-left",
            "text-foreground/70",
            isOpen && "text-foreground"
          )}
        >
          {question}
        </h3>
        <div
          className={cn(
            "p-0.5 rounded-full flex-shrink-0",
            "transition-colors duration-200",
            isOpen ? "text-primary" : "text-muted-foreground"
          )}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s'
          }}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </Button>
      {isOpen && (
        <div>
          <div className="px-6 pb-4 pt-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
});
FaqItem.displayName = "FaqItem";

export { FaqSection };
