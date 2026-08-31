import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { PROFILE_IMAGE, STORE_URL, safeHref } from "../config";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 sm:pt-[72px]">
      {/* Ambient background */}
      <div
        aria-hidden
        className="hero-grid pointer-events-none absolute inset-0 text-ink-900/[0.035] dark:text-white/[0.03]"
        style={{
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 35%, black, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 35%, black, transparent)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px] dark:bg-accent-600/15"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-14 px-5 pt-14 pb-20 sm:px-8 sm:pt-20 lg:flex-row lg:items-center lg:gap-20 lg:pt-24 lg:pb-32">
        {/* Copy */}
        <div className="order-2 flex-1 text-center lg:order-1 lg:text-left">
          <p className="reveal is-visible mb-6 inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-4 py-1.5 text-[11px] font-semibold tracking-[0.22em] text-ink-600 sm:text-xs dark:border-ink-800 dark:bg-ink-900/70 dark:text-ink-400">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            DIGITAL CREATOR / WEB BUILDER
          </p>

          <p className="font-display text-lg font-medium text-ink-500 sm:text-xl dark:text-ink-400">
            Hey, I&rsquo;m Salman.
          </p>

          <h1 className="mt-3 font-display text-[2.75rem] leading-[1.02] font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Building things
            <br />
            for the{" "}
            <span className="relative inline-block text-accent-600 dark:text-accent-400">
              internet.
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 w-full text-accent-500/50"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9c40-6 120-8 196-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-md text-base leading-relaxed text-ink-600 sm:text-lg lg:mx-0 dark:text-ink-400">
            I enjoy turning ideas into modern websites, digital experiences, and useful online
            products.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#about"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-ink-900/20 active:scale-[0.98] sm:w-auto dark:bg-white dark:text-ink-950 dark:hover:shadow-white/10"
            >
              Explore More
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href={safeHref(STORE_URL)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-500 hover:shadow-xl hover:shadow-accent-500/30 active:scale-[0.98] sm:w-auto"
            >
              Visit My Store
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Portrait */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            {/* Soft glow behind portrait */}
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-accent-500/20 via-transparent to-accent-500/10 blur-2xl"
            />

            {/* Frame */}
            <div className="group relative h-64 w-64 rotate-2 rounded-[2.25rem] border border-ink-200/80 bg-gradient-to-b from-accent-100 to-ink-100 p-2 shadow-2xl shadow-ink-900/10 transition-transform duration-500 hover:rotate-0 sm:h-80 sm:w-80 lg:h-[380px] lg:w-[380px] dark:border-ink-800 dark:from-ink-850 dark:to-ink-900 dark:shadow-black/40">
              <img
                src={PROFILE_IMAGE}
                alt="Portrait of Salman"
                width={380}
                height={380}
                fetchPriority="high"
                className="h-full w-full rounded-[1.75rem] object-cover"
              />
              {/* Inner ring */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-2 rounded-[1.75rem] ring-1 ring-white/20 ring-inset"
              />
            </div>

            {/* Floating badge */}
            <div className="animate-float absolute -bottom-4 -left-4 flex items-center gap-2.5 rounded-2xl border border-ink-200/80 bg-white/90 px-4 py-3 shadow-xl shadow-ink-900/10 backdrop-blur-md sm:-left-8 dark:border-ink-800 dark:bg-ink-900/90 dark:shadow-black/40">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-600/10 text-accent-600 dark:text-accent-400">
                <Sparkles className="h-4.5 w-4.5" />
              </span>
              <div className="text-left">
                <p className="font-display text-sm font-semibold leading-tight">Salman</p>
                <p className="text-xs text-ink-500 dark:text-ink-400">Digital Product Builder</p>
              </div>
            </div>

            {/* Status pill */}
            <div className="absolute -top-3 -right-2 flex items-center gap-2 rounded-full border border-ink-200/80 bg-white/90 px-3.5 py-2 text-xs font-medium shadow-lg shadow-ink-900/5 backdrop-blur-md sm:-right-6 dark:border-ink-800 dark:bg-ink-900/90 dark:shadow-black/30">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Always building
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
