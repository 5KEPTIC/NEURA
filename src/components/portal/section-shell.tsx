"use client";

import { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  centered?: boolean;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  centered = false,
}: SectionShellProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-12 md:px-8 md:py-16">
      <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-moss">
          {eyebrow}
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-deep md:text-5xl">
          <span className="text-balance">{title}</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-stone md:text-lg">
          {description}
        </p>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}
