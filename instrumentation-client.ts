import { handleAnalyticsClick, handlePortfolioSubmit, handlePortfolioToggle, initializeAnalytics } from "./lib/analytics";

if (initializeAnalytics(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN,
  process.env.NEXT_PUBLIC_POSTHOG_HOST,
)) {
  document.addEventListener("toggle", handlePortfolioToggle, true);
  document.addEventListener("submit", handlePortfolioSubmit);
  document.addEventListener("click", handleAnalyticsClick);
  document.addEventListener("auxclick", handleAnalyticsClick);
}
