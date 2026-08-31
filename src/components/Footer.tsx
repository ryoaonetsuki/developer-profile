import { ArrowUpRight, Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import {
  EMAIL_ADDRESS,
  FACEBOOK_URL,
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  STORE_URL,
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

interface SocialLink {
  name: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const SOCIALS: SocialLink[] = [
  { name: "GitHub", href: safeHref(GITHUB_URL), icon: GithubIcon },
  { name: "Facebook", href: safeHref(FACEBOOK_URL), icon: FacebookIcon },
  { name: "Instagram", href: safeHref(INSTAGRAM_URL), icon: InstagramIcon },
  { name: "LinkedIn", href: safeHref(LINKEDIN_URL), icon: LinkedinIcon },
  { name: "Telegram", href: safeHref(TELEGRAM_URL), icon: TelegramIcon },
  { name: "Email", href: emailHref(EMAIL_ADDRESS), icon: Mail },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-200/70 py-12 sm:py-16 dark:border-ink-800/70">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <p className="font-display text-xl font-bold tracking-[0.18em]">
              SALMAN<span className="text-accent-500">.</span>
            </p>
            <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
              Building things for the internet.
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 sm:items-end">
            <ul className="flex items-center gap-2">
              {SOCIALS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("#") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-ink-400 transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-100 hover:text-accent-600 dark:text-ink-500 dark:hover:bg-ink-900 dark:hover:text-accent-400"
                  >
                    <link.icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={safeHref(STORE_URL)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-accent-600 transition-colors hover:text-accent-500 dark:text-accent-400 dark:hover:text-accent-300"
            >
              Visit My Store
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-ink-200/70 pt-6 text-center dark:border-ink-800/70">
          <p className="text-xs text-ink-400 dark:text-ink-600">
            © 2026 Salman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
