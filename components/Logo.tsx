import React from 'react';

// Brand blue from the STEM Teacher Academy logo. Kept separate from sta-primary
// so palette swaps never recolor the mark.
export const LOGO_BLUE = '#4b4ef7';

// The three-shard mark, traced from the logo artwork. A matching round stroke
// softens the corners the way the original does.
export const LogoMark: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 340 270" className={className} aria-hidden="true" focusable="false">
    <g fill={LOGO_BLUE} stroke={LOGO_BLUE} strokeWidth="8" strokeLinejoin="round">
      <polygon points="26,77 310,4 302,102 38,123" />
      <polygon points="5,141 330,117 332,138 23,225" />
      <polygon points="138,210 195,196 223,264 132,265" />
    </g>
  </svg>
);

interface LogoProps {
  // Wordmark color; the mark stays brand blue either way.
  tone?: 'dark' | 'light';
  size?: 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ tone = 'dark', size = 'md', className = '' }) => (
  <span className={`inline-flex items-center ${size === 'lg' ? 'gap-3' : 'gap-2.5'} ${className}`}>
    <LogoMark className={`${size === 'lg' ? 'h-10' : 'h-8'} w-auto shrink-0`} />
    <span
      className={`font-medium tracking-tight whitespace-nowrap ${size === 'lg' ? 'text-2xl' : 'text-xl'} ${
        tone === 'light' ? 'text-white' : 'text-[#141414]'
      }`}
    >
      STEM Teacher Academy
    </span>
  </span>
);
