import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RooCheck - Sherpa Clan Relationship Checker",
  description: "Check clan relationships for marriage eligibility within the Sherpa community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Background Image */}
        <div 
          className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: 'url(/images/backgrounds/backdrop.png)',
          }}
        >
          {/* Overlay for better readability */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
        </div>
        
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
