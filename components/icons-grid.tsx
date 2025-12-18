"use client";

import { FeatureCard } from "@/components/feature-card";
import {
  Rocket,
  Robot,
  Code,
  Sparkle,
  ArrowsClockwise,
  Brain,
} from "@phosphor-icons/react";

export function IconsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { 
          icon: <Rocket className="w-8 h-8" weight="thin" />, 
          title: "AI Products", 
          description: "Building AI-native products that transform how businesses operate. From concept to launch, we create intelligent solutions that deliver real value.", 
          delay: 0 
        },
        { 
          icon: <Robot className="w-8 h-8" weight="thin" />, 
          title: "Agentic Workflows", 
          description: "Designing autonomous AI agents that handle complex workflows end-to-end. Intelligent systems that think, decide, and act independently.", 
          delay: 100 
        },
        { 
          icon: <ArrowsClockwise className="w-8 h-8" weight="thin" />, 
          title: "AI Automation", 
          description: "Streamlining operations with intelligent automation. We eliminate repetitive work and unlock human potential through strategic AI integration.", 
          delay: 200 
        },
        { 
          icon: <Code className="w-8 h-8" weight="thin" />, 
          title: "Vibe Coding", 
          description: "Rapid development through natural language and AI-assisted coding. Build faster, think bigger, ship products that feel inevitable.", 
          delay: 300 
        },
        { 
          icon: <Brain className="w-8 h-8" weight="thin" />, 
          title: "AI Strategy", 
          description: "Strategic positioning for organizations navigating the AI transition. We identify pathways that others miss and execute with precision.", 
          delay: 400 
        },
        { 
          icon: <Sparkle className="w-8 h-8" weight="thin" />, 
          title: "Innovation", 
          description: "Transforming ideas into reality. We work at the intersection of cutting-edge AI capabilities and business needs.", 
          delay: 500 
        },
      ].map((item, index) => (
        <FeatureCard
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          delay={item.delay}
        />
      ))}
    </div>
  );
}

