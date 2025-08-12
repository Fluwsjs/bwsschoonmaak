"use client";

import { useEffect, useState } from "react";

// Screen reader only text
export const ScreenReaderOnly = ({ children }: { children: React.ReactNode }) => (
  <span className="sr-only">{children}</span>
);

// Skip to content link
export const SkipToContent = () => (
  <a 
    href="#main-content"
    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[color:var(--primary)] text-white px-4 py-2 rounded-md z-50 transition-all duration-200"
  >
    Ga naar hoofdinhoud
  </a>
);

// Accessible button component
interface AccessibleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  className?: string;
}

export const AccessibleButton = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  disabled = false,
  ariaLabel,
  ariaDescribedBy,
  className = '',
  ...props
}: AccessibleButtonProps) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variantClasses = {
    primary: 'bg-[color:var(--primary)] hover:bg-[color:var(--accent)] text-white shadow-md hover:shadow-lg',
    secondary: 'bg-[color:var(--secondary)] hover:bg-[color:var(--primary)] text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-[color:var(--primary)] text-[color:var(--primary)] hover:bg-[color:var(--primary)] hover:text-white'
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      {...props}
    >
      {children}
    </button>
  );
};

// Accessible heading component with proper hierarchy
interface AccessibleHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const AccessibleHeading = ({ level, children, className = '', id }: AccessibleHeadingProps) => {
  const defaultClasses = {
    1: 'text-4xl md:text-5xl font-bold',
    2: 'text-3xl md:text-4xl font-bold', 
    3: 'text-2xl md:text-3xl font-semibold',
    4: 'text-xl md:text-2xl font-semibold',
    5: 'text-lg md:text-xl font-medium',
    6: 'text-base md:text-lg font-medium'
  };

  const props = {
    className: `${defaultClasses[level]} ${className}`,
    id
  };

  switch (level) {
    case 1:
      return <h1 {...props}>{children}</h1>;
    case 2:
      return <h2 {...props}>{children}</h2>;
    case 3:
      return <h3 {...props}>{children}</h3>;
    case 4:
      return <h4 {...props}>{children}</h4>;
    case 5:
      return <h5 {...props}>{children}</h5>;
    case 6:
      return <h6 {...props}>{children}</h6>;
    default:
      return <h2 {...props}>{children}</h2>;
  }
};

// High contrast mode detector
export const useHighContrastMode = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    setIsHighContrast(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsHighContrast(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return isHighContrast;
};

// Reduced motion detector
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
};

// Accessible card component
interface AccessibleCardProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

export const AccessibleCard = ({ 
  children, 
  href, 
  onClick, 
  className = '', 
  ariaLabel 
}: AccessibleCardProps) => {
  const baseClasses = `
    block p-6 bg-white rounded-xl border border-gray-200 shadow-sm
    transition-all duration-200 hover:shadow-md hover:border-gray-300
    focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:ring-offset-2
  `;

  if (href) {
    return (
      <a 
        href={href}
        className={`${baseClasses} ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${className} text-left w-full`}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }

  return (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );
};

// Accessible form components
interface AccessibleInputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
  helpText?: string;
  placeholder?: string;
  className?: string;
}

export const AccessibleInput = ({
  id,
  label,
  type = 'text',
  required = false,
  error,
  helpText,
  placeholder,
  className = ''
}: AccessibleInputProps) => {
  const inputClasses = `
    w-full px-3 py-2 border rounded-md transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-[color:var(--primary)] focus:border-transparent
    ${error ? 'border-red-500' : 'border-gray-300 hover:border-gray-400'}
    ${className}
  `;

  return (
    <div className="space-y-1">
      <label 
        htmlFor={id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        {required && <span className="text-red-500 ml-1" aria-label="verplicht">*</span>}
      </label>
      
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className={inputClasses}
        aria-describedby={`${id}-help ${error ? `${id}-error` : ''}`}
        aria-invalid={!!error}
      />
      
      {helpText && (
        <p id={`${id}-help`} className="text-sm text-gray-600">
          {helpText}
        </p>
      )}
      
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

// Live region for announcements
export const LiveRegion = ({ 
  message, 
  politeness = 'polite' 
}: { 
  message: string; 
  politeness?: 'polite' | 'assertive' 
}) => (
  <div
    className="sr-only"
    aria-live={politeness}
    aria-atomic="true"
  >
    {message}
  </div>
); 