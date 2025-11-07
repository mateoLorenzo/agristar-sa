import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

// OpenSauceOne no está disponible en Google Fonts, usando Inter como alternativa temporal
// Para usar OpenSauceOne, agregar archivos de fuente en /public/fonts y configurar @font-face en globals.css
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Agri Star - Harnessing the Infinite Power of Nature",
  description:
    "We are dedicated to providing cutting-edge renewable energy solutions that not only meet today's energy demands but also ensure a sustainable future.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
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
  )
}
