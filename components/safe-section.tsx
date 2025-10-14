export const SafeSection = () => {
  return (
    <>
      <section
        id="safety"
        className="py-8 sm:py-12 md:py-16 bg-primary text-primary-foreground w-full max-w-[1280px] mx-auto"
      >
        <div className="w-full max-w-[1280px] mx-auto text-center">
          <div className="px-2 sm:px-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-primary-foreground/10 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-foreground rounded-full"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 px-4">Responsible Gambling</h2>

            <div className="max-w-3xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-4">
                Gambling should be fun and entertaining. If you feel like your gambling is becoming a problem, please
                seek help immediately. Florida offers various resources for problem gambling support.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-left">
                <div className="bg-accent text-accent-foreground p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Warning Signs</h3>
                  <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                    <li>• Betting more than you can afford</li>
                    <li>• Chasing losses</li>
                    <li>• Neglecting responsibilities</li>
                    <li>• Lying about gambling activities</li>
                  </ul>
                </div>

                <div className="bg-accent text-accent-foreground p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Get Help</h3>
                  <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                    <li>• Set deposit limits</li>
                    <li>• Take regular breaks</li>
                    <li>• Use self-exclusion tools</li>
                    <li>• Call 1-800-GAMBLER for help</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
