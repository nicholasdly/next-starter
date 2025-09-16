import type { Metadata, Viewport } from "next";

import "./globals.css";

export const viewport: Viewport = {
  maximumScale: 1, // Disable auto-zoom on mobile Safari
};

export const metadata: Metadata = {
  title: "next-starter",
  description: "A minimal Next.js starter kit by Nicholas Ly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
