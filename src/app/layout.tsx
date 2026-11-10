import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Karibu Near | Location-Based Dating for Kenya",
  description: "Connect with people nearby in Kenya. Match by GPS, county, interests, tribe, and more. Nairobi, Mombasa, Kisumu, Kiambu...",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gradient-to-b from-rose-50 to-white dark:from-zinc-950 dark:to-black text-zinc-900 dark:text-zinc-100">
        {children}
      </body>
    </html>
  );
}
