import Image from "next/image"

export function Header() {
  return (
    <header className="bg-black/60 text-foreground py-1.5 w-full border-b border-border fixed top-0 z-50">
      <div className="w-full  mx-auto px-4">
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 flex items-center justify-center bg-yellow-400 p-1 rounded-full">
              <Image src="/favicon.ico" alt="Logo" width={32} height={32} />
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Sport in <span className="text-[#009639]">Florida</span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  )
}
