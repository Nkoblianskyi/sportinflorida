import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur  border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src="/hard-rock-logo.svg" alt="Hard Rock Casino Logo" width={64} height={64} />
          </div>
        </Link>
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 transition-colors text-sm sm:text-base px-3 sm:px-4 py-2 shadow-md text-white"
        >
          <a href="https://www.hardrock.bet/florida/" target="_blank" rel="noopener noreferrer">
            Sign Up Now
          </a>
        </Button>
      </div>
    </header>
  )
}
