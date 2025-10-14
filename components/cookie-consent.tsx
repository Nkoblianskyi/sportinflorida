"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const CookieIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9"
    />
  </svg>
)

interface CookieConsentProps {
  onAccept: () => void
}

export const CookieConsent = ({ onAccept }: CookieConsentProps) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShow(true)
    }
  }, [])

  const handleAccept = () => {
    setShow(false)
    onAccept()
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-3 sm:p-4 z-50 animate-slideUp">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2 sm:gap-3 text-center sm:text-left">
          <CookieIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 animate-spin-slow" />
          <p className="text-xs sm:text-sm">
            We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
          </p>
        </div>
        <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
          <Link
            href="/cookies"
            className="text-orange-400 hover:underline text-xs sm:text-sm hover:text-orange-300 transition-colors"
          >
            Learn More
          </Link>
          <Button
            onClick={handleAccept}
            className="bg-green-700 hover:bg-green-800 text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2 hover:scale-105 transition-transform"
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  )
}
