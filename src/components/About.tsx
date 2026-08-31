import { Compass, Lightbulb, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const POINTS = [
  {
    icon: Lightbulb,
    text: "I enjoy exploring ideas and turning them into something real.",
  },
  {
    icon: Compass,
    text: "I'm interested in technology, web development, digital products, creative experiences, and finding better ways to build things for the internet.",
  },
  {
    icon: Wrench,
    text: "I like learning through building, experimenting with new ideas, and improving things along the way.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-accent-600 dark:text-accent-400">
              ABOUT ME
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              More than
              <br />
              just code<span className="text-accent-500">.</span>
            </h2>
            <div
              aria-hidden
              className="mt-8 hidden h-px w-24 bg-gradient-to-r from-accent-500 to-transparent lg:block"
            />
          </Reveal>

          <div className="flex flex-col gap-4">
            {POINTS.map((point, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group flex gap-5 rounded-3xl border border-ink-200/70 bg-white/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-lg hover:shadow-accent-500/5 sm:p-7 dark:border-ink-800/70 dark:bg-ink-900/40 dark:hover:border-accent-700/60 dark:hover:shadow-accent-500/10">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-600/10 text-accent-600 transition-colors duration-300 group-hover:bg-accent-600 group-hover:text-white dark:text-accent-400">
                    <point.icon className="h-5 w-5" />
                  </span>
                  <p className="text-base leading-relaxed text-ink-700 sm:text-lg dark:text-ink-300">
                    {point.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
