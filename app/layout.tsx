import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
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

// Apply the saved theme before paint.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t="dark"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
