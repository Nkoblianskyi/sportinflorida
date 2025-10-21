import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageSquare, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 sm:py-16 md:py-20 border-t border-border bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Responsible Gambling in Florida
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Player safety and responsible gambling practices are paramount for Hard Rock Bet, and sports betting in
              Florida as a whole. Educational tools and resources are available 24/7.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <Card className="bg-white backdrop-blur border-primary/30 shadow-md">
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-foreground">National Council for Problem Gambling</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Call</p>
                      <a
                        href="tel:1-800-522-4700"
                        className="text-sm sm:text-base font-semibold hover:text-primary transition-colors"
                      >
                        1-800-522-4700
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Text</p>
                      <a
                        href="sms:1-800-522-4700"
                        className="text-sm sm:text-base font-semibold hover:text-primary transition-colors"
                      >
                        1-800-522-4700
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Website</p>
                      <a
                        href="https://www.ncpgambling.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-semibold hover:text-primary transition-colors break-all"
                      >
                        ncpgambling.org
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white backdrop-blur border-primary/30 shadow-md">
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-foreground">Florida Council on Compulsive Gambling</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Call</p>
                      <a
                        href="tel:888-ADMIT-IT"
                        className="text-sm sm:text-base font-semibold hover:text-primary transition-colors"
                      >
                        888-ADMIT-IT
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Website</p>
                      <a
                        href="https://gamblinghelp.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-semibold hover:text-primary transition-colors break-all"
                      >
                        gamblinghelp.org
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-border">
            <h3 className="text-lg sm:text-xl font-bold text-center">Responsible Gambling Organizations</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-4">

              <a
                href="https://gamblinghelp.org/"
                className="p-2 sm:p-3 bg-black rounded text-center transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/gamblinghelp.webp"
                  alt="gamblinghelp"
                  width={120}
                  height={60}
                  className="h-14 sm:h-16 w-auto mx-auto hover:scale-105 transition-transform"
                />
              </a>
              <a
                href="https://www.gamcare.org.uk/"
                className="p-2 sm:p-3 rounded text-center transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/gamecare.svg"
                  alt="GamCare"
                  width={80}
                  height={30}
                  className="h-6 sm:h-8 w-auto mx-auto hover:scale-105 transition-transform"
                />
              </a>

              <a
                href="https://www.gambleaware.org/"
                className="p-2 sm:p-3 rounded text-center transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/gamble.webp"
                  alt="GambleAware"
                  width={80}
                  height={30}
                  className="h-6 sm:h-8 w-auto mx-auto hover:scale-105 transition-transform"
                />
              </a>
              <a
                href="https://flgaming.gov/"
                className="p-2 sm:p-3 rounded text-center transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/fgcc.png"
                  alt="FGCC"
                  width={80}
                  height={30}
                  className="h-6 sm:h-8 w-auto mx-auto hover:scale-105 transition-transform"
                />
              </a>

              <a
                href="https://www.ncpgambling.org/"
                className="p-2 sm:p-3 bg-white rounded text-center transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/logo-split-home-ncpg.svg"
                  alt="ncpgambling"
                  width={140}
                  height={80}
                  className="h-14 sm:h-16 w-auto mx-auto hover:scale-105 transition-transform"
                />
              </a>

            </div>
            <div className="text-center">
              <Badge className="bg-red-600 hover:bg-red-700 text-white text-sm sm:text-base px-4 py-1">21+</Badge>
            </div>
          </div>

          <div className="text-center space-y-3 sm:space-y-4 pt-6 sm:pt-8 border-t border-border px-4">
            <p className="text-xs sm:text-sm text-muted-foreground">
              <strong className="text-foreground">Responsible Gambling</strong>
              <br />
              Bonuses and content are subject to change. Always review the terms on the bookmaker's official site before
              joining. 21+ only. New Florida Players only. T&Cs apply. Please Gamble Responsibly.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Must be 21+ to participate. Gambling Problem? Call 1-800-GAMBLER. Hard Rock Bet is the only legal online
              sportsbook in Florida.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="/cookie-policy" className="text-primary hover:underline">
                Cookie Policy
              </a>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              © 2025 betsiteinflorida.com. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
