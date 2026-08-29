import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-archivo",
});

// ── URLs ──────────────────────────────────────────────────────────────────────
const SITE_URL = "https://www.doyawanna.app";
const OG_IMAGE = `${SITE_URL}/og/do-ya-wanna-teaser-v1.png`;

// ── Copy ──────────────────────────────────────────────────────────────────────
// Standard SEO description (longer — used for <meta name="description">)
const SEO_DESCRIPTION =
  "The simplest question in the world is becoming something completely new. Join the private beta list and be among the first to find out.";

// Social description — ≤125 characters, used for og:description and twitter:description
const SOCIAL_DESCRIPTION =
  "Four familiar words are becoming something completely new. Join the private beta list and be among the first to know.";

const TITLE = "Do Ya Wanna? — You already ask it.";
const IMAGE_ALT = "Do Ya Wanna? — Something new is coming.";

// ── Metadata export ───────────────────────────────────────────────────────────
export const metadata: Metadata = {
  // Hard-coded production base URL — eliminates localhost leaking into social tags
  metadataBase: new URL(SITE_URL),

  title: TITLE,
  description: SEO_DESCRIPTION,

  // Canonical URL
  alternates: {
    canonical: `${SITE_URL}/`,
  },

  // Open Graph
  openGraph: {
    type: "website",
    siteName: "Do Ya Wanna?",
    url: `${SITE_URL}/`,
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: IMAGE_ALT,
      },
    ],
  },

  // X / Twitter
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SOCIAL_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        alt: IMAGE_ALT,
      },
    ],
    // No twitter:site or twitter:creator — no username to supply
  },

  // Favicon / touch icon (unchanged)
  icons: {
    icon: "/brand/app-icon-512.png",
    apple: "/brand/app-icon-512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>{children}</body>
    </html>
  );
}
