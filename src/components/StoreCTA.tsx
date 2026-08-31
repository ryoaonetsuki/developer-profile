import { ArrowUpRight, FileCode2, LayoutTemplate, Package } from "lucide-react";
import { STORE_URL, safeHref } from "../config";
import Reveal from "./Reveal";

const TAGS = [
  { icon: LayoutTemplate, label: "Website Templates" },
  { icon: FileCode2, label: "PHP Scripts" },
  { icon: Package, label: "Digital Products" },
];

export default function StoreCTA() {
  return (
    <section className="relative py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-ink-200/70 bg-ink-900 px-6 py-16 text-center sm:px-12 sm:py-20 lg:py-24 dark:border-ink-800">
            {/* Ambient glows */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-accent-600/30 blur-[100px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-accent-500/15 blur-[80px]"
            />
            <div
              aria-hidden
              className="hero-grid pointer-events-none absolute inset-0 text-white/[0.04]"
              style={{
                maskImage: "radial-gradient(ellipse 70% 70% at 50% 0%, black, transparent)",
                WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 0%, black, transparent)",
              }}
            />

            <div className="relative">
              <p className="mb-5 text-xs font-semibold tracking-[0.24em] text-accent-300">
                THE STORE
              </p>
              <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Explore What I Build<span className="text-accent-400">.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-300 sm:text-lg">
                Visit my store to explore website templates, PHP scripts, digital products, and
                other things I create.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
                {TAGS.map((tag) => (
                  <span
                    key={tag.label}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-ink-200 backdrop-blur-sm sm:text-sm"
                  >
                    <tag.icon className="h-4 w-4 text-accent-400" />
                    {tag.label}
                  </span>
                ))}
              </div>

              <a
                href={safeHref(STORE_URL)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-accent-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-500 hover:shadow-2xl hover:shadow-accent-500/40 active:scale-[0.98] sm:text-base"
              >
                Visit My Store
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
