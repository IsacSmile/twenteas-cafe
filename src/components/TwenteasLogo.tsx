import React from 'react';

interface TwenteasLogoProps {
  className?: string;
  variant?: 'boxed' | 'transparent' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const TwenteasLogo: React.FC<TwenteasLogoProps> = ({
  className = '',
  variant = 'boxed',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-20 sm:h-24',
    xl: 'h-32 sm:h-44 md:h-52',
  };

  const bgStyle =
    variant === 'boxed'
      ? 'bg-[#281811] shadow-2xl border border-[#3A2419]/70 rounded-md p-1 sm:p-2'
      : '';

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${bgStyle} ${sizeClasses[size]} ${className}`}
    >
      <img
        src="/logo.png"
        alt="Twenteas Cafeteria Logo"
        className="h-full w-auto object-contain max-w-full rounded-[2px]"
      />
    </div>
  );
};
