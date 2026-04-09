"use client";

import { motion } from "framer-motion";

type InsightCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  delay?: number;
  className?: string;
};

export function InsightCard({
  eyebrow,
  title,
  description,
  delay = 0,
  className = "",
}: InsightCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`section-ring glass-panel rounded-[28px] p-6 text-left ${className}`}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-deep">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-stone md:text-base">
        {description}
      </p>
    </motion.article>
  );
}
