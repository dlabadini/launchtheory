"use client";

import { FeatureCard } from "@/components/feature-card";
import {
  Rocket,
  Planet,
  CirclesThree,
  ChartLineUp,
  Target,
  Gear,
} from "@phosphor-icons/react";

export function IconsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { icon: <Rocket className="w-8 h-8" weight="thin" />, title: "Trajectory", description: "Strategic positioning for organizations navigating the AI transition. We identify pathways that others miss.", delay: 0 },
        { icon: <Planet className="w-8 h-8" weight="thin" />, title: "Integration", description: "Seamless implementation of systems that feel native, not imposed. The future should feel inevitable.", delay: 100 },
        { icon: <Gear className="w-8 h-8" weight="thin" />, title: "Transformation", description: "Organizational evolution, not revolution. We guide the transition to AI-native operations.", delay: 200 },
        { icon: <CirclesThree className="w-8 h-8" weight="thin" />, title: "Optimization", description: "Continuous refinement of systems and strategies. Excellence is a process, not a destination.", delay: 300 },
        { icon: <ChartLineUp className="w-8 h-8" weight="thin" />, title: "Intelligence", description: "Data-driven insights that inform decision-making. We turn information into advantage.", delay: 400 },
        { icon: <Target className="w-8 h-8" weight="thin" />, title: "Precision", description: "Focused execution on what matters. We eliminate noise and amplify signal.", delay: 500 },
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

