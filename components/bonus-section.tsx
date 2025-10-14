import { Card } from "./ui/card"

export const BonusSection = () => {
  return (
    <>
      {/* Bonuses Section */}
      <section id="bonuses" className="py-12 sm:py-16 md:py-20 bg-muted w-full max-w-[1250px] mx-auto rounded-lg">
        <div className="w-full max-w-[1200px] mx-auto rounded-lg">
          <div className="px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary px-4">
              Understanding Betting Bonuses
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-card-foreground">Welcome Bonuses</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Get extra value when you sign up with matched deposits and free bets.
                </p>
              </Card>

              <Card className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-card-foreground">Loyalty Programs</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Earn points and rewards for regular betting activity.
                </p>
              </Card>

              <Card className="text-center p-4 sm:p-6 sm:col-span-2 md:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-card-foreground">Fair Terms</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We only recommend sites with reasonable wagering requirements.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
