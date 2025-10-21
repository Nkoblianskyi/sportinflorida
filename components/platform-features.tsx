export function PlatformFeatures() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-sm font-bold text-blue-700 mb-4">
            CUTTING-EDGE PLATFORM
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Advanced Betting
            <br />
            <span className="text-blue-600">Technology & Features</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Experience seamless betting with our state-of-the-art platform, designed for speed, reliability, and ease of
            use
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Feature cards without icons */}
          <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Lightning-Fast Bets</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Place bets in milliseconds with our optimized platform. Real-time odds updates across all markets.
            </p>
            <div className="text-2xl font-black text-blue-600">&lt;100ms</div>
            <div className="text-xs text-gray-600">Processing Time</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Live In-Play Betting</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Bet on games as they happen with constantly updating odds and instant bet placement.
            </p>
            <div className="text-2xl font-black text-cyan-600">Real-Time</div>
            <div className="text-xs text-gray-600">Odds Updates</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-gray-900 mb-2">500+ Daily Markets</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Comprehensive betting options across all major sports and leagues worldwide.
            </p>
            <div className="text-2xl font-black text-purple-600">500+</div>
            <div className="text-xs text-gray-600">Betting Markets</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Mobile Optimized</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Bet anywhere with our fully responsive mobile platform and dedicated iOS/Android apps.
            </p>
            <div className="text-2xl font-black text-indigo-600">100%</div>
            <div className="text-xs text-gray-600">Mobile Ready</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Bank-Level Security</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Your data and funds protected with 256-bit encryption and advanced fraud prevention.
            </p>
            <div className="text-2xl font-black text-blue-600">256-bit</div>
            <div className="text-xs text-gray-600">Encryption</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Payouts</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Fast withdrawals with multiple payment methods. Get your winnings when you want them.
            </p>
            <div className="text-2xl font-black text-cyan-600">24-48hrs</div>
            <div className="text-xs text-gray-600">Withdrawal Time</div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://www.hardrock.bet/florida/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Experience the Platform
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
