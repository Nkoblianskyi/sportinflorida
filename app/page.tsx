"use client"

import { useState, useEffect } from "react"
import { firstListSites, type FirstListSite } from "@/data/betting-sites"
import { BonusSection } from "@/components/bonus-section"
import { HowWeRank } from "@/components/how-we-rank"
import { Hero } from "@/components/hero"
import { Faq } from "@/components/faq"
import { SafeSection } from "@/components/safe-section"
import FirstListSites from "@/components/first-list-sites"
import { CookieConsent } from "@/components/cookie-consent"
import { RankingModal } from "@/components/ranking-modal"
import SportsInfo from "@/components/sports-info"

declare global {
  interface Window {
    updateLinkParams?: () => void
  }
}

export default function HomePage() {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<"age" | "terms" | "ranking">("age")
  const [topSites, setTopSites] = useState<FirstListSite[]>([])
  const [isClient, setIsClient] = useState(false)

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    // If ranking modal is not shown yet, show it
    if (!showModal) {
      setShowModal(true)
      setModalType("ranking")
    }
  }

  useEffect(() => {
    setIsClient(true)
    setTopSites(firstListSites)

    // Auto-open modal after 12 seconds
    const timer = setTimeout(() => {
      setShowModal(true)
      setModalType("ranking")
    }, 12000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (showModal && isClient) {
      // Delay the link parameter update to avoid hydration issues
      const timer = setTimeout(() => {
        if (typeof window !== "undefined" && typeof window.updateLinkParams === "function") {
          window.updateLinkParams()
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [showModal, isClient])

  const openModal = (type: "age" | "terms" | "ranking") => {
    setModalType(type)
    setShowModal(true)
  }

  // Don't render until client-side to avoid hydration issues
  if (!isClient) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-yellow-400"></div>
      </div>
    )
  }

  return (
    <div
      className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/nfl-background.jpg')",
      }}
    >
      <Hero onOpenModal={openModal} />

      {/* Rankings Section */}
      <FirstListSites />

      {/* Sports Info Section */}
      <SportsInfo />

      {/* Bonuses Section */}
      <div id="bonuses" className="w-full bg-white max-w-[1250px]">
        <BonusSection />
      </div>

      {/* How We Rank Section */}
      <div className="w-full bg-white max-w-[1250px]">
        <HowWeRank />
      </div>

      {/* Safe Gambling Section */}
      <div className="w-full bg-white max-w-[1250px]">
        <SafeSection />
      </div>

      {/* FAQ Section */}
      <div className="w-full bg-white max-w-[1250px]">
        <Faq />
      </div>

      <CookieConsent onAccept={acceptCookies} />

      <RankingModal show={showModal} onClose={() => setShowModal(false)} modalType={modalType} topSites={topSites} />
    </div>
  )
}
