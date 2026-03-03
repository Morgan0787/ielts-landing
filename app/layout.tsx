import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IELTS 7.0+ Preparation Center | Tashkent",
  description:
    "Intensive IELTS, CEFR, national certificate and Math preparation courses to help you achieve 7.0+ and study abroad.",
  keywords: [
    "IELTS",
    "IELTS Tashkent",
    "IELTS preparation",
    "CEFR",
    "national certificates",
    "Math",
    "Uzbekistan",
    "IELTS 7.0"
  ],
  openGraph: {
    title: "IELTS 7.0+ Preparation Center",
    description:
      "Modern IELTS and exam preparation center in Tashkent. Small groups, strong teachers and real exam strategies.",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className="font-sans bg-slate-950 text-slate-50">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

