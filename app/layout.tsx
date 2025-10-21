import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CookieBanner } from "@/components/cookie-banner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
})

export const metadata: Metadata = {
  title: "Hard Rock Bet Florida | Legal Sports Betting in FL",
  description:
    "Experience premium sports betting in Florida with Hard Rock Bet. Bet on NFL, NBA, MLB, NHL, and more. Exclusive welcome bonus: Bet $5, Get $150 in bonus bets. The only legal online sportsbook in Florida.",
  keywords: [
    "Hard Rock Bet",
    "Florida sports betting",
    "legal sports betting Florida",
    "NFL betting",
    "NBA betting",
    "MLB betting",
    "NHL betting",
    "parlays",
    "sports betting bonus",
  ],
  openGraph: {
    title: "Hard Rock Bet Florida | Legal Sports Betting",
    description:
      "The only legal online sportsbook in Florida. Bet on your favorite sports with competitive odds and instant payouts.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased`}>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  )
}
