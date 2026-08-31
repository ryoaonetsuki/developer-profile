/* ─────────────────────────────────────────────
 * SITE CONFIGURATION
 * Update these values in one place — every
 * button and link across the site uses them.
 * ───────────────────────────────────────────── */

/** Salman's future store domain. Replace after purchasing the domain. */
export const STORE_URL = "YOUR_STORE_DOMAIN_HERE";

/** Social links — replace placeholders with real profiles when ready. */
export const GITHUB_URL = "YOUR_GITHUB_URL_HERE";
export const FACEBOOK_URL = "YOUR_FACEBOOK_URL_HERE";
export const INSTAGRAM_URL = "YOUR_INSTAGRAM_URL_HERE";
export const LINKEDIN_URL = "YOUR_LINKEDIN_URL_HERE";
export const TELEGRAM_URL = "YOUR_TELEGRAM_URL_HERE";
export const EMAIL_ADDRESS = "YOUR_EMAIL_HERE";

/** Profile image used in the hero section. */
export const PROFILE_IMAGE =
  "https://i.ibb.co.com/20QJ4jVm/file-0000000056a081fa901b1bb731ebf120.png";

/** Helper: returns a safe href even while placeholders are unset. */
export function safeHref(url: string): string {
  if (!url || url.startsWith("YOUR_")) return "#";
  return url;
}

export function emailHref(email: string): string {
  if (!email || email.startsWith("YOUR_")) return "#";
  return `mailto:${email}`;
}
