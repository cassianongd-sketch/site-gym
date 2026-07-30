import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true, size = 'md' }) => {
  const sizeMap = {
    sm: { circle: 'w-8 h-8', text: 'text-lg', badge: 'scale-90' },
    md: { circle: 'w-11 h-11', text: 'text-2xl', badge: 'scale-100' },
    lg: { circle: 'w-16 h-16', text: 'text-4xl', badge: 'scale-125' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Circular Emblem inspired by the official SPORT GYM badge */}
      <div className={`relative flex items-center justify-center rounded-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 border-2 border-blue-500/60 shadow-[0_0_15px_rgba(21,101,255,0.4)] transition-all duration-300 group-hover:border-blue-400 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] ${currentSize.circle}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer Ring */}
          <circle cx="50" cy="50" r="46" stroke="#1565FF" strokeWidth="2.5" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="40" stroke="#00F0FF" strokeWidth="1.5" opacity="0.8" />
          
          {/* Squat Lifter Barbell Silhouette */}
          <g fill="#F8FAFC">
            {/* Barbell */}
            <rect x="20" y="32" width="60" height="3" rx="1.5" fill="#38BDF8" />
            {/* Plates Left */}
            <rect x="18" y="24" width="4" height="19" rx="1" fill="#1565FF" />
            <rect x="14" y="27" width="3" height="13" rx="1" fill="#38BDF8" />
            {/* Plates Right */}
            <rect x="78" y="24" width="4" height="19" rx="1" fill="#1565FF" />
            <rect x="83" y="27" width="3" height="13" rx="1" fill="#38BDF8" />
            
            {/* Lifter Body in Squat position */}
            {/* Head */}
            <circle cx="50" cy="27" r="4" fill="#F8FAFC" />
            {/* Torso */}
            <path d="M46 32 H54 L52 46 H48 Z" fill="#F8FAFC" />
            {/* Thighs in deep squat */}
            <path d="M48 46 L38 52 L42 62 L48 54 Z" fill="#E2E8F0" />
            <path d="M52 46 L62 52 L58 62 L52 54 Z" fill="#E2E8F0" />
            {/* Floor Base */}
            <path d="M30 65 Q50 68 70 65" stroke="#1565FF" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </svg>

        {/* Subtle LED glow dot */}
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-blue-400 rounded-full animate-ping opacity-75"></span>
        <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
      </div>

      {showText && (
        <div className="flex flex-col tracking-wider leading-none">
          <div className="flex items-center gap-1.5">
            <span className={`font-extrabold tracking-tighter text-white font-display ${currentSize.text}`}>
              SPORT
            </span>
            <span className={`font-extrabold text-blue-500 font-display ${currentSize.text} text-glow-blue`}>
              GYM
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-[0.25em] text-slate-400 font-semibold">
            Itaquaquecetuba • SP
          </span>
        </div>
      )}
    </div>
  );
};
