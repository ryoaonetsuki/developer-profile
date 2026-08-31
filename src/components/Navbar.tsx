import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { STORE_URL, safeHref } from "../config";
import { cn } from "../utils/cn";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

interface NavbarProps {
  dark: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ dark, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-ink-200/70 bg-ink-50/85 backdrop-blur-xl dark:border-ink-800/70 dark:bg-ink-950/80"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[72px] sm:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-[0.18em] transition-colors hover:text-accent-600 dark:hover:text-accent-400"
        >
          SALMAN
          <span className="text-accent-500">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors duration-300 hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-850 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white/60 text-ink-600 transition-all duration-300 hover:border-accent-400 hover:text-accent-600 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-300 dark:hover:border-accent-500 dark:hover:text-accent-400"
          >
            <Sun
              className={cn(
                "absolute h-[18px] w-[18px] transition-all duration-500",
                dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
              )}
            />
            <Moon
              className={cn(
                "absolute h-[18px] w-[18px] transition-all duration-500",
                dark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
              )}
            />
          </button>

          {/* Store button — desktop */}
          <a
            href={safeHref(STORE_URL)}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-1.5 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/25 sm:inline-flex dark:bg-white dark:text-ink-950 dark:hover:bg-accent-500 dark:hover:text-white"
          >
            Visit My Store
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white/60 text-ink-700 transition-colors dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-200 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-ink-50/98 px-6 pt-6 pb-10 backdrop-blur-xl transition-all duration-400 lg:hidden dark:bg-ink-950/98",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <div className="flex flex-col gap-1">
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-2xl px-4 py-4 font-display text-2xl font-semibold tracking-tight transition-all duration-500 hover:bg-ink-100 hover:text-accent-600 dark:hover:bg-ink-900 dark:hover:text-accent-400",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              )}
              style={{ transitionDelay: open ? `${80 + i * 50}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={safeHref(STORE_URL)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className={cn(
            "mt-auto flex items-center justify-center gap-2 rounded-2xl bg-accent-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-accent-600/25 transition-all duration-500 active:scale-[0.98]",
            open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
          )}
          style={{ transitionDelay: open ? "360ms" : "0ms" }}
        >
          Visit My Store
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>
    </header>
  );
}
