import React from "react";
import { Grid, List, Sun } from "lucide-react";

// shadcn/ui components
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CustomConnectButton from "@/components/CustomConnectButton";

const MarketsOverview = () => {
  const totalStats = [
    { label: "Total Market Size", value: "$67.14 Mn" },
    { label: "Total Available", value: "$56.27 Mn" },
    { label: "Total Borrowed", value: "$10.87 Mn" },
  ];

  const markets = [
    {
      name: "Linea",
      icon: "L",
      iconColor: "bg-blue-500",
      badges: ["LARGEST", "CORE"],
      badgeColors: ["bg-yellow-600", "bg-green-600"],
      marketSize: "$36.26 Mn",
      tvl: "$29.29 Mn",
      totalBorrow: "$6.96 Mn",
    },
    {
      name: "Hemi",
      icon: "H",
      iconColor: "bg-gradient-to-br from-orange-500 to-red-500",
      badges: ["PRIMARY"],
      badgeColors: ["bg-green-600"],
      marketSize: "$17.77 Mn",
      tvl: "$17.46 Mn",
      totalBorrow: "$305.07 K",
    },
    {
      name: "zkSync",
      icon: "Z",
      iconColor: "bg-gray-600",
      badges: ["PRIMARY"],
      badgeColors: ["bg-green-600"],
      marketSize: "$4.82 Mn",
      tvl: "$3.85 Mn",
      totalBorrow: "$965.59 K",
    },
    {
      name: "Base",
      icon: "B",
      iconColor: "bg-blue-600",
      badges: ["PRIMARY", "LP TOKENS"],
      badgeColors: ["bg-green-600", "bg-yellow-600"],
      marketSize: "$2.36 Mn",
      tvl: "$1.34 Mn",
      totalBorrow: "$1.02 Mn",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 md:mb-8">
          <div>
            <h1 className="text-white text-xl md:text-3xl font-bold mb-1 md:mb-2">
              Markets
            </h1>
            <p className="text-slate-400 hidden md:block text-sm">
              All available markets on
              <br />
              different chains
            </p>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white h-8 w-8 md:h-10 md:w-10"
            ></Button>
            <CustomConnectButton className="scale-90 md:scale-100" />
          </div>
        </div>

        {/* Total Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {totalStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="text-slate-400 text-sm mb-2">{stat.label}</div>
                <div className="text-white text-2xl font-semibold">
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex justify-end mb-6">
          <div className="flex items-center gap-2 bg-white/5 rounded-lg p-1">
            <Button
              variant="ghost"
              size="icon"
              className="text-white bg-white/10"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {markets.map((market, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer"
            >
              <CardContent className="p-6">
                {/* Market Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${market.iconColor}`}
                    >
                      {market.icon}
                    </div>
                    <span className="text-white text-xl font-semibold">
                      {market.name}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {market.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        className={`${market.badgeColors[badgeIndex]} text-white text-xs px-2 py-1`}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Market Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-slate-400 text-sm mb-1">
                      MARKET SIZE
                    </div>
                    <div className="text-white font-semibold">
                      {market.marketSize}
                    </div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm mb-1">TVL</div>
                    <div className="text-white font-semibold">{market.tvl}</div>
                  </div>
                  <div>
                    <div className="text-slate-400 text-sm mb-1">
                      TOTAL BORROW
                    </div>
                    <div className="text-white font-semibold">
                      {market.totalBorrow}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketsOverview;
