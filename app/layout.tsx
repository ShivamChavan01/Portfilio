import type { Metadata } from "next";
import { Geist, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Geist({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const sans = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

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

// Claude-style warm light by default; a stored choice always wins.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t="light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
