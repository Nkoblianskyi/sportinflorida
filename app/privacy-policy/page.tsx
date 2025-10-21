import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Privacy Policy | Sport in Florida",
  description: "Privacy Policy for Sport in Florida sports betting platform.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <Card className="bg-card/50 backdrop-blur border-primary/30">
            <CardContent className="p-6 sm:p-8 space-y-6">
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold">1. Information We Collect</h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We collect information you provide directly to us, including personal information such as your name,
                  email address, phone number, date of birth, and payment information when you register for an account
                  or use our services.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold">2. How We Use Your Information</h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We use the information we collect to provide, maintain, and improve our services, process
                  transactions, send you technical notices and support messages, respond to your comments and questions,
                  and comply with legal obligations.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold">3. Information Sharing</h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We do not share your personal information with third parties except as described in this policy. We
                  may share information with service providers who perform services on our behalf, to comply with legal
                  obligations, or with your consent.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold">4. Data Security</h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold">5. Your Rights</h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  You have the right to access, update, or delete your personal information. You may also have the right
                  to restrict or object to certain processing of your information. To exercise these rights, please
                  contact us using the information provided below.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold">6. Contact Us</h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at privacy@sportinflorida.com
                </p>
              </section>

              <section className="pt-4 border-t border-border">
                <p className="text-xs sm:text-sm text-muted-foreground">Last updated: January 2025</p>
              </section>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
