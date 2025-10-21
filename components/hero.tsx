import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
          style={{
            backgroundImage: "url(/images/hero-sports-mobile.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{
            backgroundImage: "url(/images/hero-sports.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
              <span className="text-white">EXPERIENCE PREMIER</span>
              <span className="block mt-3 text-blue-600">SPORTS BETTING IN FLORIDA</span>
            </h1>
            <p className="text-lg md:text-2xl text-white text-pretty max-w-3xl mx-auto leading-relaxed">
              Join Florida's only state-authorized online sportsbook. Bet on NFL, NBA, MLB, NHL, and more with
              competitive odds and instant payouts.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="bg-blue-600 hover:bg-blue-700 transition-all text-xl px-10 py-7 text-white shadow-2xl hover:shadow-blue-500/50 hover:scale-105 rounded-full font-bold"
            >
              <a href="https://www.hardrock.bet/florida/" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>

          </div>
        </div>
      </div>
    </section>
  )
}
