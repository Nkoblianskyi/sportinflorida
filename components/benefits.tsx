export function Benefits() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-sm font-bold text-purple-700 mb-4">
            WHY CHOOSE US
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            The Hard Rock Bet
            <br />
            <span className="text-blue-600">Advantage</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Discover what makes us Florida's premier sports betting destination
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Benefit 1 - Security */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-300 rounded-full mb-4">
                <span className="text-sm font-bold text-green-700">Maximum Security</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Safety is Our Priority</h3>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                Advanced encryption technology protects your personal information and funds. Our platform uses
                industry-leading security protocols to ensure every transaction is safe and your data stays private.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-5 text-center">
                  <div className="text-3xl font-black text-green-600 mb-1">256-bit</div>
                  <div className="text-sm text-gray-700">SSL Encryption</div>
                </div>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 text-center">
                  <div className="text-3xl font-black text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-700">Secure Transactions</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border-2 border-green-200 shadow-xl">
              <h4 className="text-sm font-bold text-gray-600 mb-4">SECURITY FEATURES</h4>
              <div className="space-y-3">
                {[
                  { feature: "Two-Factor Authentication", status: "Enabled" },
                  { feature: "Encrypted Data Storage", status: "Active" },
                  { feature: "Fraud Detection System", status: "Monitoring" },
                  { feature: "Secure Payment Processing", status: "Protected" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-gray-900">{item.feature}</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefit 2 - Fast Payouts */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-50 to-cyan-50 rounded-3xl p-8 border-2 border-purple-200 shadow-xl">
              <h4 className="text-sm font-bold text-gray-600 mb-4">PAYOUT METHODS</h4>
              <div className="space-y-3">
                {[
                  { method: "PayPal", time: "Instant" },
                  { method: "Debit Card", time: "1-2 Business Days" },
                  { method: "Bank Transfer", time: "2-3 Business Days" },
                  { method: "Check by Mail", time: "5-7 Business Days" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">{item.method}</span>
                      <span className="text-sm font-bold text-purple-600">{item.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full mb-4">
                <span className="text-sm font-bold text-purple-700">Quick Withdrawals</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fast & Easy Payouts</h3>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                Get your winnings quickly with our streamlined withdrawal process. Multiple payment methods available
                with fast processing times so you can access your funds when you need them.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gray-800 font-medium">Instant deposit confirmation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-800 font-medium">Fast withdrawal approval</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-800 font-medium">Multiple secure payment options</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Benefit 3 - 24/7 Support */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 border border-cyan-300 rounded-full mb-4">
                <span className="text-sm font-bold text-cyan-700">Always Available</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">24/7 Customer Support</h3>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                Our dedicated support team is available around the clock to assist you. Whether you have questions about
                betting, account issues, or need technical help, we're here for you anytime.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-cyan-50 border-2 border-cyan-200 rounded-xl p-5 text-center">
                  <div className="text-3xl font-black text-cyan-600 mb-1">&lt;2min</div>
                  <div className="text-sm text-gray-700">Avg Response</div>
                </div>
                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-5 text-center">
                  <div className="text-3xl font-black text-purple-600 mb-1">98%</div>
                  <div className="text-sm text-gray-700">Satisfaction Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-purple-50 rounded-3xl p-8 border-2 border-cyan-200 shadow-xl">
              <h4 className="text-sm font-bold text-gray-600 mb-4">CONTACT OPTIONS</h4>
              <div className="space-y-3">
                {[
                  { channel: "Live Chat Support", status: "Online Now" },
                  { channel: "Email Support", status: "24/7 Available" },
                  { channel: "Phone Support", status: "Call Anytime" },
                  { channel: "Help Center & FAQ", status: "Instant Access" },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-4 border border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">{item.channel}</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                        {item.status}
                      </span>
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
            Join Hard Rock
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
