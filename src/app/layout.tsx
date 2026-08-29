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
  "You ask simple questions every day. We're creating something new to make what happens next a whole lot simpler.";

// Social description — ≤125 characters, used for og:description and twitter:description
const SOCIAL_DESCRIPTION =
  "You ask simple questions every day. We're changing what happens next. Join the private beta.";

const TITLE = "Do Ya Wanna? — We're Changing What Happens Next.";
const IMAGE_ALT = "Do Ya Wanna? — We're changing what happens next.";

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
