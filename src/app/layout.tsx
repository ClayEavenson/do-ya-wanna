import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "Do Ya Wanna? — One question. One tap. A real answer.",
  description:
    "A private, notification-first decision app for the people you already know. Ask one person or a whole group — once, or on repeat. Free to answer. No ads.",
  openGraph: {
    title: "Do Ya Wanna? — One question. One tap. A real answer.",
    description:
      "A private, notification-first decision app for the people you already know. Ask one person or a whole group — once, or on repeat. Free to answer. No ads.",
    images: [{ url: "/brand/app-icon-512.png", width: 512, height: 512 }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Do Ya Wanna? — One question. One tap. A real answer.",
    description:
      "A private, notification-first decision app for the people you already know.",
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
