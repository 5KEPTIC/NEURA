"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const orbStates = [
  {
    label: "Calm",
    note: "Presence only",
    gradient:
      "radial-gradient(circle at 30% 30%, #fdfcf9 0%, #bedbca 34%, #729181 100%)",
    ring: "rgba(168, 213, 186, 0.22)",
    shadow: "rgba(90, 132, 112, 0.25)",
  },
  {
    label: "Drift",
    note: "Gentle awareness",
    gradient:
      "radial-gradient(circle at 30% 30%, #fffef8 0%, #d0dde4 34%, #8398a4 100%)",
    ring: "rgba(197, 215, 223, 0.24)",
    shadow: "rgba(92, 118, 132, 0.24)",
  },
  {
    label: "Intervention",
    note: "Pause suggested",
    gradient:
      "radial-gradient(circle at 30% 30%, #fffdf7 0%, #d9d9c7 34%, #938f70 100%)",
    ring: "rgba(235, 226, 213, 0.3)",
    shadow: "rgba(124, 110, 82, 0.24)",
  },
];

export function AmbientOrb() {
  const [stateIndex, setStateIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setStateIndex((current) => (current + 1) % orbStates.length);
    }, 3800);

    return () => window.clearInterval(timer);
  }, []);

  const activeState = orbStates[stateIndex];

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 flex items-end md:bottom-6 md:right-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-auto flex flex-col items-end gap-2"
      >
        <div className="section-ring glass-panel hidden rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-moss md:block">
          {activeState.label}
        </div>
        <motion.div
          key={activeState.label}
          initial={{ scale: 0.94, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/62 shadow-[0_18px_40px_rgba(22,54,45,0.12)] backdrop-blur-xl"
        >
          <div
            className="relative flex h-10 w-10 items-center justify-center rounded-full"
            style={{
              background: activeState.gradient,
              boxShadow: `0 0 0 6px ${activeState.ring}, 0 12px 26px ${activeState.shadow}`,
            }}
          >
            <span className="animate-breathe h-2.5 w-2.5 rounded-full bg-white/92" />
          </div>
          <span className="sr-only">{`Ambient guide ${activeState.label}: ${activeState.note}`}</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
