"use client";
import { Bitcoin, Layers, Zap, Search } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const markets = [
  {
    icon: <Bitcoin size={24} color="#F7931A" />,
    title: "Bitcoin (BTC)",
    description:
      "Bitcoin represents the largest cryptocurrency by market capitalisation and liquidity. Deep order book liquidity, high institutional participation, strong volatility cycles, and macro correlation relevance make BTC our portfolio anchor asset.",
  },
  {
    icon: <Layers size={24} color="#627EEA" />,
    title: "Ethereum (ETH)",
    description:
      "Ethereum provides exposure to decentralised infrastructure growth. Strong ecosystem activity, institutional derivatives markets, predictable volatility structures, and high trading volume consistency offer structured swing and momentum opportunities.",
  },
  {
    icon: <Zap size={24} color="#9945FF" />,
    title: "Solana (SOL)",
    description:
      "Solana represents high-performance blockchain infrastructure. Strong volatility expansion phases, growing ecosystem adoption, active speculative liquidity, and trend persistence characteristics support structured momentum allocation.",
  },
  {
    icon: <Search size={24} color="#0B2C5F" />,
    title: "Emerging Digital Assets",
    description:
      "We continuously screen new market entrants. Assets are evaluated on minimum liquidity thresholds, exchange depth metrics, volatility sustainability, risk-reward structure, and market manipulation indicators. Assets failing internal thresholds are excluded.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <Reveal>
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                What We Trade
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                High-liquidity digital assets with institutional participation
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 text-gray-500 leading-relaxed max-w-lg">
                We operate in liquid cryptocurrency markets where transparency,
                volatility, and market depth allow structured strategy
                execution. Every asset we trade passes a strict internal
                evaluation framework.
              </p>
            </Reveal>
          </div>

          {/* Right: Market cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {markets.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full flex flex-col gap-3">
                  <div className="w-11 h-11 rounded-lg bg-pink-light/15 flex items-center justify-center">
                    {m.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-[15px]">
                    {m.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
