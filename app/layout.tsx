import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const sans = Instrument_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shivamchavan.dev"),
  title: "Shivam Chavan · Full Stack Engineer",
  description:
    "Full Stack Engineer in Bengaluru building production SaaS, voice AI observability, and LLM tooling. Currently building Strivo at Eazytag, on-call weekly with client engineering teams.",
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

const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}})()`;

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
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
