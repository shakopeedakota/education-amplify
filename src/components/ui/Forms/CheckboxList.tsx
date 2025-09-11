import * as React from 'react';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

export const CheckboxList = ({ label, error, className, children, ...props }: {
  label: any;
  error?: any;
  className?: string;
  children: any;
}) => {
  return (
    <div className={cn("fancy-checkbox-list form-control", className)} {...props}>
      {label && <span className="checkbox-list-label mb-2">{label}</span>}
      <div className="checkbox-list-options flex flex-col">
        {children}
      </div>
      {error && <small className="error flex gap-1 mt-1 items-center"><AlertCircle size="15px" />{error.message}</small>}
    </div>
  );
}