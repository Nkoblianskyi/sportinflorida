export function InfoSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-sm font-bold text-blue-700 mb-4">
            FLORIDA'S ONLY LEGAL OPTION
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            The State's Exclusive
            <br />
            <span className="text-blue-600">Licensed Sportsbook</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Hard Rock Bet is the sole platform authorized to accept online sports wagers in Florida
          </p>
        </div>

        {/* Feature 1 - Legal & Licensed */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-100 border border-green-300 rounded-full mb-4">
                <span className="text-sm font-bold text-green-700">Fully Licensed</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">State-Approved & Regulated</h3>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                Operating under an exclusive 30-year compact with the Seminole Tribe of Florida, Hard Rock Bet is the
                only legal online sportsbook in the state. Every bet is protected by state oversight and tribal
                regulation.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 flex-1 min-w-[140px]">
                  <div className="text-3xl font-black text-blue-600">2023</div>
                  <div className="text-sm text-gray-700 font-medium">Launch Year</div>
                </div>
                <div className="bg-cyan-50 border-2 border-cyan-200 rounded-xl p-4 flex-1 min-w-[140px]">
                  <div className="text-3xl font-black text-cyan-600">30</div>
                  <div className="text-sm text-gray-700 font-medium">Year Compact</div>
                </div>
                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4 flex-1 min-w-[140px]">
                  <div className="text-3xl font-black text-purple-600">21+</div>
                  <div className="text-sm text-gray-700 font-medium">Age Required</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border-2 border-blue-200 shadow-xl">
              <div className="bg-white rounded-2xl p-6 mb-4 border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-gray-900">Hard Rock Bet</span>
                  <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full">AUTHORIZED</span>
                </div>
                <div className="text-sm text-gray-600 mb-2">Regulatory Body</div>
                <div className="text-base font-semibold text-gray-900">Seminole Tribe of Florida</div>
              </div>
              <div className="space-y-2">
                {["Platform X", "Platform Y", "Platform Z"].map((name, i) => (
                  <div key={i} className="bg-white/60 rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{name}</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">ILLEGAL</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 - Exclusive Access */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border-2 border-purple-200 shadow-xl">
              <h4 className="text-sm font-bold text-gray-600 mb-4">MARKET COMPARISON</h4>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-5 border-2 border-blue-300 shadow-md">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-gray-900 text-lg">Hard Rock Bet</span>
                  </div>
                  <div className="text-sm text-blue-600 font-semibold">#1 in Florida - Only Legal Option</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-2xl font-black text-cyan-600">1</div>
                    <div className="text-xs text-gray-600">Online Platform</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                    <div className="text-2xl font-black text-purple-600">6</div>
                    <div className="text-xs text-gray-600">Retail Locations</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-cyan-100 border border-cyan-300 rounded-full mb-4">
                <span className="text-sm font-bold text-cyan-700">Exclusive Rights</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Florida's One & Only</h3>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                As Florida's exclusive authorized online betting platform, Hard Rock Bet offers unmatched access to
                legal sports wagering. No other site can legally accept bets from Florida residents online.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gray-800 font-medium">Statewide online betting access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-800 font-medium">Trusted Hard Rock brand reputation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-800 font-medium">30-year exclusive gaming compact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feature 3 - Quick Start */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full mb-4">
                <span className="text-sm font-bold text-purple-700">Fast Setup</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start Betting in Minutes</h3>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                Create your account, make a deposit, and place your first bet in just minutes. Our streamlined
                registration process gets you in the action fast with secure payment options and instant account
                verification.
              </p>
              <div className="bg-gradient-to-r from-purple-50 to-cyan-50 border-2 border-purple-200 rounded-2xl p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-4xl font-black text-purple-600 mb-1">2</div>
                    <div className="text-xs text-gray-700 font-medium">
                      Minutes
                      <br />
                      to Sign Up
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-cyan-600 mb-1">1</div>
                    <div className="text-xs text-gray-700 font-medium">
                      Minute
                      <br />
                      to Deposit
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-blue-600 mb-1">24/7</div>
                    <div className="text-xs text-gray-700 font-medium">
                      Betting
                      <br />
                      Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border-2 border-gray-200 shadow-xl">
              <h4 className="text-sm font-bold text-gray-600 mb-4">REGISTRATION STEPS</h4>
              <div className="space-y-3">
                {[
                  { num: "1", title: "Create Account", status: "30 seconds" },
                  { num: "2", title: "Verify Identity", status: "1 minute" },
                  { num: "3", title: "Add Funds", status: "30 seconds" },
                  { num: "4", title: "Place Bet", status: "Ready!" },
                ].map((step) => (
                  <div
                    key={step.num}
                    className="bg-white rounded-xl p-4 border border-gray-200 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-black flex-shrink-0">
                      {step.num}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-sm">{step.title}</div>
                      <div className="text-xs text-gray-600">{step.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href="https://www.hardrock.bet/florida/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Create Your Account
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
