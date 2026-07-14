import React from "react";

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "light" | "blue" | "white";
  className?: string;
}

export function Logo({ variant = "blue", className = "", ...props }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`} {...props}>
      <img 
        src="/icon.png" 
        alt="Aurex Venture Logo" 
        className="h-10 w-auto object-contain invert-in-light transition-[filter] duration-300"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
      <span className="font-bold text-xl tracking-tight text-white">
        Aurex<span className="font-normal">Venture</span>
      </span>
    </div>
  );
}

