import { Card } from "./ui/card"

export const Faq = () => {
  return (
    <>
      <section id="faq" className="py-8 sm:py-12 md:py-16 bg-muted w-full max-w-[1280px] mx-auto">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-accent px-4">
              Frequently Asked Questions
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
              <Card className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                  Are these betting sites legal in Florida?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Yes, all recommended sites are licensed and regulated by reputable authorities and accept Florida
                  customers legally. Always verify the current legal status of online betting in Florida.
                </p>
              </Card>

              <Card className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                  How often do you update your rankings?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We review and update our rankings monthly to ensure accuracy and reflect any changes in operator
                  performance or offerings.
                </p>
              </Card>

              <Card className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                  Do you receive commissions from betting sites?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We may receive affiliate commissions, but this does not influence our rankings. Our reviews are based
                  on objective criteria and user feedback.
                </p>
              </Card>

              <Card className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                  What is the minimum age for sports betting in Florida?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  You must be 21 years or older to participate in sports betting in Florida. All recommended sites
                  verify age and identity before allowing real money wagering.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
