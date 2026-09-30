import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollAnimation from "@/components/ScrollAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rakvih Construction | Spaces Beyond Expectations",
  description: "Premium construction, engineering, and development services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-dark-bg text-white`}>
        <ScrollAnimation />
        {children}
      </body>
    </html>
  );
}
