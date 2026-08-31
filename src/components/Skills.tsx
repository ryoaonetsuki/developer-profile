import {
  Braces,
  Code2,
  Database,
  FileCode2,
  Gauge,
  Layers,
  Palette,
  Plug,
  Send,
  Server,
  Settings2,
  Sparkles,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { GithubIcon } from "./BrandIcons";
import Reveal from "./Reveal";

interface Skill {
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const SKILLS: Skill[] = [
  { name: "PHP", icon: Braces },
  { name: "MySQL", icon: Database },
  { name: "HTML", icon: Code2 },
  { name: "CSS", icon: Palette },
  { name: "JavaScript", icon: FileCode2 },
  { name: "REST APIs", icon: Plug },
  { name: "MVC Architecture", icon: Layers },
  { name: "Object-Oriented Programming", icon: Settings2 },
  { name: "GitHub", icon: GithubIcon },
  { name: "cPanel", icon: Gauge },
  { name: "Web Hosting", icon: Server },
  { name: "Telegram API", icon: Send },
  { name: "AI Tools", icon: Sparkles },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 lg:py-32">
      {/* Subtle band background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-100/60 to-transparent dark:via-ink-900/40"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-accent-600 dark:text-accent-400">
              MY TOOLBOX
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Skills &amp; Tools<span className="text-accent-500">.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-500 dark:text-ink-400">
            The technologies I use to build, ship, and maintain real things on the web.
          </p>
        </Reveal>

        <Reveal>
          <ul className="flex flex-wrap gap-2.5 sm:gap-3">
            {SKILLS.map((skill) => (
              <li key={skill.name}>
                <span className="group flex cursor-default items-center gap-2.5 rounded-full border border-ink-200/80 bg-white/70 py-2.5 pr-5 pl-3.5 text-sm font-medium text-ink-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-700 hover:shadow-md hover:shadow-accent-500/10 sm:py-3 sm:text-[15px] dark:border-ink-800 dark:bg-ink-900/60 dark:text-ink-300 dark:hover:border-accent-600 dark:hover:text-accent-300">
                  <skill.icon className="h-4 w-4 text-ink-400 transition-colors duration-300 group-hover:text-accent-500 dark:text-ink-500" />
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
