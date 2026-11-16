import React from 'react';
import { ArrowUpRight, ShoppingBag } from 'lucide-react';
import { WHOP_PURCHASE_URL, handleWhopRedirect } from '../../config/constants';

interface WhopButtonProps {
  children?: React.ReactNode;
  variant?: 'lime' | 'dark' | 'outline' | 'pill-dark' | 'crimson';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
  iconType?: 'arrow' | 'cart';
  fullWidth?: boolean;
  href?: string;
  onClick?: () => void;
}

export const WhopButton: React.FC<WhopButtonProps> = ({
  children = 'Get Titan on Whop',
  variant = 'lime',
  size = 'md',
  className = '',
  showIcon = true,
  iconType = 'arrow',
  fullWidth = false,
  href = WHOP_PURCHASE_URL,
  onClick
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If custom action supplied (like analytics), call it
    if (onClick) {
      onClick();
    }
    // Explicitly navigate in same browser tab
    e.preventDefault();
    handleWhopRedirect(href);
  };

  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-[0.98] select-none cursor-pointer";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs rounded-full gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-full gap-2",
    lg: "px-6 py-3.5 text-base rounded-full gap-2.5 shadow-md",
  };

  const variantStyles = {
    lime: "bg-brand-lime text-zinc-950 hover:bg-brand-lime-hover hover:shadow-glow-lime hover:-translate-y-0.5 font-bold shadow-sm",
    crimson: "bg-[#e50914] text-white hover:bg-[#ff1e27] hover:shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:-translate-y-0.5 font-bold shadow-sm",
    dark: "bg-zinc-900 text-white hover:bg-zinc-800 hover:-translate-y-0.5 border border-zinc-800 shadow-sm",
    'pill-dark': "bg-zinc-900 text-white hover:bg-zinc-800 hover:text-brand-lime text-xs font-semibold px-4 py-2 rounded-full",
    outline: "border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-950",
  };

  return (
    <a
      href={href}
      target="_self"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      title="Secure checkout via Whop"
    >
      <span>{children}</span>
      {showIcon && (
        iconType === 'arrow' ? (
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        ) : (
          <ShoppingBag className="w-4 h-4" />
        )
      )}
    </a>
  );
};
