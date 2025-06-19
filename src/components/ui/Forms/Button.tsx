import * as React from 'react';
import { cn } from '@/lib/utils';

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => {
    let className = '';
    if ( props.className && props.className != '') {
      className = props.className;
      delete props.className;
    }
    return (
      <button
        ref={ref}
        className={cn(
          "btn btn-thin",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';