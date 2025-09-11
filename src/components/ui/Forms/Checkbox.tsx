import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

export const Checkbox = ({ label, error, className, value, ...props }: {
  label: any;
  error?: any;
  className?: string;
  value?: any;
  required?: boolean;
}) => {
  return (
    <label className="fancy-checkbox">
      <input
        type="checkbox"
        className={cn(
          "",
          className,
        )}
        value={value ? value : true}
        {...props}
      />
      <span className="checkbox-display"></span>
      <span className="checkbox-label text-sm/none">{label}</span>
      {error && <small className="error flex gap-1 mt-1 items-center"><AlertCircle size="15px" />{error.message}</small>}
    </label>
  );
};
Checkbox.displayName = "Checkbox";