"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import type { FirstListSite } from "@/data/betting-sites"

const StarIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
)

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

interface RankingModalProps {
  show: boolean
  onClose: () => void
  modalType: "age" | "terms" | "ranking"
  topSites: FirstListSite[]
}

export const RankingModal = ({ show, onClose, modalType, topSites }: RankingModalProps) => {
  const renderStars = (rating: number, size = "w-8 h-8") => {
    return Array.from({ length: 5 }, (_, i) => {
      const filled = i < Math.floor(rating / 1)
      const halfFilled = i === Math.floor(rating / 2) && (rating / 2) % 1 >= 0.1

      if (filled) {
        return <StarIcon key={i} className={`${size} fill-yellow-400 text-yellow-400`} />
      } else if (halfFilled) {
        return (
          <div key={i} className="relative inline-block">
            <StarIcon className={`${size} fill-transparent text-yellow-400`} />
            <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
              <StarIcon className={`${size} fill-yellow-400 text-yellow-400`} />
            </div>
          </div>
        )
      } else {
        return <StarIcon key={i} className={`${size} fill-transparent text-yellow-400`} />
      }
    })
  }

  if (!show) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="relative w-full max-w-sm mx-auto my-auto animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: "90vh" }}
      >
        <div className="relative">
          {/* Modal content */}
          <div className="bg-white rounded-xl relative z-10 shadow-2xl">
            <div className="bg-[#D4AF37] text-white py-3 px-4 rounded-t-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#B8860B] to-[#FFD700]"></div>
              <div className="relative z-10 text-center text-black text-xl font-bold">Best Choice!</div>

              {/* Close button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="absolute top-2 right-2 text-white hover:text-gray-200 hover:bg-white/20 transition-all duration-300 hover:rotate-90 z-20"
              >
                <XIcon className="w-4 h-4" />
              </Button>
            </div>

            <div className="p-4">
              {/* Age Modal */}
              {modalType === "age" && (
                <div className="text-center">
                  <ShieldIcon className="w-10 h-10 text-[#FFD700] mx-auto mb-3 animate-pulse" />
                  <p className="text-base mb-3">
                    You must be 21 or older to access betting sites. Please gamble responsibly.
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    If you have a gambling problem, seek help at{" "}
                    <Link
                      href="https://www.gamblinghelp.org/"
                      className="text-[#009639] underline hover:text-[#007a2e] transition-colors"
                    >
                      GamblingHelp.org
                    </Link>
                  </p>
                  <Button
                    onClick={onClose}
                    className="bg-[#009639] hover:bg-[#007a2e] w-full hover:scale-105 transition-transform"
                  >
                    I am 21+ and understand
                  </Button>
                </div>
              )}

              {/* Terms Modal */}
              {modalType === "terms" && (
                <div>
                  <p className="text-sm mb-3">
                    This website contains affiliate links and we may receive compensation when you sign up through our
                    links. We are committed to providing honest and unbiased reviews.
                  </p>
                  <ul className="list-disc pl-4 space-y-1 text-sm text-gray-700">
                    <li className="animate-fadeInUp animation-delay-100">
                      We may receive affiliate commissions from betting operators
                    </li>
                    <li className="animate-fadeInUp animation-delay-200">
                      Our rankings are based on objective criteria
                    </li>
                    <li className="animate-fadeInUp animation-delay-300">
                      All bonuses and promotions are subject to operator terms
                    </li>
                    <li className="animate-fadeInUp animation-delay-400">
                      Always verify terms on the official operator website
                    </li>
                  </ul>
                </div>
              )}

              {/* Ranking Modal */}
              {modalType === "ranking" && (
                <div className="text-center">
                  <div className="animate-fadeInUp">
                    <div className="space-y-3">
                      {topSites.slice(0, 2).map((site, index) => (
                        <div
                          key={site.id}
                          className={`${index === 0 ? "border-4 border-yellow-400 rounded-lg p-3 shadow-lg" : "border-2 border-[#A67C52] rounded-lg p-3"}`}
                        >
      
                          <div className="mb-3">
                            <div className="w-64 h-32 mx-auto mb-2 flex items-center justify-center bg-black rounded-lg p-2 shadow-sm">
                              <Image
                                src={site?.logo || "/hard-rock-logo.svg"}
                                alt={site?.name || ""}
                                width={240}
                                height={120}
                                className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-300"
                              />
                            </div>

                            {/* Stars and Rating */}
                            <div className="flex items-center justify-center gap-1 mb-2">
                              <div className="flex gap-0.5">{renderStars(site?.rating || 0, "w-6 h-6")}</div>
                              <span className="text-xl font-bold text-[#2C2C2C]">
                                {site?.rating?.toFixed(1) || "0.0"}
                              </span>
                              <div className="text-xs text-[#7A7A7A]">({site.reviewCount} reviews)</div>
                            </div>
                          </div>

                          <div className="mb-3">
                            <div className="text-center">
                              <div className="text-[#A67C52] text-xs font-bold mb-1">New Customer Bonus</div>
                              <div
                                className={`font-bold text-[#2C2C2C] leading-tight ${
                                  index === 0 ? "text-3xl" : "text-sm"
                                }`}
                              >
                                {site?.modalBonus || site?.bonus}
                              </div>
                            </div>
                          </div>

                          <div>
                            <Link href={site?.url || "#"} target="_blank" rel="noopener noreferrer">
                              <Button
                                className={`bg-[#009639] hover:bg-[#007a2e] text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full max-w-xs mx-auto ${
                                  index === 0 ? "px-4 py-2 text-sm" : "px-4 py-2 text-sm"
                                }`}
                              >
                                Get Bonus
                              </Button>
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-[10px] text-gray-600 max-w-xs mx-auto mt-3">
                      Play responsibly. Terms and wagering conditions apply. 21+ only.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
