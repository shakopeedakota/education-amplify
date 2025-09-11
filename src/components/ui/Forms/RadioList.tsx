import * as React from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

export const RadioList = ({ label, error, className, children, ...props }: {
  label: any;
  error?: any;
  className?: string;
  children: any;
}) => {
  return (
    <div className={cn("fancy-radio-list form-control", className)} {...props}>
      {label && <span className="radio-list-label mb-2">{label}</span>}
      <div className="radio-list-options flex flex-col">
        {children}
      </div>
      {error && <small className="error flex gap-1 mt-1 items-center"><AlertCircle size="15px" />{error.message}</small>}
    </div>
  );
}