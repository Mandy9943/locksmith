import { Inter } from "next/font/google";
import type React from "react";
import "./globals.css";
export const runtime = "edge";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lock Savers Locksmiths - 24/7 Emergency Locksmith in Birmingham",
  description:
    "Your trusted 24/7 locksmith in Birmingham. Fast 20-30 minute arrival, damage-free entry, and transparent pricing. Call 0121 861 8069 for immediate emergency locksmith services.",
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
