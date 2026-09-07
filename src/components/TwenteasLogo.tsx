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
    sm: 'h-10 px-3 py-1.5',
    md: 'h-14 px-5 py-2.5',
    lg: 'h-20 px-7 py-4',
    xl: 'h-28 md:h-36 px-8 py-5',
  };

  const bgStyle =
    variant === 'boxed'
      ? 'bg-[#281811] shadow-xl border border-[#3A2419]/60 rounded-md'
      : '';

  return (
    <div
      className={`inline-flex flex-col items-center justify-center text-center select-none ${bgStyle} ${sizeClasses[size]} ${className}`}
    >
      <svg
        viewBox="0 0 460 140"
        className="w-auto h-full max-w-full drop-shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Twenteas Cafeteria Logo"
      >
        <defs>
          <filter id="woodcut-roughness" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {variant === 'boxed' && (
          <rect width="460" height="140" fill="#281811" rx="4" />
        )}

        <g filter="url(#woodcut-roughness)">
          <path d="M 22 20 H 60 V 38 H 47 V 98 H 35 V 38 H 22 Z" fill="#FAF4E8" />
          <path d="M 65 20 H 77 L 89 74 L 100 20 H 112 L 123 74 L 134 20 H 146 L 131 98 H 116 L 106 50 L 95 98 H 80 Z" fill="#FAF4E8" />
          <path d="M 152 20 H 186 V 36 H 165 V 50 H 182 V 65 H 165 V 82 H 188 V 98 H 152 Z" fill="#FAF4E8" />
          <path d="M 194 20 H 207 L 230 70 V 20 H 242 V 98 H 229 L 206 48 V 98 H 194 Z" fill="#FAF4E8" />
          <path d="M 248 20 H 290 V 38 H 263 V 98 H 263 V 38 H 248 Z" fill="#FCDDA7" />
          <path d="M 296 20 H 332 V 36 H 309 V 50 H 328 V 65 H 309 V 82 H 334 V 98 H 296 Z" fill="#FCDDA7" />
          <path d="M 352 20 H 369 L 389 98 H 374 L 369 76 H 352 L 347 98 H 332 Z M 356 61 H 365 L 361 38 Z" fill="#FAF4E8" />
          <path d="M 395 38 C 395 26 405 20 422 20 C 438 20 448 27 448 39 H 434 C 434 32 429 29 421 29 C 413 29 408 32 408 38 C 408 44 413 47 425 50 C 440 54 449 61 449 74 C 449 88 438 98 421 98 C 402 98 393 88 393 74 H 407 C 407 83 413 88 421 88 C 430 88 435 84 435 76 C 435 70 429 66 417 63 C 402 59 395 52 395 38 Z" fill="#FAF4E8" />
        </g>

        <text
          x="230"
          y="126"
          fill="#FAF4E8"
          fontSize="14"
          fontFamily="'Plus Jakarta Sans', sans-serif"
          fontWeight="300"
          letterSpacing="11"
          textAnchor="middle"
          opacity="0.95"
        >
          CAFETERIA
        </text>
      </svg>
    </div>
  );
};
