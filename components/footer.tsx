import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white py-8 sm:py-12 w-full border-t border-border">
      <div className="w-full max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 flex items-center justify-center bg-yellow-400 p-1 rounded-full">
                  <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">Sport in Florida</h3>
              </div>
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground">
              Your trusted source for sports betting site reviews and rankings in Florida.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1 items-center text-center">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Responsible Gambling</h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
              <Link
                href="https://www.gambleaware.org/"
                className="bg-muted p-2 sm:p-3 rounded text-center hover:bg-muted/80 transition-colors flex items-center justify-center"
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
              </Link>
              <Link
                href="https://www.gamcare.org.uk/"
                className="bg-muted p-2 sm:p-3 rounded text-center hover:bg-muted/80 transition-colors flex items-center justify-center"
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
              </Link>
              <Link
                href="https://www.gamstop.co.uk/"
                className="bg-muted p-2 sm:p-3 rounded text-center hover:bg-muted/80 transition-colors flex items-center justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/gamstop.svg"
                  alt="GamStop"
                  width={80}
                  height={30}
                  className="h-6 sm:h-8 w-auto mx-auto hover:scale-105 transition-transform"
                />
              </Link>
              <Link
                href="https://flgaming.gov/"
                className="bg-muted p-2 sm:p-3 rounded text-center hover:bg-muted/80 transition-colors flex items-center justify-center"
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
              </Link>
              <Link
                href="https://gamblinghelp.org/"
                className="bg-muted p-2 sm:p-3 rounded text-center hover:bg-muted/80 transition-colors flex items-center justify-center"
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
              </Link>
              <Link
                href="https://www.ncpgambling.org/"
                className="bg-muted p-2 sm:p-3 rounded text-center hover:bg-muted/80 transition-colors flex items-center justify-center"
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
              </Link>
            </div>
            <div className="mt-3 sm:mt-4 text-center space-y-2">
              <p
                
                className="block text-sm sm:text-base font-semibold text-primary hover:text-primary/80 transition-colors"
              >
                1-800-GAMBLER
              </p>
              <Badge className="bg-primary text-primary-foreground">21+</Badge>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
            <p className="text-xs sm:text-sm text-muted-foreground">
              For inquiries about our rankings or responsible gambling resources.
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8 text-center text-muted-foreground">
          <p className="text-xs sm:text-sm mb-3 sm:mb-4 px-4">
            <strong>Responsible Gambling</strong>
            <br />
            Gambling Problem? Call 1-800-GAMBLER. Must be 21+ to participate. Bonuses and content are subject to change.
            Always review the terms on the operator's official site before joining. Florida Council on Compulsive
            Gambling provides free and confidential help.
          </p>
          <p className="text-xs sm:text-sm">&copy; 2025 sportinflorida.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
