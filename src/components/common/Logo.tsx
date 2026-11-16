import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md',
  showTagline = false
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Icon Matching Mockup */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center flex-shrink-0`}>
        <svg 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          {/* Outer geometric shield / rounded box */}
          <rect width="40" height="40" rx="10" fill="#0f1217" />
          
          {/* Primary 'R' spine in white */}
          <path 
            d="M12 10H22C25.3137 10 28 12.6863 28 16C28 19.3137 25.3137 22 22 22H17V30H12V10Z" 
            fill="#ffffff" 
          />
          <path 
            d="M17 14.5V17.5H21.5C22.3284 17.5 23 16.8284 23 16C23 15.1716 22.3284 14.5 21.5 14.5H17Z" 
            fill="#0f1217" 
          />
          
          {/* Electric Lime Accent Wing on the Leg of 'R' */}
          <path 
            d="M20 20L28 30H22.5L16.5 22.5L20 20Z" 
            fill="#a3e635" 
          />
          
          {/* Electric Lime Top Accent Dot */}
          <circle cx="28" cy="11" r="2.5" fill="#a3e635" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`font-bold tracking-tight text-zinc-950 dark:text-white font-sans flex items-center ${textSizes[size]}`}>
          Roynix<span className="font-extrabold text-zinc-900 dark:text-zinc-100">BotWorks</span>
        </span>
        {showTagline && (
          <span className="text-[11px] font-medium tracking-wide text-zinc-500 uppercase -mt-0.5">
            Powerful Bots. Smarter Communities.
          </span>
        )}
      </div>
    </div>
  );
};
