import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-archivo",
});

const TITLE = "Do Ya Wanna? — You already ask it.";
const DESCRIPTION =
  "The simplest question in the world is becoming something completely new. Join the private beta list and be among the first to find out.";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/brand/app-icon-512.png", width: 512, height: 512 }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/brand/app-icon-512.png"],
  },
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
