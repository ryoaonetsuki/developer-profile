import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import Reveal from "./Reveal";
import { cn } from "../utils/cn";

interface FormState {
  name: string;
  email: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const validate = (): boolean => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email.";
    else if (!EMAIL_RE.test(form.email.trim())) next.email = "That email doesn't look right.";
    if (!form.message.trim()) next.message = "Please write a short message.";
    else if (form.message.trim().length < 10)
      next.message = "A few more words would help — at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const set = (field: keyof FormState) => (e: { target: { value: string } }) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending" || !validate()) return;
    setStatus("sending");
    // Simulated send — connect to a backend or form service later.
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const inputBase =
    "w-full rounded-2xl border bg-white/70 px-5 py-3.5 text-[15px] text-ink-900 placeholder:text-ink-400 transition-all duration-300 outline-none focus:ring-4 dark:bg-ink-900/60 dark:text-ink-100 dark:placeholder:text-ink-500";
  const inputOk =
    "border-ink-200/80 focus:border-accent-500 focus:ring-accent-500/10 dark:border-ink-800 dark:focus:border-accent-500";
  const inputBad = "border-red-400 focus:border-red-500 focus:ring-red-500/10 dark:border-red-500/60";

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-accent-500/8 blur-[110px] dark:bg-accent-600/10"
      />
      <div className="relative mx-auto max-w-2xl px-5 sm:px-8">
        <Reveal className="text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.24em] text-accent-600 dark:text-accent-400">
            CONTACT
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let&rsquo;s Build Something<span className="text-accent-500">.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-600 sm:text-lg dark:text-ink-400">
            Have an idea, project, or something interesting to discuss? Feel free to get in touch.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} noValidate className="mt-12 flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={set("name")}
                  aria-invalid={!!errors.name}
                  className={cn(inputBase, errors.name ? inputBad : inputOk)}
                />
                {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set("email")}
                  aria-invalid={!!errors.email}
                  className={cn(inputBase, errors.email ? inputBad : inputOk)}
                />
                {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell me about your idea…"
                value={form.message}
                onChange={set("message")}
                aria-invalid={!!errors.message}
                className={cn(inputBase, "resize-none", errors.message ? inputBad : inputOk)}
              />
              {errors.message && <p className="mt-2 text-sm text-red-500">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={cn(
                "group mt-2 inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-white transition-all duration-300 active:scale-[0.98] sm:self-center sm:px-10",
                status === "sent"
                  ? "bg-emerald-600 shadow-lg shadow-emerald-600/25"
                  : "bg-accent-600 shadow-lg shadow-accent-600/25 hover:-translate-y-0.5 hover:bg-accent-500 hover:shadow-xl hover:shadow-accent-500/30",
                status === "sending" && "cursor-wait opacity-80",
              )}
            >
              {status === "sending" && (
                <>
                  <Loader2 className="h-4.5 w-4.5 animate-spin" />
                  Sending…
                </>
              )}
              {status === "sent" && (
                <>
                  <CheckCircle2 className="h-4.5 w-4.5" />
                  Message Sent
                </>
              )}
              {status === "idle" && (
                <>
                  Send Message
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </>
              )}
            </button>

            <div aria-live="polite" className="text-center">
              {status === "sent" && (
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  Thanks for reaching out — I&rsquo;ll get back to you soon.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
