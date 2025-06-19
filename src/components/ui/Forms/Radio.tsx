import * as React from "react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

export const Radio = ({ label, error, className, value, ...props }: {
  label: string;
  error?: any;
  className?: string;
  value?: any;
}) => {
  return (
    <label className="fancy-radio">
      <input
        type="radio"
        className={cn(
          "",
          className,
        )}
        value={value ? value : true}
        {...props}
      />
      <span className="radio-display"></span>
      <span className="radio label text-sm/none">{label}</span>
      {error && <small className="error flex gap-1 mt-1 items-center"><AlertCircle size="15px" />{error.message}</small>}
    </label>
  );
}