import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { DottedBackground } from "@/components/dotted-background";
import { Header } from "@/components/header";
import { ScrollRail } from "@/components/scroll-rail";
import { SiteFooter } from "@/components/site-footer";
import { SITE_DESCRIPTION } from "@/lib/copy";
import { MODE_SCRIPT } from "@/lib/mode";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sourceCodePro = localFont({
  src: "./fonts/source-code-pro.ttf",
  variable: "--font-source-code-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jared Watson",
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: MODE_SCRIPT }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceCodePro.variable} antialiased`}
      >
        <DottedBackground />
        <ScrollRail />
        <Header />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
