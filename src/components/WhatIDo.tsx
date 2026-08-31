import {
  Boxes,
  Braces,
  Globe,
  LayoutTemplate,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";

interface Area {
  icon: LucideIcon;
  title: string;
  text: string;
}

const AREAS: Area[] = [
  {
    icon: Globe,
    title: "Web Development",
    text: "Building modern, responsive websites and digital experiences.",
  },
  {
    icon: Boxes,
    title: "Digital Products",
    text: "Turning ideas into useful digital products and online experiences.",
  },
  {
    icon: Braces,
    title: "PHP Development",
    text: "Creating custom PHP applications and powerful backend systems.",
  },
  {
    icon: LayoutTemplate,
    title: "UI & Digital Experiences",
    text: "Creating clean, modern, and user-friendly interfaces.",
  },
  {
    icon: Workflow,
    title: "Automation & APIs",
    text: "Working with automation, integrations, APIs, and connected digital systems.",
  },
  {
    icon: Sparkles,
    title: "AI & Modern Technology",
    text: "Exploring modern AI tools and creative technology.",
  },
];

export default function WhatIDo() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-accent-600 dark:text-accent-400">
            WHAT I DO
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            The things I love working on<span className="text-accent-500">.</span>
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {AREAS.map((area, i) => (
            <Reveal key={area.title} delay={(i % 3) * 90}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-ink-200/70 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-xl hover:shadow-accent-500/8 sm:p-8 dark:border-ink-800/70 dark:bg-ink-900/40 dark:hover:border-accent-700/60 dark:hover:shadow-accent-500/10">
                <div
                  aria-hidden
                  className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-accent-500/0 blur-3xl transition-all duration-500 group-hover:bg-accent-500/15"
                />
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-ink-200/80 bg-ink-50 text-ink-700 transition-all duration-300 group-hover:border-accent-500 group-hover:bg-accent-600 group-hover:text-white dark:border-ink-800 dark:bg-ink-850 dark:text-ink-300">
                  <area.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="font-display text-sm font-bold tracking-[0.14em] uppercase">
                  {area.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600 dark:text-ink-400">
                  {area.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
