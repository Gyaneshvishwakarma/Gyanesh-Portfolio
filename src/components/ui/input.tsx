import * as React from "react";
import { cn } from "@/lib/utils";

// Define custom props if needed, otherwise skip this part
// export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
//   isVisible?: boolean; // Example of adding a member
// }

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    // Example of using isVisible if it's necessary
    // const isVisible = true; // Use this variable if needed
    
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
