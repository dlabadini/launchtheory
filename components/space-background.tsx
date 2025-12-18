"use client";

import { useEffect, useState } from "react";

export function SpaceBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 -z-10 bg-neutral-950" />
    );
  }

  // Generate stable star positions - more subtle and sophisticated
  const stars = Array.from({ length: 80 }, (_, i) => {
    const seed = i * 0.01;
    return {
      id: i,
      size: (Math.sin(seed) * 0.2 + 0.4) * 0.6,
      left: (Math.cos(seed * 10) * 0.5 + 0.5) * 100,
      top: (Math.sin(seed * 7) * 0.5 + 0.5) * 100,
      delay: (Math.sin(seed * 3) * 0.5 + 0.5) * 5,
      duration: (Math.cos(seed * 5) * 0.5 + 0.5) * 5 + 4,
      opacity: 0.08 + Math.sin(seed * 2) * 0.05,
    };
  });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Deep gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-950" />
      
      {/* Subtle animated stars */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-neutral-500"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              opacity: star.opacity,
              animation: `pulse ${star.duration}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Subtle radial gradient for depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-neutral-950/50" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 100%)',
        }}
      />
    </div>
  );
}
