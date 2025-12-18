"use client";

import { Hero } from "@/components/hero";
import { SpaceBackground } from "@/components/space-background";
import { IconsGrid } from "@/components/icons-grid";
import { TerrainMap } from "@/components/terrain-map";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <SpaceBackground />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-neutral-900 focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        Skip to main content
      </a>
      <main id="main-content" className="relative">
        <Hero />
        
        {/* Navigation Visualization */}
        <section className="relative py-40 px-4 border-t border-neutral-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <p 
                className={`text-xs text-neutral-600 mb-6 tracking-[0.2em] uppercase transition-all duration-1000 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Navigation
              </p>
              <h2 
                className={`text-4xl md:text-5xl font-extralight mb-8 text-neutral-300 max-w-3xl mx-auto leading-tight transition-all duration-1000 delay-200 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Navigating new terrain
              </h2>
            </div>
            
            <div className="relative">
              <TerrainMap />
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="relative py-40 px-4 border-t border-neutral-800/30">
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
                AI products, agentic workflows, and intelligent automation
              </h2>
              <p 
                className={`text-lg text-neutral-500 max-w-2xl mx-auto mt-6 transition-all duration-1000 delay-300 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                We build the tools and systems that define the next generation of business
              </p>
            </div>
            
            <IconsGrid />
          </div>
        </section>

        {/* Offerings Section */}
        <section className="relative py-40 px-4 border-t border-neutral-800/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-24">
              <p 
                className={`text-xs text-neutral-600 mb-6 tracking-[0.2em] uppercase transition-all duration-1000 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Offerings
              </p>
              <h2 
                className={`text-4xl md:text-5xl font-extralight mb-8 text-neutral-300 max-w-3xl mx-auto leading-tight transition-all duration-1000 delay-200 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                What we build
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div 
                className={`transition-all duration-1000 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <h3 className="text-2xl font-light mb-4 text-neutral-300">AI Products</h3>
                <p className="text-neutral-500 leading-relaxed">
                  End-to-end AI product development. From ideation to deployment, we build intelligent 
                  solutions that solve real business problems. Products that learn, adapt, and deliver 
                  measurable value.
                </p>
              </div>
              
              <div 
                className={`transition-all duration-1000 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <h3 className="text-2xl font-light mb-4 text-neutral-300">Agentic Workflows</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Autonomous AI agents that handle complex, multi-step processes. Systems that think, 
                  decide, and act independently—transforming how work gets done. From customer service 
                  to data processing, agents that work 24/7.
                </p>
              </div>
              
              <div 
                className={`transition-all duration-1000 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <h3 className="text-2xl font-light mb-4 text-neutral-300">AI Automation</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Intelligent automation that goes beyond simple scripts. We identify repetitive processes, 
                  design AI-powered solutions, and eliminate manual work. Free your team to focus on 
                  what matters most.
                </p>
              </div>
              
              <div 
                className={`transition-all duration-1000 ${
                  mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <h3 className="text-2xl font-light mb-4 text-neutral-300">Vibe Coding</h3>
                <p className="text-neutral-500 leading-relaxed">
                  Rapid development through natural language and AI-assisted coding. Build faster, 
                  iterate quicker, ship products that feel inevitable. We leverage cutting-edge 
                  AI tools to accelerate development without sacrificing quality.
                </p>
              </div>
            </div>
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
                  The post-AI world rewards those who build AI-native products and workflows, 
                  not just those who adopt existing tools. We create agentic systems, 
                  intelligent automation, and leverage vibe coding to ship faster. 
                  This isn't about adopting—it's about creating.
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
                  We engage selectively. Our work requires organizations ready to build 
                  AI products from the ground up, implement agentic workflows, and embrace 
                  new development paradigms. The future belongs to those who create it.
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
              For organizations ready to build AI products, deploy agentic workflows, 
              and leverage intelligent automation, we maintain a limited capacity for new engagements.
            </p>
            <a
              href="mailto:hello@launchtheory.com"
              aria-label="Contact Launch Theory via email"
              className={`group inline-flex items-center gap-3 text-sm text-neutral-500 hover:text-neutral-300 transition-all duration-500 tracking-wider uppercase border-b border-neutral-800 hover:border-neutral-600 pb-2 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <span>Begin Inquiry</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-20 px-4 border-t border-neutral-800/30">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-xs text-neutral-700 mb-2">Launch Theory</p>
            <p className="text-xs text-neutral-800">© 2025</p>
          </div>
        </footer>
      </main>
    </>
  );
}
