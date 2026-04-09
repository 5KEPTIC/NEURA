"use client";

import { motion } from "framer-motion";
import {
  BatteryLow,
  BellRing,
  BookHeart,
  BrainCircuit,
  Building2,
  Eye,
  Flame,
  Leaf,
  LockKeyhole,
  Orbit,
  PauseCircle,
  Radar,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
} from "lucide-react";
import { AmbientOrb } from "@/components/portal/ambient-orb";
import { HabitLandscape } from "@/components/portal/habit-landscape";
import { InsightCard } from "@/components/portal/insight-card";
import { SectionShell } from "@/components/portal/section-shell";
import {
  featureCards,
  flowStages,
  heroMetrics,
  insightCards,
  memoryJournalEntries,
  memorySystemPoints,
  navItems,
  privacyPoints,
  problemCards,
  solutionCards,
  steps,
  systemLayers,
  visionCards,
} from "@/lib/portal-content";

const problemIcons = [Flame, BellRing, BatteryLow];
const solutionIcons = [Leaf, BrainCircuit, SlidersHorizontal];
const stepIcons = [Radar, BrainCircuit, BookHeart, Sparkles];
const featureIcons = [Building2, Orbit, PauseCircle, BookHeart];
const privacyIcons = [ShieldCheck, LockKeyhole, Eye];
const visionIcons = [Leaf, Target];

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: {
    duration: 0.72,
    delay,
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  },
});

