import type { Metadata } from "next";
import { Manrope, Great_Vibes } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laksmana Ibrahim Rino",
  description: "Personal Portfolio of Laksmana Ibrahim Rino - Tech Enthusiast & Founder",
};

import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${greatVibes.variable} antialiased`}>
      <body className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-red-500 selection:text-white flex flex-col">
        <Header />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
