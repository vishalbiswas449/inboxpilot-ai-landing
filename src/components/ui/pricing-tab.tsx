
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
        "relative h-9 rounded-full text-sm font-normal capitalize focus:outline-0",
        selected
          ? "text-primary bg-accent hover:text-primary"
          : "hover:text-primary hover:bg-transparent"
      )}
    >
      {text}
      {discount && (
        <span className="absolute right-1 top-0 h-2 w-2 rounded-full bg-primary" />
      )}
    </Button>
  );
}
