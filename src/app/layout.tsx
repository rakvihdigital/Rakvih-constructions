import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import ScrollAnimation from "@/components/ScrollAnimation";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat" 
});

export const metadata: Metadata = {
  title: "Rakvih Construction | Spaces Beyond Expectations",
  description: "Premium construction, engineering, and development services.",
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${montserrat.className} ${playfair.variable} antialiased bg-dark-bg text-white`}>
        <ScrollAnimation />
        {children}
      </body>
    </html>
  );
}
