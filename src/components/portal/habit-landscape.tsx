"use client";

import { motion } from "framer-motion";

const structures = [
  {
    label: "Phone-free mornings",
    stage: "Foundation",
    note: "Early structure forming",
    position: "left-4 md:left-8",
    bodyClass: "h-24 w-24 md:h-28 md:w-28",
    variant: "foundation" as const,
  },
  {
    label: "Deep work block",
    stage: "Construction",
    note: "Rhythm becoming reliable",
    position: "left-1/2 -translate-x-1/2",
    bodyClass: "h-32 w-28 md:h-36 md:w-32",
    variant: "construction" as const,
  },
  {
    label: "Evening wind-down",
    stage: "Completed",
    note: "Habit feels natural",
    position: "right-4 md:right-8",
    bodyClass: "h-40 w-28 md:h-44 md:w-32",
    variant: "complete" as const,
  },
];

function StructureVisual({ variant }: { variant: (typeof structures)[number]["variant"] }) {
  if (variant === "foundation") {
    return (
      <>
        <div className="absolute inset-x-4 bottom-4 h-4 rounded-full bg-moss/80" />
        <div className="absolute inset-x-6 bottom-10 h-2 rounded-full bg-sage/70" />
        <div className="absolute left-6 top-5 h-10 w-2 rounded-full bg-white/60" />
        <div className="absolute right-6 top-9 h-8 w-2 rounded-full bg-white/55" />
      </>
    );
  }

  if (variant === "construction") {
    return (
      <>
        <div className="absolute inset-x-4 bottom-4 h-24 rounded-[20px_20px_12px_12px] bg-sage/70" />
        <div className="absolute inset-x-5 bottom-4 top-5 border-x border-dashed border-deep/18" />
        <div className="absolute inset-x-5 top-9 border-t border-dashed border-deep/18" />
        <div className="absolute inset-x-5 top-20 border-t border-dashed border-deep/18" />
      </>
    );
  }

  return (
    <>
      <div className="absolute inset-x-3 bottom-4 h-28 rounded-[24px_24px_14px_14px] bg-white/80" />
      <div className="absolute left-1/2 top-6 h-0 w-0 -translate-x-1/2 border-l-[24px] border-r-[24px] border-b-[22px] border-l-transparent border-r-transparent border-b-moss md:border-l-[28px] md:border-r-[28px] md:border-b-[24px]" />
      <div className="absolute left-1/2 top-[72px] h-10 w-8 -translate-x-1/2 rounded-t-[14px] bg-moss/85" />
      <div className="absolute left-6 top-[78px] h-4 w-4 rounded-full bg-sea/70" />
      <div className="absolute right-6 top-[78px] h-4 w-4 rounded-full bg-sea/70" />
    </>
  );
}

export function HabitLandscape() {
  return (
    <div
      role="img"
      aria-label="A calm landscape with a central avatar and habit structures growing from foundation to completion."
      className="section-ring soft-grid relative isolate h-[420px] w-full overflow-hidden rounded-[36px] border border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(255,255,255,0.38))] p-5 shadow-[0_32px_100px_rgba(22,54,45,0.12)] md:h-[480px] md:p-6"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,transparent_45%)] opacity-70" />
      <div className="absolute left-8 top-6 h-24 w-24 rounded-full bg-white/45 blur-xl md:h-28 md:w-28" />
      <div className="absolute right-10 top-12 h-20 w-20 rounded-full bg-sea/35 blur-xl" />

      <div className="absolute inset-x-0 bottom-0 h-40 rounded-t-[44px] bg-[linear-gradient(180deg,rgba(168,213,186,0.16),rgba(110,143,123,0.72))]" />
      <div className="absolute inset-x-[-8%] bottom-8 h-24 rounded-[50%] bg-[rgba(196,220,206,0.42)] blur-md" />
      <div className="absolute inset-x-[-4%] bottom-0 h-16 rounded-t-[60%] bg-[rgba(87,115,102,0.78)]" />

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-medium text-stone shadow-lg"
      >
        Calm interface
      </motion.div>
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 5.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute right-5 top-24 rounded-full border border-white/70 bg-white/65 px-4 py-2 text-xs font-medium text-stone shadow-lg"
      >
        Habit landscape
      </motion.div>

      <div className="absolute bottom-[7.25rem] left-1/2 h-28 w-[220px] -translate-x-1/2 rounded-[50%] border border-white/30 bg-[radial-gradient(circle,rgba(255,255,255,0.3),transparent_70%)] blur-sm" />

      {structures.map((structure) => (
        <div
          key={structure.label}
          className={`absolute bottom-24 z-10 ${structure.position} flex flex-col items-center gap-3`}
        >
          <div className="rounded-full border border-white/70 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-moss shadow-lg">
            {structure.stage}
          </div>
          <div
            className={`relative overflow-hidden rounded-[26px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.25))] ${structure.bodyClass}`}
          >
            <StructureVisual variant={structure.variant} />
          </div>
          <div className="w-28 text-center md:w-36">
            <p className="text-sm font-semibold text-deep">{structure.label}</p>
            <p className="mt-1 text-xs leading-5 text-stone">{structure.note}</p>
          </div>
        </div>
      ))}

      <div className="pointer-events-none absolute bottom-4 left-1/2 z-[1] flex -translate-x-1/2 flex-col items-center">
        <div className="relative h-11 w-11 rounded-full bg-deep/92 shadow-[0_10px_28px_rgba(22,54,45,0.18)]">
          <div className="absolute left-1/2 top-10 h-8 w-6 -translate-x-1/2 rounded-[16px_16px_12px_12px] bg-deep/92" />
          <div className="absolute inset-[-10px] rounded-full border border-white/35" />
        </div>
      </div>
    </div>
  );
}
