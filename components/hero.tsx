"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orb */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 blur-3xl animate-float opacity-50" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated title with gradient */}
          <h1 
            className={`text-7xl md:text-9xl font-extralight mb-12 text-white tracking-tighter transition-opacity duration-1000 ${
              mounted ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: 'linear-gradient(180deg, #ffffff 0%, #a3a3a3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.05em',
            }}
          >
            Launch Theory
          </h1>
          
          {/* Subtitle with fade-in */}
          <p 
            className={`text-xl md:text-2xl text-neutral-400 mb-20 max-w-2xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Building AI products, agentic workflows, and intelligent automation.
            <br className="hidden md:block" />
            <span className="text-neutral-500">We create the future of work.</span>
          </p>
          
          {/* Subtle indicators with staggered animation */}
          <div 
            className={`flex flex-wrap items-center justify-center gap-6 md:gap-8 text-xs md:text-sm text-neutral-600 transition-all duration-1000 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="group flex items-center gap-2 hover:text-neutral-400 transition-colors duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-neutral-500 transition-colors" />
              AI Products
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-800" />
            <span className="group flex items-center gap-2 hover:text-neutral-400 transition-colors duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-neutral-500 transition-colors" />
              Agentic Workflows
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-800" />
            <span className="group flex items-center gap-2 hover:text-neutral-400 transition-colors duration-300">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-neutral-500 transition-colors" />
              Vibe Coding
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border border-neutral-800 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-neutral-700 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
