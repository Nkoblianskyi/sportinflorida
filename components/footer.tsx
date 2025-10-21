import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="py-12 sm:py-16 space-y-12">
          {/* Responsible Gambling Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Responsible Gambling in Florida</h2>
            <p className="text-lg text-gray-700">
              Player safety and responsible gambling practices are paramount for Hard Rock Bet, and sports betting in
              Florida as a whole. Educational tools and resources are available 24/7.
            </p>
          </div>

          {/* Help Resources - Horizontal Cards */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-blue-200 rounded-xl p-6 space-y-4 hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-bold text-gray-900">National Council for Problem Gambling</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-600">Call or Text</span>
                    <a
                      href="tel:1-800-522-4700"
                      className="text-lg font-bold text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      1-800-522-4700
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-gray-600">Website</span>
                    <a
                      href="https://www.ncpgambling.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                    >
                      ncpgambling.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-cyan-200 rounded-xl p-6 space-y-4 hover:border-cyan-400 transition-colors">
                <h3 className="text-xl font-bold text-gray-900">Florida Council on Compulsive Gambling</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-sm font-medium text-gray-600">Call</span>
                    <a
                      href="tel:888-ADMIT-IT"
                      className="text-lg font-bold text-cyan-700 hover:text-cyan-900 transition-colors"
                    >
                      888-ADMIT-IT
                    </a>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium text-gray-600">Website</span>
                    <a
                      href="https://gamblinghelp.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-cyan-700 hover:text-cyan-900 transition-colors"
                    >
                      gamblinghelp.org
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Organizations Section */}
          <div className="max-w-5xl mx-auto space-y-6 py-8 border-y border-gray-200">
            <h3 className="text-2xl font-bold text-center text-gray-900">Responsible Gambling Organizations</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <a
                href="https://gamblinghelp.org/"
                className="p-4 bg-black border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/gamblinghelp.webp"
                  alt="gamblinghelp"
                  width={120}
                  height={60}
                  className="h-14 w-auto hover:scale-105 transition-transform"
                />
              </a>
              <a
                href="https://www.gamcare.org.uk/"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/gamecare.svg"
                  alt="GamCare"
                  width={80}
                  height={30}
                  className="h-8 w-auto hover:scale-105 transition-transform"
                />
              </a>
              <a
                href="https://www.gambleaware.org/"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/gamble.webp"
                  alt="GambleAware"
                  width={80}
                  height={30}
                  className="h-8 w-auto hover:scale-105 transition-transform"
                />
              </a>
              <a
                href="https://flgaming.gov/"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/fgcc.png"
                  alt="FGCC"
                  width={80}
                  height={30}
                  className="h-8 w-auto hover:scale-105 transition-transform"
                />
              </a>
              <a
                href="https://www.ncpgambling.org/"
                className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo-split-home-ncpg.svg"
                  alt="ncpgambling"
                  width={140}
                  height={80}
                  className="h-14 w-auto hover:scale-105 transition-transform"
                />
              </a>
            </div>
            <div className="text-center pt-4">
              <Badge className="bg-red-600 hover:bg-red-700 text-white text-lg px-6 py-2">21+</Badge>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-gray-200 bg-white">
          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <div className="space-y-3">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong className="text-gray-900 text-base">Responsible Gambling:</strong>
                <br />
                Bonuses and content are subject to change. Always review the terms on the bookmaker's official site
                before joining. 21+ only. New Florida Players only. T&Cs apply. Please Gamble Responsibly.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Must be 21+ to participate. Gambling Problem? Call 1-800-GAMBLER. Hard Rock Bet is the only legal online
                sportsbook in Florida.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
              <a href="/privacy-policy" className="text-blue-700 hover:text-blue-900 font-medium hover:underline">
                Privacy Policy
              </a>
              <span className="text-gray-400">•</span>
              <a href="/cookie-policy" className="text-blue-700 hover:text-blue-900 font-medium hover:underline">
                Cookie Policy
              </a>
            </div>

            <p className="text-sm text-gray-600">© 2025 sportinflorida.com. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
