import { Flame, Hammer, Rocket, Telescope } from "lucide-react";
import Reveal from "./Reveal";

const STEPS = [
  {
    icon: Telescope,
    label: "The spark",
    text: "Started with curiosity about websites and technology.",
  },
  {
    icon: Hammer,
    label: "First builds",
    text: "Began experimenting, learning, and building.",
  },
  {
    icon: Rocket,
    label: "Going real",
    text: "Started creating real digital experiences and web-based systems.",
  },
  {
    icon: Flame,
    label: "Right now",
    text: "Continues exploring new technology, ideas, and digital products.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 max-w-2xl sm:mb-20">
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-accent-600 dark:text-accent-400">
            JOURNEY
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Journey So Far<span className="text-accent-500">.</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute top-6 bottom-6 left-[27px] w-px bg-gradient-to-b from-accent-500/60 via-ink-300 to-transparent lg:top-[27px] lg:right-6 lg:bottom-auto lg:left-6 lg:h-px lg:w-auto lg:bg-gradient-to-r dark:via-ink-700"
          />

          <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.label} as="li" delay={i * 120}>
                <div className="flex gap-6 lg:flex-col lg:gap-7">
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-ink-200 bg-ink-50 text-accent-600 shadow-sm transition-transform duration-300 hover:scale-105 dark:border-ink-800 dark:bg-ink-900 dark:text-accent-400">
                    <step.icon className="h-6 w-6" />
                  </span>
                  <div className="pt-1 lg:pt-0">
                    <p className="mb-1.5 text-[11px] font-semibold tracking-[0.2em] text-ink-400 uppercase dark:text-ink-500">
                      {String(i + 1).padStart(2, "0")} — {step.label}
                    </p>
                    <p className="max-w-xs text-base leading-relaxed text-ink-700 sm:text-lg dark:text-ink-300">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={200} className="mt-16 sm:mt-24">
          <p className="text-center font-display text-2xl font-bold tracking-tight sm:text-4xl">
            Still building<span className="text-accent-500">.</span> Still learning
            <span className="text-accent-500">.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
