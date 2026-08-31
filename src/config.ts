/* ─────────────────────────────────────────────
 * SITE CONFIGURATION
 * Update these values in one place — every
 * button and link across the site uses them.
 * ───────────────────────────────────────────── */

/** Salman's store website. */
export const STORE_URL = "https://www.vrozek.xyz";

/** Social and contact links. */
export const GITHUB_URL = "https://github.com/salman-dev-app";
export const FACEBOOK_URL = "https://facebook.com/salmandevapp";
export const INSTAGRAM_URL = "https://www.instagram.com/mdsalman.010?igsi=MXg4ZTc0eDlwaXAyYw==";
export const LINKEDIN_URL = "";
export const TELEGRAM_URL = "https://t.me/Otakuosenpai";
export const TELEGRAM_CHANNEL_URL = "https://t.me/salmandevapp";
export const EMAIL_ADDRESS = "mdsalmanhelp@gmail.com";

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
