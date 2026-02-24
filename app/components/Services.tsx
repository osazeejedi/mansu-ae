"use client";
import { BarChart2, ShieldCheck, PieChart, Target } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const pillars = [
  {
    icon: <BarChart2 size={28} className="text-primary" />,
    title: "Market Intelligence Framework",
    description:
      "We analyse volatility regimes, liquidity distribution, order book structure, momentum cycles, and macro digital asset sentiment. Decisions are rule-based. Emotional execution is avoided.",
  },
  {
    icon: <ShieldCheck size={28} className="text-primary" />,
    title: "Risk Management Architecture",
    description:
      "Risk control defines capital survival. Our framework includes maximum daily drawdown limits, position sizing based on volatility, defined stop-loss thresholds, exposure caps per asset, and portfolio correlation monitoring.",
  },
  {
    icon: <PieChart size={28} className="text-primary" />,
    title: "Capital Allocation Model",
    description:
      "Capital is deployed selectively based on risk-adjusted opportunity, liquidity strength, market depth stability, and trade expectancy metrics. Underperformance triggers review and recalibration.",
  },
  {
    icon: <Target size={28} className="text-primary" />,
    title: "Performance Objective",
    description:
      "Our target reflects structured capital rotation, controlled leverage parameters, compounded trade performance, and risk-bounded execution. Growth remains aligned with preservation of trading capital.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              How We Trade
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Our Strategic Approach
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Our trading methodology integrates quantitative analysis, market
              structure review, and capital discipline across every position we take.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1}>
              <div className="group p-8 rounded-2xl border border-gray-100 bg-grey-medium hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-pink-light/15 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {pillar.icon}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">
                    0{i + 1}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 leading-snug">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
