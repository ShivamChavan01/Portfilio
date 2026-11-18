import { handleAnalyticsClick, initializeAnalytics } from "./lib/analytics";

if (initializeAnalytics(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN,
  process.env.NEXT_PUBLIC_POSTHOG_HOST,
)) {
  document.addEventListener("click", handleAnalyticsClick);
  document.addEventListener("auxclick", handleAnalyticsClick);
}