export function LandingPage() {
  return (
    <div className="relative overflow-x-hidden">
      <AmbientOrb />

      <header className="sticky top-0 z-40 border-b border-white/30 bg-white/45 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-deep text-sm font-semibold text-white shadow-lg">
              NB
            </span>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">
                NeuroBalance AI
              </p>
              <p className="text-sm text-stone">Calm digital well-being portal</p>
            </div>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-stone md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-deep">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section
          id="top"
          className="mx-auto grid w-full max-w-6xl gap-10 px-6 pb-12 pt-12 md:px-8 lg:min-h-[calc(100vh-9rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:pt-16"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/65 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-moss shadow-lg">
              Ambient AI companion
            </div>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-deep md:text-7xl">
              Balance your digital life without disruption.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone md:text-xl">
              NeuroBalance AI is a calm, adaptive interface for healthier technology habits.
              It creates awareness through subtle behavioral cues instead of hard limits or
              noisy reward loops.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full bg-deep px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(22,54,45,0.22)] transition hover:-translate-y-0.5"
              >
                Explore the concept
              </a>
              <a
                href="#solution"
                className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/65 px-6 py-3 text-sm font-semibold text-deep transition hover:-translate-y-0.5"
              >
                View the system approach
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div
                  key={metric}
                  className="section-ring glass-panel rounded-[24px] px-4 py-4 text-sm font-medium text-stone"
                >
                  <span className="text-deep">{metric}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:justify-self-end">
            <HabitLandscape />
          </div>
        </section>

        <SectionShell
          id="problem"
          eyebrow="The Tension"
          title="Technology overuse is rarely loud at first. It becomes exhausting over time."
          description="The problem is not only screen time. It is the constant interruption of attention, the erosion of recovery, and the feeling that digital life is happening faster than conscious choice."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {problemCards.map((card, index) => {
              const Icon = problemIcons[index];

              return (
                <motion.article
                  key={card.title}
                  {...reveal(index * 0.08)}
                  className="section-ring glass-panel rounded-[30px] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/75 text-deep shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-deep">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone md:text-base">
                    {card.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell
          id="solution"
          eyebrow="The Response"
          title="A gentle intelligence that helps the user notice, reflect, and choose."
          description="NeuroBalance AI does not aim to punish behavior. It creates just enough distance from impulse to make intentional action possible."
        >
          <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <div className="grid gap-5">
              {solutionCards.map((card, index) => {
                const Icon = solutionIcons[index];

                return (
                  <motion.article
                    key={card.title}
                    {...reveal(index * 0.08)}
                    className="section-ring glass-panel rounded-[28px] p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/75 text-deep shadow-lg">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-deep">
                          {card.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-stone md:text-base">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>

            <motion.div
              {...reveal(0.15)}
              className="section-ring glass-panel rounded-[32px] p-6 md:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">
                Unified intelligence system
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-deep md:text-3xl">
                One calm companion, several layers working quietly together.
              </h3>
              <div className="mt-8 space-y-4">
                {systemLayers.map((layer, index) => (
                  <div
                    key={layer.title}
                    className="rounded-[24px] border border-white/65 bg-white/55 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage/45 text-sm font-semibold text-deep">
                        0{index + 1}
                      </div>
                      <h4 className="text-lg font-semibold text-deep">{layer.title}</h4>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-stone">{layer.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </SectionShell>

        <SectionShell
          eyebrow="Impulse Distance Engine"
          title="Impulse, slowed just enough to become a decision."
          description="Instead of blocking apps outright, the system inserts a small reflective layer between urge and action. That tiny pause is where choice returns."
          centered
        >
          <div className="section-ring glass-panel rounded-[36px] px-5 py-8 md:px-8 md:py-10">
            <div className="grid gap-4 md:grid-cols-4">
              {flowStages.map((stage, index) => (
                <motion.div
                  key={stage}
                  {...reveal(index * 0.08)}
                  className="rounded-[26px] border border-white/65 bg-white/60 p-6 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage/42 text-sm font-semibold text-deep">
                    0{index + 1}
                  </div>
                  <p className="mt-4 text-lg font-semibold text-deep">{stage}</p>
                  <p className="mt-2 text-sm leading-7 text-stone">
                    {index === 0 && "A reactive urge appears during a familiar scroll loop."}
                    {index === 1 && "The system introduces a gentle delay or framing cue."}
                    {index === 2 && "Context returns: energy, intention, and recent patterns."}
                    {index === 3 && "The user continues or stops with conscious control."}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="how-it-works"
          eyebrow="How It Works"
          title="A four-step loop designed for clarity instead of compulsion."
          description="Every layer of the experience focuses on helping the user understand patterns, not just measure them."
        >
          <div className="grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = stepIcons[index];

              return (
                <motion.article
                  key={step.title}
                  {...reveal(index * 0.08)}
                  className="section-ring glass-panel rounded-[28px] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/75 text-deep shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-moss">
                    Step 0{index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-deep">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone">{step.description}</p>
                </motion.article>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell
          id="features"
          eyebrow="Features"
          title="Minimal surfaces, meaningful guidance."
          description="Each feature is designed to reinforce agency and emotional clarity while keeping the interface visually quiet."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {featureCards.map((feature, index) => {
              const Icon = featureIcons[index];

              return (
                <motion.article
                  key={feature.title}
                  {...reveal(index * 0.08)}
                  className="section-ring glass-panel rounded-[30px] p-6 md:p-7"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/75 text-deep shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-deep">
                        {feature.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-stone md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell
          id="memory"
          eyebrow="Reflective Memory"
          title="Daily journaling and AI memory create a gentler feedback loop."
          description="NeuroBalance AI does more than log behavior. It learns from short reflections, remembers what improved well-being, and brings that context back when the user needs it."
        >
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              {...reveal(0.08)}
              className="section-ring glass-panel rounded-[32px] p-6 md:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">
                Daily journaling
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-deep md:text-3xl">
                Small check-ins help the system understand how technology use actually felt.
              </h3>
              <div className="mt-6 space-y-4">
                {memoryJournalEntries.map((entry, index) => (
                  <motion.div
                    key={entry.title}
                    {...reveal(0.12 + index * 0.06)}
                    className="rounded-[24px] border border-white/65 bg-white/58 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-moss">
                      {entry.label}
                    </p>
                    <h4 className="mt-2 text-lg font-semibold text-deep">{entry.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-stone">{entry.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-5">
              <motion.div
                {...reveal(0.12)}
                className="section-ring glass-panel rounded-[32px] p-6 md:p-8"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">
                  AI memory system
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-deep md:text-3xl">
                  Reflections become useful memory instead of forgotten notes.
                </h3>
                <div className="mt-6 rounded-[28px] border border-white/65 bg-white/68 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
                    Example memory
                  </p>
                  <p className="mt-4 text-xl leading-9 text-deep">
                    &ldquo;You felt better when you stopped using your phone earlier
                    yesterday.&rdquo;
                  </p>
                </div>
                <div className="mt-5 space-y-3">
                  {memorySystemPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 rounded-[22px] border border-white/55 bg-white/50 px-4 py-3"
                    >
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-sage" />
                      <p className="text-sm leading-7 text-stone">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <div className="grid gap-5 md:grid-cols-2">
                {insightCards.map((insight, index) => (
                  <InsightCard
                    key={insight.title}
                    eyebrow={insight.eyebrow}
                    title={insight.title}
                    description={insight.description}
                    delay={0.16 + index * 0.08}
                  />
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          id="privacy"
          eyebrow="Privacy"
          title="Built around trust, control, and quiet processing."
          description="A calm product cannot depend on hidden extraction. Privacy is part of the experience, not a separate promise."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {privacyPoints.map((point, index) => {
              const Icon = privacyIcons[index];

              return (
                <motion.article
                  key={point.title}
                  {...reveal(index * 0.08)}
                  className="section-ring glass-panel rounded-[30px] p-6"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/75 text-deep shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-deep">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-stone md:text-base">
                    {point.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </SectionShell>

        <SectionShell
          id="vision"
          eyebrow="Vision"
          title="Toward a future where technology respects attention."
          description="NeuroBalance AI imagines a gentler relationship between people and devices: less compulsion, more clarity, and AI that supports human agency."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {visionCards.map((card, index) => {
              const Icon = visionIcons[index];

              return (
                <motion.article
                  key={card.title}
                  {...reveal(index * 0.08)}
                  className="section-ring glass-panel rounded-[32px] p-6 md:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/75 text-deep shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold tracking-tight text-deep">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone md:text-base">
                    {card.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </SectionShell>
      </main>

      <footer className="mx-auto mt-6 w-full max-w-6xl px-6 pb-10 pt-2 md:px-8">
        <div className="section-ring glass-panel rounded-[30px] px-6 py-5 md:flex md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-moss">
              NeuroBalance AI
            </p>
            <p className="mt-2 text-sm leading-7 text-stone">
              A concept portal for calm, non-addictive technology.
            </p>
          </div>
          <p className="mt-4 text-sm text-stone md:mt-0">
            Designed for clarity, balance, and human-centered AI.
          </p>
        </div>
      </footer>
    </div>
  );
}
