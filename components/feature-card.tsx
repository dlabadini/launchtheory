"use client";

import { type ReactNode, useState } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative p-8 rounded-lg bg-neutral-900/40 border border-neutral-800/50 hover:border-neutral-700/70 transition-all duration-500 overflow-hidden animate-fade-in-up"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {/* Shimmer effect on hover */}
      <div 
        className={`absolute inset-0 shimmer transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Gradient border glow on hover */}
      <div 
        className={`absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 transition-opacity duration-500 pointer-events-none ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative z-10">
        <div className="mb-6 text-neutral-600 group-hover:text-neutral-400 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
        <h3 className="text-lg font-light mb-3 text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
