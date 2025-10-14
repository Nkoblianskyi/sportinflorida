"use client"

import Image from "next/image"

const SmartphoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
)

const LockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2V5a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
)

const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

interface HeroProps {
  onOpenModal: (type: "age" | "terms" | "ranking") => void
}

export const Hero = ({ onOpenModal }: HeroProps) => {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  })

  return (
    <section className="w-full relative bg-black/70 md:mt-11 overflow-hidden max-h-[250px] md:max-h-[350px]">
      {/* Background image only on mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{
          backgroundImage: "url('/nfl-background.jpg')",
        }}
      ></div>

      {/* Dark overlay only on mobile */}
      <div className="absolute inset-0 bg-black/50 md:hidden"></div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 py-3 md:py-8 pt-16 md:pt-8">
        {/* Main Hero Title - Hidden on mobile, shown on tablet+ */}
        <div className="text-center mb-3 md:mb-6 hidden md:block">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Florida's Premier Sports Betting Guide</h1>
          <p className="text-base md:text-lg text-gray-100 max-w-3xl mx-auto">
            Expert reviews and rankings of the best sports betting sites in Florida
          </p>
        </div>

        {/* Mobile Title - Only shown on mobile */}
        <div className="text-center mb-2 md:hidden">
          <h1 className="text-xl font-bold text-white mb-1">Florida Sports Betting</h1>
        </div>

        {/* Date */}
        <div className="text-center mb-2 md:mb-4">
          <p className="text-xs md:text-sm text-orange-300 font-medium">Updated Monthly - {currentDate}</p>
        </div>

        {/* Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-4xl mx-auto mb-2 md:mb-4">
          <div className="flex items-center justify-center gap-1 md:gap-2 py-1.5 md:py-2 px-2">
            <Image
              src="/flag-florida.png"
              width={16}
              height={16}
              alt="FL Logo"
              className="w-4 h-4 md:w-6 md:h-6 flex-shrink-0"
            />
            <span className="text-xs md:text-sm font-medium text-white">FL Licensed</span>
          </div>
          <div className="flex items-center justify-center gap-1 py-1.5 md:py-2 px-2">
            <SmartphoneIcon className="w-3 h-3 md:w-5 md:h-5 text-white flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-white">Mobile Ready</span>
          </div>
          <div className="flex items-center justify-center gap-1  py-1.5 md:py-2 px-2">
            <LockIcon className="w-3 h-3 md:w-5 md:h-5 text-white flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-white">Secure</span>
          </div>
          <div className="flex items-center justify-center gap-1 md:gap-2 py-1.5 md:py-2 px-2">
            <ZapIcon className="w-3 h-3 md:w-5 md:h-5 text-white flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium text-white">Fast Payouts</span>
          </div>
        </div>

        {/* Links */}
        <div className="text-center">
          <div className="flex flex-row justify-center gap-3 md:gap-6">
            <span
              onClick={() => onOpenModal("terms")}
              className="text-gray-200 hover:text-orange-300 cursor-pointer underline hover:no-underline transition-colors text-[10px] sm:text-xs"
            >
              Advertiser Info
            </span>
            <span
              onClick={() => onOpenModal("age")}
              className="text-gray-200 hover:text-orange-300 cursor-pointer underline hover:no-underline transition-colors text-[10px] sm:text-xs"
            >
              21+ Only
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
