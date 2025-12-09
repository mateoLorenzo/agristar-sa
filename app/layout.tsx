import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

// OpenSauceOne no está disponible en Google Fonts, usando Inter como alternativa temporal
// Para usar OpenSauceOne, agregar archivos de fuente en /public/fonts y configurar @font-face en globals.css
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "AGRI STAR S.A. - Agroquímicos y semillas",
  description:
    "Agri Star S.A, operando desde el año 2005, es una empresa especializada en la comercialización de agroquímicos y semillas, principalmente en los mercados de cultivos intensivos.",
  generator: "v0.app",
  icons: {
    icon: "/new-logo-square.png",
    shortcut: "/new-logo-square.png",
    apple: "/new-logo-square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
