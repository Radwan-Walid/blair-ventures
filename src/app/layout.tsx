import type { Metadata } from "next";
import { Source_Sans_3, Fjalla_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const fjallaOne = Fjalla_One({
  variable: "--font-fjalla-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Experienced Project Consulting",
  description: "Blair Ventures is a trusted construction consulting and staffing firm, providing skilled professionals and expert project management solutions. We specialize in contract-based staffing, ensuring efficiency, integrity, and success in every project.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans.variable} ${fjallaOne.variable} font-source antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
