import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRUNKO — Camilan Berkelanjutan",
  description:
    "Camilan renyah dan bergizi yang dibuat dari bahan-bahan organik. Setiap gigitan mendukung pertanian berkelanjutan dan Bumi yang lebih sehat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-brand-cream font-sans">
        <Sidebar />
        <main className="md:pl-64">{children}</main>
      </body>
    </html>
  );
}
