import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mansu Technology Ltd — Proprietary Digital Asset Trading | UAE",
  description:
    "Mansu Technology Ltd is a UAE-incorporated proprietary trading firm deploying firm capital into high-liquidity cryptocurrency markets using structured trading systems and disciplined risk management.",
  openGraph: {
    title: "Mansu Technology Ltd — Proprietary Digital Asset Trading | UAE",
    description:
      "Mansu Technology Ltd is a UAE-incorporated proprietary trading firm deploying firm capital into high-liquidity cryptocurrency markets using structured trading systems and disciplined risk management.",
    siteName: "Mansu Technology Ltd",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mansu Technology Ltd — Proprietary Digital Asset Trading | UAE",
    description:
      "Mansu Technology Ltd is a UAE-incorporated proprietary trading firm deploying firm capital into high-liquidity cryptocurrency markets using structured trading systems and disciplined risk management.",
  },
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
