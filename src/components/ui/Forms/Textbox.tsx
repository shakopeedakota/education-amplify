import * as React from "react";
import { cn } from "@/lib/utils";

export const Textbox = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "",
          className
        )}
        {...props}
      />
    );
  }
);
Textbox.displayName = "Textbox";