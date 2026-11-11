"use client";
// Same idea as before: Threads uses WebGL, so we load it in the browser only.

import dynamic from "next/dynamic";

// Change the path if Threads is somewhere else (e.g. "@/components/ui/Threads")
const Threads = dynamic(() => import("@/components/Threads"), { ssr: false });

export function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <Threads
        color={[0.545, 0.361, 0.965]} // your violet #8B5CF6 (as 0 to 1 RGB)
        amplitude={1}
        distance={0}
        enableMouseInteraction={false}
      />
    </div>
  );
}