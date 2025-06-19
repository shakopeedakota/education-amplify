import * as React from "react";
import { cn } from "@/lib/utils";

export const Select = React.forwardRef<HTMLSelectElement, React.ComponentProps<"select">>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "",
          className,
        )}
        { ...props }
      >
        {children}
      </select>
    );
  }
);
Select.displayName = "Select";