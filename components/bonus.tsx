import { Button } from "@/components/ui/button"

export function Bonus() {
  return (
    <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left side - Offer details */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 md:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full shadow-md w-fit mb-6">
                  <span className="text-sm font-bold uppercase tracking-wide text-white">New Member Exclusive</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">BET JUST $5</h2>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-6xl md:text-7xl font-black text-blue-600">$150</span>
                  <span className="text-xl font-bold text-gray-700">BONUS</span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-800 font-medium">Place your first $5 bet</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-800 font-medium">Win your bet</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-800 font-medium">Get $150 in bonus bets</span>
                  </div>
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-8 md:p-10 flex flex-col justify-center items-center text-center text-white">
                <div className="mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Win Big?</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Join thousands of Florida bettors already winning with Hard Rock Bet
                  </p>
                </div>

                <Button
                  size="lg"
                  asChild
                  className="bg-white hover:bg-gray-100 text-blue-600 transition-all duration-300 text-lg font-bold px-10 py-6 h-auto shadow-xl hover:shadow-2xl hover:scale-105 rounded-full uppercase tracking-wide"
                >
                  <a href="https://www.hardrock.bet/florida/" target="_blank" rel="noopener noreferrer">
                    Claim Bonus Now
                  </a>
                </Button>

                <p className="text-xs text-blue-100 mt-6 max-w-sm">
                  Terms apply. Must be 21+. Gambling problem? Call 1-800-GAMBLER.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
