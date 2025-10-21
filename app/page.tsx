import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Bonus } from "@/components/bonus"
import { Benefits } from "@/components/benefits"
import { Footer } from "@/components/footer"
import { InfoSection } from "@/components/info-section"
import { PlatformFeatures } from "@/components/platform-features"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Bonus />
      <Features />
      <PlatformFeatures />
      <Benefits />
      <InfoSection />
      <Footer />
    </main>
  )
}
