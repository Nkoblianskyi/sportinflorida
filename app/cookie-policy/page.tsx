import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Cookie Policy | Sport in Florida",
  description: "Cookie Policy for Sport in Florida sports betting platform.",
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Cookie Policy
          </h1>

          <Card className="bg-card/50 backdrop-blur border-primary/30">
            <CardContent className="p-6 sm:p-8 space-y-6">
              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold">What Are Cookies</h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Cookies are small text files that are placed on your device when you visit our website. They help us
                  provide you with a better experience by remembering your preferences and understanding how you use our
                  site.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Essential Cookies</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      These cookies are necessary for the website to function properly. They enable basic functions like
                      page navigation and access to secure areas of the website.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Analytics Cookies</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      These cookies help us understand how visitors interact with our website by collecting and
                      reporting information anonymously.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Functionality Cookies</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      These cookies enable the website to provide enhanced functionality and personalization based on
                      your interactions.
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold">Managing Cookies</h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  You can control and manage cookies in various ways. Please note that removing or blocking cookies can
                  impact your user experience and parts of our website may no longer be fully accessible.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold">Third-Party Cookies</h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  We may use third-party services that also use cookies. These third parties have their own privacy
                  policies, and we have no control over their cookies.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold">Contact Us</h2>
                <p className="text-sm sm:text-base text-muted-foreground">
                  If you have any questions about our use of cookies, please contact us at cookies@sportinflorida.com
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
