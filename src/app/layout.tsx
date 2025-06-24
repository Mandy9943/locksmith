import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";
export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lock Savers Locksmiths - 24/7 Emergency Locksmith in Birmingham",
  description:
    "Your trusted 24/7 locksmith in Birmingham. Fast 20-30 minute arrival, damage-free entry, and transparent pricing. Call +44 7551 458842 for immediate emergency locksmith services.",
  openGraph: {
    url: "https://locksaverslocksmiths.com",
    type: "website",
    title: "Lock Savers Locksmiths - 24/7 Emergency Locksmith in Birmingham",
    description:
      "Your trusted 24/7 locksmith in Birmingham. Fast 20-30 minute arrival, damage-free entry, and transparent pricing. Call +44 7551 458842 for immediate emergency locksmith services.",
    images: [
      {
        url: "https://locksaverslocksmiths.com/opengraph.jpg",
        width: 1200,
        height: 596,
        alt: "Lock Savers Locksmiths - 24/7 Emergency Locksmith in Birmingham",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "locksaverslocksmiths.com",
    url: "https://locksaverslocksmiths.com",
    title: "Lock Savers Locksmiths - 24/7 Emergency Locksmith in Birmingham",
    description:
      "Your trusted 24/7 locksmith in Birmingham. Fast 20-30 minute arrival, damage-free entry, and transparent pricing. Call +44 7551 458842 for immediate emergency locksmith services.",
    images: ["https://locksaverslocksmiths.com/opengraph.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
