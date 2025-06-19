import React from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Field = ({ children, label, error, className, ...props }: {
  children: any;
  label?: string;
  error?: any;
  className?: string
}) => {
  return (
    <div
      className={cn(
        "form-control",
        className,
      )}
      {...props}
    >
      <label className={`form-label`}>
        {label && (<span>{label}</span>)}
        {children}
        {error && <small className="error flex gap-1 mt-1 items-center"><AlertCircle size="15px" />{error.message}</small>}
      </label>
    </div>
  );
};
Field.displayName = 'Field';