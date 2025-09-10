import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar2/Navbar";
import Footer from "@/components/Footer2/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Keycypher",
  description:
    "Keycypher is a cybersecurity company specializing in protecting businesses from digital threats with advanced security solutions, risk management, and compliance services.",
  icons: {
    icon: "/logo_key_2.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white`}
      >
        {/* Flex column layout to control height */}
        <div className="min-h-screen w-full flex flex-col">
          <Navbar />

          {/* Main content area that fills available space */}
         <main className="flex-grow w-full flex justify-center items-center">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
