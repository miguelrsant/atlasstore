"use client";

import PageTransition from "@/components/ui/page-transition";
import { useState } from "react";

export default function PageTransitionDemo() {
  const [isVisible, setIsVisible] = useState(false);

  const trigger = () => {
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 1200);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-background">
      <button
        onClick={trigger}
        className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium"
      >
        Trigger Transition
      </button>
      <PageTransition type="double-stairs" isVisible={isVisible} />
    </div>
  );
}
