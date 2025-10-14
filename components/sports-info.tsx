export default function SportsInfo() {
  const sports = [
    {
      name: "NFL Football",
      icon: "🏈",
      description:
        "Florida is home to three NFL teams: Miami Dolphins, Tampa Bay Buccaneers, and Jacksonville Jaguars. The state has hosted 16 Super Bowls, more than any other state.",
      teams: ["Miami Dolphins", "Tampa Bay Buccaneers", "Jacksonville Jaguars"],
      color: "bg-[#009639]",
    },
    {
      name: "NBA Basketball",
      icon: "🏀",
      description:
        "The Miami Heat and Orlando Magic represent Florida in the NBA. The Heat have won 3 NBA Championships and are one of the most successful franchises in recent history.",
      teams: ["Miami Heat", "Orlando Magic"],
      color: "bg-[#D4AF37]",
    },
    {
      name: "MLB Baseball",
      icon: "⚾",
      description:
        "Florida's MLB teams include the Miami Marlins and Tampa Bay Rays. The Rays have been one of the most innovative teams in baseball, while the Marlins have won 2 World Series.",
      teams: ["Miami Marlins", "Tampa Bay Rays"],
      color: "bg-[#A67C52]",
    },
    {
      name: "NHL Hockey",
      icon: "🏒",
      description:
        "The Florida Panthers and Tampa Bay Lightning bring NHL action to the Sunshine State. The Lightning have won 3 Stanley Cups in recent years, establishing a hockey dynasty.",
      teams: ["Florida Panthers", "Tampa Bay Lightning"],
      color: "bg-[#009639]",
    },
    {
      name: "College Football",
      icon: "🎓",
      description:
        "Florida college football is legendary with powerhouse programs like Florida Gators, Florida State Seminoles, and Miami Hurricanes. These teams have combined for 12 national championships.",
      teams: ["Florida Gators", "Florida State Seminoles", "Miami Hurricanes"],
      color: "bg-[#D4AF37]",
    },
    {
      name: "NASCAR Racing",
      icon: "🏁",
      description:
        "Daytona International Speedway hosts the iconic Daytona 500, NASCAR's most prestigious race. Florida is a hub for motorsports with multiple racing venues across the state.",
      teams: ["Daytona 500", "Homestead-Miami Speedway"],
      color: "bg-[#A67C52]",
    },
  ]

  return (
    <section className="bg-white py-12 md:py-16">
      <div className=" mx-auto max-w-[1250px] px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2C2C] mb-4">Popular Sports in Florida</h2>
          <p className="text-lg text-gray-600  mx-auto">
            Florida is a sports paradise with professional teams across all major leagues. Discover the most popular
            sports and teams that Floridians love to watch and bet on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[#009639] transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-[#2C2C2C]">{sport.name}</h3>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{sport.description}</p>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-[#009639] mb-2">Florida Teams:</p>
                <div className="flex flex-wrap gap-2">
                  {sport.teams.map((team, teamIndex) => (
                    <span key={teamIndex} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                      {team}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-[#009639] to-[#007a2e] rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Year-Round Sports Action</h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            With professional teams in every major sport and perfect weather year-round, Florida offers endless
            opportunities for sports betting. From the excitement of NFL Sundays to the intensity of NBA playoffs,
            there's always a game to watch and bet on.
          </p>
        </div>
      </div>
    </section>
  )
}
