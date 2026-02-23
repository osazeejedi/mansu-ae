import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mansu AE — Expanding African Businesses into the UAE",
  description:
    "Mansu connects African businesses to the UAE and Middle East through business strategy, FX & payments, and market localisation.",
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
