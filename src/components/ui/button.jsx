import React from 'react';
export const Button = React.forwardRef(({ className = "", children, ...props }, ref) => (
  <button ref={ref} className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 ${className}`} {...props}>
    {children}
  </button>
));
Button.displayName = "Button";
