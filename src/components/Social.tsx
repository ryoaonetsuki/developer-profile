import { Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import {
  EMAIL_ADDRESS,
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
  emailHref,
  safeHref,
} from "../config";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TelegramIcon,
} from "./BrandIcons";
import Reveal from "./Reveal";

interface SocialLink {
  name: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const LINKS: SocialLink[] = [
  { name: "GitHub", href: safeHref(GITHUB_URL), icon: GithubIcon },
  { name: "Facebook", href: safeHref(FACEBOOK_URL), icon: FacebookIcon },
  { name: "Instagram", href: safeHref(INSTAGRAM_URL), icon: InstagramIcon },
  { name: "LinkedIn", href: safeHref(LINKEDIN_URL), icon: LinkedinIcon },
  { name: "Telegram", href: safeHref(TELEGRAM_URL), icon: TelegramIcon },
  { name: "Email", href: emailHref(EMAIL_ADDRESS), icon: Mail },
];

export default function Social() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-accent-600 dark:text-accent-400">
            SOCIAL
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Find Me Online<span className="text-accent-500">.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <ul className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {LINKS.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={link.href.startsWith("#") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  title={link.name}
                  className="group flex h-14 w-14 items-center justify-center rounded-2xl border border-ink-200/80 bg-white/70 text-ink-500 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-500 hover:bg-accent-600 hover:text-white hover:shadow-xl hover:shadow-accent-500/25 sm:h-16 sm:w-16 dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-400 dark:hover:border-accent-500 dark:hover:bg-accent-600 dark:hover:text-white"
                >
                  <link.icon className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
