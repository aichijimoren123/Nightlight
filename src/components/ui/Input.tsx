"use client";

import { cn } from "@/lib/utils";
import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  customSlot?: any;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, customSlot, ...props }, ref) => {
    return (
      <div className="w-full relative">
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {customSlot && (
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
            {customSlot}
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
