import React from "react";
import { ChevronLeft, Edit3 } from "lucide-react";

// shadcn/ui components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CustomConnectButton from "./CustomConnectButton";

const LineaMarket = () => {
  const assets = [
    {
      name: "Renzo ezETH",
      symbol: "EZETH",
      icon: "R",
      iconColor: "bg-gradient-to-br from-green-400 to-green-600",
      supplied: "$18.43 Mn",
      supplyPercent: "12%",
      supplyAPY: "<0.01 %",
      borrowed: "$148.50 K",
      borrowPercent: "1%",
      borrowAPY: "-0.13 %",
      hasSupplyIndicator: true,
      hasBorrowIndicator: true,
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      icon: "E",
      iconColor: "bg-[#627eea]",
      supplied: "$9.52 Mn",
      supplyPercent: null,
      supplyAPY: "0.98 %",
      borrowed: "$5.23 Mn",
      borrowPercent: null,
      borrowAPY: "-2.78 %",
      hasSupplyIndicator: false,
      hasBorrowIndicator: false,
    },
    {
      name: "Etherfi weETH",
      symbol: "WEETH",
      icon: "W",
      iconColor: "bg-[#627eea]",
      supplied: "$3.78 Mn",
      supplyPercent: "10%",
      supplyAPY: "<0.01 %",
      borrowed: "$93.42 K",
      borrowPercent: "2%",
      borrowAPY: "-0.39 %",
      hasSupplyIndicator: true,
      hasBorrowIndicator: true,
    },
    {
      name: "USDC",
      symbol: "USDC",
      icon: "U",
      iconColor: "bg-[#2775ca]",
      supplied: "$975.01 K",
      supplyPercent: "1%",
      supplyAPY: "6.05 %",
      borrowed: "$887.15 K",
      borrowPercent: null,
      borrowAPY: "-10.45 %",
      hasSupplyIndicator: true,
      hasBorrowIndicator: false,
    },
    {
      name: "Wrapped BTC",
      symbol: "WBTC",
      icon: "W",
      iconColor: "bg-[#f7931a]",
      supplied: "$855.48 K",
      supplyPercent: "1%",
      supplyAPY: "0.22 %",
      borrowed: "$142.26 K",
      borrowPercent: null,
      borrowAPY: "-2.62 %",
      hasSupplyIndicator: true,
      hasBorrowIndicator: false,
    },
  ];

  const stats = [
    { label: "Market Size", value: "$36.26 Mn" },
    { label: "TVL", value: "$29.29 Mn" },
    { label: "Total Borrow", value: "$6.96 Mn" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 text-slate-400">
            <ChevronLeft className="w-4 h-4" />
            <span className="hover:text-white cursor-pointer">Markets</span>
            <span>/</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                L
              </div>
              <span className="text-white">Linea</span>
            </div>
          </div>
          <CustomConnectButton />
        </div>

        {/* Description */}
        <div className="text-slate-400 mb-8 text-sm leading-relaxed">
          Primary market on Linea. Focused on growing the
          <br />
          Linea ecosystem.
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
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

        {/* Market Asset Table */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader className="border-b border-white/10">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white text-lg">Market Asset</CardTitle>
              <button className="text-slate-400 hover:text-white text-sm flex items-center gap-1">
                <Edit3 className="w-4 h-4" />
                Edit Table
              </button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 p-6 bg-white/5 border-b border-white/10 text-xs text-slate-400 uppercase tracking-wider">
              <div>Assets</div>
              <div>Supplied</div>
              <div>Supply APY</div>
              <div>Borrowed</div>
              <div>Borrow APY</div>
            </div>

            {/* Table Rows */}
            {assets.map((asset, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 p-6 border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                {/* Asset Info */}
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm ${asset.iconColor}`}
                  >
                    {asset.icon}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">
                      {asset.name}
                    </div>
                    <div className="text-slate-400 text-xs">{asset.symbol}</div>
                  </div>
                </div>

                {/* Supplied */}
                <div className="flex flex-col gap-2">
                  <div className="text-white font-medium text-sm">
                    {asset.supplied}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-green-600 hover:bg-green-700 text-white text-xs"
                    >
                      Supply
                    </Badge>
                    {asset.hasSupplyIndicator && (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-500 text-xs">
                          {asset.supplyPercent}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Supply APY */}
                <div className="flex items-center gap-2">
                  <span className="text-white font-medium text-sm">
                    {asset.supplyAPY}
                  </span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  </div>
                </div>

                {/* Borrowed */}
                <div className="flex flex-col gap-2">
                  <div className="text-white font-medium text-sm">
                    {asset.borrowed}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-purple-600 hover:bg-purple-700 text-white text-xs"
                    >
                      Borrow
                    </Badge>
                    {asset.hasBorrowIndicator && (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-green-500 text-xs">
                          {asset.borrowPercent}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Borrow APY */}
                <div className="text-red-400 font-medium text-sm">
                  {asset.borrowAPY}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LineaMarket;
