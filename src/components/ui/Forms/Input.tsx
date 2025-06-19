import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, ...props}, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "",
          className
        )}
        {...props}
      />
    );
});
Input.displayName = "Input";