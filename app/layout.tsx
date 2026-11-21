import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  metadataBase: new URL("https://shivamchavan.is-a.dev"),
  title: "Shivam Chavan · Full Stack Engineer",
  description:
    "Full Stack Engineer in Bengaluru building production SaaS, voice AI observability, and LLM tooling. Currently building Strivo at Eazytag.",
  openGraph: {
    title: "Shivam Chavan · Full Stack Engineer",
    description:
      "Full Stack Engineer in Bengaluru building production SaaS, voice AI observability, and LLM tooling. Currently building Strivo at Eazytag.",
    type: "website",
    url: "/",
    siteName: "Shivam Chavan",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Shivam Chavan · Full Stack Engineer",
    description:
      "Full Stack Engineer in Bengaluru building production SaaS, voice AI observability, and LLM tooling.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
