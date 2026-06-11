import type { Metadata } from "next";
import { Geist, Geist_Mono, Great_Vibes, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { SitePreloader } from "@/components/SitePreloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-calligraphy",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Kaivalya Joglekar",
  description: "Crafting immersive digital experiences.",
  keywords: ["developer", "engineer", "portfolio", "software", "web development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${spaceGrotesk.variable} ${greatVibes.variable} antialiased bg-black text-[var(--foreground)]`}
      >
        <SmoothScroll />
        <SitePreloader />
        
        {/* Noise overlay for texture - kept behind main content with z-index 0 */}
        <div className="noise-overlay" aria-hidden="true" />

        {/* Main content */}
        <div className="relative z-10 isolate">
          {children}
        </div>
      </body>
    </html>
  );
}
