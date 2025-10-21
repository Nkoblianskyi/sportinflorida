export function Features() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">BUILD YOUR WINNING COMBINATIONS</h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
            Create powerful parlays across all major sports - from football and basketball to baseball, hockey, and
            beyond.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-4 mb-8">
          <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Same Game Combos</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Stack multiple bets from a single game into one powerful parlay for bigger payouts.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-cyan-200 hover:border-cyan-400 hover:shadow-xl transition-all">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Built Prop Parlays</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Expert-curated same game combinations ready to bet with one click for maximum convenience.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Flex Parlay Insurance</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Win even if some picks miss - flexible parlays let you cash out with partial wins.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl transition-all">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Game Mega Parlays</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Combine same game parlays across different matches for exponential winning potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
