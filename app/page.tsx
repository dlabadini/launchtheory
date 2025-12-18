"use client";

import { Hero } from "@/components/hero";
import { SpaceBackground } from "@/components/space-background";
import { IconsGrid } from "@/components/icons-grid";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <SpaceBackground />
      <main className="relative">
        <Hero />
        
        {/* Capabilities Section */}
        <section className="relative py-40 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-24">
              <p 
                className={`text-xs text-neutral-600 mb-6 tracking-[0.2em] uppercase transition-all duration-1000 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Capabilities
              </p>
              <h2 
                className={`text-4xl md:text-5xl font-extralight mb-8 text-neutral-300 max-w-3xl mx-auto leading-tight transition-all duration-1000 delay-200 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                We operate at the intersection of strategy and execution
              </h2>
            </div>
            
            <IconsGrid />
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="relative py-40 px-4 border-t border-neutral-800/30">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-20 text-neutral-400">
              <div 
                className={`transition-all duration-1000 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <p className="text-xs text-neutral-600 mb-6 tracking-[0.2em] uppercase">
                  Approach
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-light text-neutral-400">
                  The post-AI world rewards those who understand the fundamental shifts, 
                  not just the surface-level changes. We work with organizations that 
                  recognize this is not about adopting tools—it's about evolving identity.
                </p>
              </div>
              
              <div 
                className={`transition-all duration-1000 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <p className="text-xs text-neutral-600 mb-6 tracking-[0.2em] uppercase">
                  Selection
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-light text-neutral-400">
                  We engage selectively. Our work requires alignment on vision, commitment 
                  to transformation, and recognition that the future belongs to those 
                  who prepare for it, not those who react to it.
                </p>
              </div>
              
              <div 
                className={`transition-all duration-1000 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <p className="text-xs text-neutral-600 mb-6 tracking-[0.2em] uppercase">
                  Discretion
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-light text-neutral-400">
                  Our engagements are conducted with the highest level of discretion. 
                  Success speaks for itself, and our clients' results remain their own.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="relative py-40 px-4 border-t border-neutral-800/30">
          <div className="container mx-auto max-w-2xl text-center">
            <p 
              className={`text-xs text-neutral-600 mb-8 tracking-[0.2em] uppercase transition-all duration-1000 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Inquiry
            </p>
            <p 
              className={`text-lg md:text-xl text-neutral-400 mb-16 leading-relaxed font-light max-w-lg mx-auto transition-all duration-1000 delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              For organizations ready to navigate the transition, 
              we maintain a limited capacity for new engagements.
            </p>
            <a
              href="mailto:hello@launchtheory.com"
              className={`group inline-flex items-center gap-3 text-sm text-neutral-500 hover:text-neutral-300 transition-all duration-500 tracking-wider uppercase border-b border-neutral-800 hover:border-neutral-600 pb-2 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span>Begin Inquiry</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-20 px-4 border-t border-neutral-800/30">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-xs text-neutral-700 mb-2">Launch Theory</p>
            <p className="text-xs text-neutral-800">© {new Date().getFullYear()}</p>
          </div>
        </footer>
      </main>
    </>
  );
}
