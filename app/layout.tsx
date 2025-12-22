import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import {
  Geist,
  Geist_Mono,
  Comforter_Brush,
  Yeseva_One,
} from "next/font/google";

import { Header } from "@/components/header";
import { initializeClient } from "@/core/api";
import { ThemeProvider } from "@/core/theme/theme-provider";

import "./globals.css";
import { HeaderLoginAction } from "@/components/header/components/login";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const comforterBrush = Comforter_Brush({
  variable: "--font-comforter-brush",
  subsets: ["latin"],
  weight: ["400"],
});

const yesevaOne = Yeseva_One({
  variable: "--font-yeseva-one",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "NG POLL",
  description: "NG POLL",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await initializeClient();

  return (
    <html lang="en" suppressHydrationWarning>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${comforterBrush.variable} ${yesevaOne.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header>
            <HeaderLoginAction />
          </Header>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
