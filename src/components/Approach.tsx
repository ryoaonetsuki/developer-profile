import { Hammer, Palette, Telescope, TrendingUp, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

interface Card {
  icon: LucideIcon;
  title: string;
  text: string;
}

const CARDS: Card[] = [
  {
    icon: Hammer,
    title: "Builder Mindset",
    text: "I prefer turning ideas into something real.",
  },
  {
    icon: Telescope,
    title: "Curiosity",
    text: "I'm always interested in exploring new tools and technology.",
  },
  {
    icon: Palette,
    title: "Creativity",
    text: "I enjoy combining technology with modern design and useful experiences.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    text: "Every project is an opportunity to learn something new.",
  },
];

export default function Approach() {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-accent-600 dark:text-accent-400">
            PERSONAL APPROACH
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            How I Think<span className="text-accent-500">.</span>
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 90}>
              <article className="group h-full rounded-3xl border border-ink-200/70 bg-white/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-xl hover:shadow-accent-500/8 dark:border-ink-800/70 dark:bg-ink-900/40 dark:hover:border-accent-700/60">
                <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-600/10 text-accent-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-accent-600 group-hover:text-white dark:text-accent-400">
                  <card.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="font-display text-sm font-bold tracking-[0.14em] uppercase">
                  {card.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600 dark:text-ink-400">
                  {card.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
