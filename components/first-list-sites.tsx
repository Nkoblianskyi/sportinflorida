import { Card, CardContent } from "./ui/card"
import Link from "next/link"
import { Button } from "./ui/button"
import { firstListSites } from "@/data/betting-sites"
import Image from "next/image"

export const FirstListSites = () => {
  const getCardBackground = (index: number) => {
    return "bg-white" // білий фон для всіх карточок
  }

  const getCardBorder = (index: number) => {
    if (index === 0) {
      return "border-8 border-yellow-400 shadow-xl shadow-[#1B4D3E]/50" // зробив бордер першої картки товстішим та яскравішим
    }

    const borders = [
      "border-2 border-[#A67C52]", // мідний бордер
      "border-2 border-[#2d6464]", // зелений бордер
      "border-2 border-[#7A7A7A]", // сірий бордер
      "border-2 border-[#A67C52]", // мідний бордер
    ]
    return borders[index % borders.length]
  }

  const renderStars = (rating: number, size = "w-6 h-6") => {
    const starsToShow = rating / 2 // Convert 10-point scale to 5-star scale

    return Array.from({ length: 5 }, (_, i) => {
      const fillPercentage = Math.max(0, Math.min(1, starsToShow - i))

      if (fillPercentage >= 1) {
        // Повністю заповнена зірка
        return (
          <span key={i} className={`${size} inline-block text-[#FFD700] font-black text-2xl leading-none`}>
            ★
          </span>
        )
      } else if (fillPercentage > 0) {
        // Частково заповнена зірка
        return (
          <span key={i} className={`${size} inline-block relative font-black text-2xl leading-none`}>
            <span className="absolute inset-0 text-[#E5E5E5]">★</span>
            <span
              className="absolute inset-0 text-[#FFD700] block"
              style={{
                clipPath: `inset(0 ${100 - fillPercentage * 100}% 0 0)`,
              }}
            >
              ★
            </span>
          </span>
        )
      } else {
        // Порожня зірка
        return (
          <span key={i} className={`${size} inline-block text-[#E5E5E5] font-black text-2xl leading-none`}>
            ★
          </span>
        )
      }
    })
  }

  return (
    <>
      <section id="rankings" className="py-1 sm:py-4 md:py-4 w-full">
        <div className="w-full max-w-[1280px] mx-auto">
          <div className="px-1 sm:px-4">
            <div className="space-y-2 sm:space-y-6">
              {firstListSites.map((site, index) =>
                index === 0 ? (
                  <Card key={site.id} className={`overflow-hidden shadow-lg ${getCardBorder(index)}`}>
                    <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                      <CardContent className={`p-0 relative ${getCardBackground(index)}`}>
                        {index < 4 && (
                          <div className="absolute top-0 left-0 z-10">
                            <div className="bg-[#FFD700] text-black px-3 py-1 text-xs font-bold rounded-br-lg">
                              {index === 0
                                ? "Top Rated Bookie"
                                : index === 1
                                  ? "Exclusive Offer"
                                  : index === 2
                                    ? "Trending"
                                    : index === 3
                                      ? "Recommended"
                                      : ""}
                            </div>
                          </div>
                        )}

                        {/* Mobile Layout - до 968px */}
                        <div className="flex md:hidden min-h-[160px]">
                          {/* Ліва колонка: логотип + рейтинг */}
                          <div className="flex flex-col items-center justify-center bg-black/20 w-1/2 py-4">
                            <div className="bg-black p-2 rounded shadow-sm w-32 h-16 flex items-center justify-center mb-4">
                              <Image
                                src={site.logo || "/placeholder.svg"}
                                alt={site.name}
                                width={120}
                                height={60}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                            <div className="text-center">
                              <div className="flex justify-center items-center gap-1 mb-1">
                                <div className="flex gap-0.5">{renderStars(site.rating, "w-6 h-6")}</div>
                                <div className="text-lg font-black text-[#2C2C2C] ml-1">{site.rating.toFixed(1)}</div>
                              </div>
                              <div className="text-xs text-[#7A7A7A]">reviews ({site.reviewCount})</div>
                            </div>
                          </div>

                          {/* Права колонка: бонус + кнопка */}
                          <div className="flex flex-col justify-center w-1/2 px-4 py-4">
                            <div className="text-center mb-6">
                              <div className="text-[#A67C52] text-xs font-bold mb-3">New Customer Bonus</div>
                              <div className="font-bold text-[#2C2C2C] text-lg leading-tight">{site.bonus}</div>
                              {site.dopbonus && (
                                <div className="font-bold text-[#2C2C2C] text-base leading-tight mt-2">
                                  {site.dopbonus}
                                </div>
                              )}
                            </div>
                            <Button className="bg-[#009639] text-white text-base px-4 py-4 font-semibold shadow w-full">
                              Get Bonus
                            </Button>
                          </div>
                        </div>

                        {/* Tablet Layout - від 968px до 1220px */}
                        <div className="hidden md:flex lg:hidden flex-row items-center justify-between gap-3 min-h-[140px] px-4 py-4">
                          {/* Column 1: Logo + Rank - фіксована ширина */}
                          <div className="flex items-center gap-3 w-48 flex-shrink-0">
                            <div className="bg-[#A67C52] text-[#EEE7DA] w-10 h-10 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <div className="bg-black p-2 rounded shadow-sm w-32 h-16 flex items-center justify-center">
                              <Image
                                src={site.logo || "/placeholder.svg"}
                                alt={site.name}
                                width={120}
                                height={60}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Column 2: Name + Rating - гнучка ширина */}
                          <div className="text-center flex-1 min-w-0 px-2">
                            <span className="text-xl font-black ml-1 text-[#2C2C2C]">
                                  {site.rating.toFixed(1)}
                                </span>
                            <div className="flex flex-col items-center gap-1">
                              <div className="flex items-center justify-center gap-1">
                                <div className="flex gap-0.5">{renderStars(site.rating, "w-5 h-5")}</div>
                                
                              </div>
                              <div className="text-xs text-[#7A7A7A]">({site.reviewCount} reviews)</div>
                            </div>
                          </div>

                          {/* Column 3: Bonus - фіксована ширина */}
                          <div className="flex flex-col items-center justify-center w-56 flex-shrink-0">
                            <div className="text-[#A67C52] text-xs font-bold mb-1">New Customer Bonus</div>
                            <div className="text-center min-h-[48px] flex flex-col justify-center">
                              <div className="font-bold text-[#2C2C2C] text-lg leading-tight">{site.bonus}</div>
                              {site.dopbonus && (
                                <div className="font-bold text-[#2C2C2C] text-base leading-tight mt-2">
                                  {site.dopbonus}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Column 4: Button - фіксована ширина */}
                          <div className="text-center flex flex-col items-center gap-1 w-32 flex-shrink-0">
                            <Button className="bg-[#009639] text-white text-base px-4 py-2 rounded shadow w-full">
                              Get Bonus
                            </Button>
                          </div>
                        </div>

                        {/* Desktop Layout - від 1220px */}
                        <div className="hidden lg:flex flex-row items-center justify-between gap-4 px-6 py-8 min-h-[160px]">
                          {/* Column 1: Logo + Rank - фіксована ширина */}
                          <div className="flex items-center gap-5 w-80 flex-shrink-0">
                            <div className="bg-[#A67C52] text-[#EEE7DA] w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <div className="bg-black p-2 rounded shadow-sm w-56 h-20 xl:h-24 flex items-center justify-center flex-shrink-0">
                              <Image
                                src={site.logo || "/placeholder.svg"}
                                alt={site.name}
                                width={140}
                                height={100}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Column 2: Name + Rating - гнучка ширина */}
                          <div className="text-center flex-1 min-w-0 px-4">
                           <span className="text-2xl font-black ml-1 text-[#2C2C2C]">{site.rating.toFixed(1)}</span>
                            <div className="mt-1 flex justify-center items-center gap-1">
                              <div className="flex">{renderStars(site.rating, "w-8 h-8")}</div>
                              
                            </div>
                            <div className="text-sm text-[#7A7A7A] mt-1">({site.reviewCount} reviews)</div>
                          </div>

                          {/* Column 3: Bonus - фіксована ширина */}
                          <div className="flex flex-col items-center justify-center w-80 flex-shrink-0">
                            <div className="text-[#A67C52] text-sm font-bold mb-2">New Customer Bonus</div>
                            <div className="text-center min-h-[70px] flex flex-col justify-center">
                              <div className="font-bold text-[#2C2C2C] xl:text-2xl text-3xl leading-tight">
                                {site.bonus}
                              </div>
                              {site.dopbonus && (
                                <div className="font-bold text-[#2C2C2C] xl:text-xl mt-2 text-2xl leading-tight">
                                  {site.dopbonus}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Column 4: Button - фіксована ширина */}
                          <div className="text-center flex flex-col items-center gap-2 w-48 flex-shrink-0">
                            <Button className="bg-[#009639] text-white text-xl px-6 py-4 rounded shadow w-full">
                              Get Bonus
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <div className="bg-white px-4 py-2 border-t border-[#7A7A7A]/20">
                        <div className="text-xs text-[#7A7A7A] text-center">
                          21+. T&Cs apply. Please Gamble Responsibly.
                        </div>
                      </div>
                    </Link>
                  </Card>
                ) : (
                  <Card key={site.id} className={`overflow-hidden shadow-lg ${getCardBorder(index)}`}>
                    <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block">
                      <CardContent className={`p-0 relative ${getCardBackground(index)}`}>
                        {index < 4 && (
                          <div className="absolute top-0 left-0 z-10">
                            <div className="bg-[#FFD700] text-black px-3 py-1 text-xs font-bold rounded-br-lg">
                              {index === 0
                                ? "Top Rated Bookie"
                                : index === 1
                                  ? "Exclusive Offer"
                                  : index === 2
                                    ? "Trending"
                                    : index === 3
                                      ? "Recommended"
                                      : ""}
                            </div>
                          </div>
                        )}

                        {/* Mobile Layout - до 968px */}
                        <div className="flex md:hidden min-h-[160px]">
                          {/* Ліва колонка: логотип + рейтинг */}
                          <div className="flex flex-col items-center justify-center bg-black/20 w-1/2 py-4">
                            <div className="bg-black p-2 rounded shadow-sm w-32 h-16 flex items-center justify-center mb-4">
                              <Image
                                src={site.logo || "/placeholder.svg"}
                                alt={site.name}
                                width={120}
                                height={60}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                            <div className="text-center">
                              <div className="flex justify-center items-center gap-1 mb-1">
                                <div className="flex gap-0.5">{renderStars(site.rating, "w-6 h-6")}</div>
                                <div className="text-lg font-black text-[#2C2C2C] ml-1">{site.rating.toFixed(1)}</div>
                              </div>
                              <div className="text-xs text-[#7A7A7A]">reviews ({site.reviewCount})</div>
                            </div>
                          </div>

                          {/* Права колонка: бонус + кнопка */}
                          <div className="flex flex-col justify-center w-1/2 px-4 py-4">
                            <div className="text-center mb-6">
                              <div className="text-[#A67C52] text-xs font-bold mb-3">New Customer Bonus</div>
                              <div className="font-bold text-[#2C2C2C] text-lg leading-tight">{site.bonus}</div>
                              {site.dopbonus && (
                                <div className="font-bold text-[#2C2C2C] text-base leading-tight mt-2">
                                  {site.dopbonus}
                                </div>
                              )}
                            </div>
                            <Button className="bg-[#009639] text-white text-base px-4 py-4 font-semibold shadow w-full">
                              Get Bonus
                            </Button>
                          </div>
                        </div>

                        {/* Tablet Layout - від 968px до 1220px */}
                        <div className="hidden md:flex lg:hidden flex-row items-center justify-between gap-3 min-h-[140px] px-4 py-4">
                          {/* Column 1: Logo + Rank - фіксована ширина */}
                          <div className="flex items-center gap-3 w-48 flex-shrink-0">
                            <div className="bg-[#A67C52] text-[#EEE7DA] w-10 h-10 rounded-full flex items-center justify-center text-base font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <div className="bg-black p-2 rounded shadow-sm w-32 h-16 flex items-center justify-center">
                              <Image
                                src={site.logo || "/placeholder.svg"}
                                alt={site.name}
                                width={120}
                                height={60}
                                className="max-h-full max-w-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Column 2: Name + Rating - гнучка ширина */}
                          <div className="text-center flex-1 min-w-0 px-2">
                                                           <span className="text-xl font-black ml-1 text-[#2C2C2C]">
                                  {site.rating.toFixed(1)}
                                </span>
                            <div className="flex flex-col items-center gap-1">
                              <div className="flex items-center justify-center gap-1">
                                <div className="flex gap-0.5">{renderStars(site.rating, "w-5 h-5")}</div>
 
                              </div>
                              <div className="text-xs text-[#7A7A7A]">({site.reviewCount} reviews)</div>
                            </div>
                          </div>

                          {/* Column 3: Bonus - фіксована ширина */}
                          <div className="flex flex-col items-center justify-center w-56 flex-shrink-0">
                            <div className="text-[#A67C52] text-xs font-bold mb-1">New Customer Bonus</div>
                            <div className="text-center min-h-[48px] flex flex-col justify-center">
                              <div className="font-bold text-[#2C2C2C] text-lg leading-tight">{site.bonus}</div>
                              {site.dopbonus && (
                                <div className="font-bold text-[#2C2C2C] text-base leading-tight mt-2">
                                  {site.dopbonus}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Column 4: Button - фіксована ширина */}
                          <div className="text-center flex flex-col items-center gap-1 w-32 flex-shrink-0">
                            <Button className="bg-[#009639] text-white text-base px-4 py-2 rounded shadow w-full">
                              Get Bonus
                            </Button>
                          </div>
                        </div>

                        {/* Desktop Layout - від 1220px */}
                        <div className="hidden lg:flex flex-row items-center justify-between gap-4 px-6 py-8 min-h-[160px]">
                          {/* Column 1: Logo + Rank - фіксована ширина */}
                          <div className="flex items-center gap-5 w-80 flex-shrink-0">
                            <div className="bg-[#A67C52] text-[#EEE7DA] w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <div className="bg-black p-2 rounded shadow-sm w-56 h-20 xl:h-24 flex items-center justify-center flex-shrink-0">
                              <Image
                                src={site.logo || "/placeholder.svg"}
                                alt={site.name}
                                width={140}
                                height={100}
                                className="max-w-full max-h-full object-contain"
                              />
                            </div>
                          </div>

                          {/* Column 2: Name + Rating - гнучка ширина */}
                          <div className="text-center flex-1 min-w-0 px-4">
                            <span className="text-xl font-black ml-1 text-[#2C2C2C]">{site.rating.toFixed(1)}</span>
                            <div className="mt-1 flex justify-center items-center gap-1">
                              <div className="flex">{renderStars(site.rating, "w-8 h-8")}</div>
                              
                            </div>
                            <div className="text-sm text-[#7A7A7A] mt-1">({site.reviewCount} reviews)</div>
                          </div>

                          {/* Column 3: Bonus - фіксована ширина */}
                          <div className="flex flex-col items-center justify-center w-80 flex-shrink-0">
                            <div className="text-[#A67C52] text-sm font-bold mb-2">New Customer Bonus</div>
                            <div className="text-center min-h-[70px] flex flex-col justify-center">
                              <div className="font-bold text-[#2C2C2C] xl:text-2xl text-xl leading-tight">
                                {site.bonus}
                              </div>
                              {site.dopbonus && (
                                <div className="font-bold text-[#2C2C2C] xl:text-xl mt-2 text-xl leading-tight">
                                  {site.dopbonus}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Column 4: Button - фіксована ширина */}
                          <div className="text-center flex flex-col items-center gap-2 w-48 flex-shrink-0">
                            <Button className="bg-[#009639] text-white text-xl px-6 py-4 rounded shadow w-full">
                              Get Bonus
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                      <div className="bg-white px-4 py-2 border-t border-[#7A7A7A]/20">
                        <div className="text-xs text-[#7A7A7A] text-center">
                          21+. T&Cs apply. Please Gamble Responsibly.
                        </div>
                      </div>
                    </Link>
                  </Card>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FirstListSites
