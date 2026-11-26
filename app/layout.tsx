import type { Metadata, Viewport } from "next";
import { Sora } from "next/font/google";

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import TopLeftGlow from "@/components/TopLeftGlow";
import { site } from "@/lib/data";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora-family",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${site.name} | ${site.role} Portfolio`,
  description: `${site.fullName} is a ${site.role.toLowerCase()} with 4.5+ years of experience building WordPress, WooCommerce and custom websites.`,
  keywords: ["Nikhil Patil", "web developer", "wordpress developer", "woocommerce", "elementor", "php", "navi mumbai"],
  authors: [{ name: site.fullName }],
};

export const viewport: Viewport = {
  themeColor: "#facc15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} font-sora bg-site text-primary relative`}>
        <TopLeftGlow />
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}
