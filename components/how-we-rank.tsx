export const HowWeRank = () => {
  return (
    <>
      {/* How We Rank Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-card w-full max-w-[1250px] mx-auto rounded-lg mt-4">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary px-4">
              How We Select Our Rankings
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-accent">Safety & Licensing</h3>
                    <p className="text-sm sm:text-base text-foreground">
                      All recommended sites must hold valid licenses from reputable gambling authorities. We verify
                      their regulatory status and compliance with Florida gaming regulations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-accent">User Experience</h3>
                    <p className="text-sm sm:text-base text-foreground">
                      We evaluate website design, mobile compatibility, customer support quality, and overall ease of
                      use to ensure a smooth betting experience for Florida residents.
                    </p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-accent">Odds & Markets</h3>
                    <p className="text-sm sm:text-base text-foreground">
                      We compare odds across different sports and events, plus evaluate the variety and depth of betting
                      markets available, with special focus on popular Florida sports teams.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-accent">Payment Options</h3>
                    <p className="text-sm sm:text-base text-foreground">
                      Fast, secure payment processing with multiple deposit and withdrawal options suitable for Florida
                      customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
