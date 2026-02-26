"use client";
import { Reveal } from "./ui/Reveal";
import { Building2, BarChart2 } from "lucide-react";

const partners = [
  {
    icon: <Building2 size={32} className="text-primary" />,
    category: "Banking Partner",
    name: "FV Bank",
    description:
      "FV Bank supports our banking infrastructure and financial operations, providing the institutional-grade banking foundation required for a regulated proprietary trading firm operating in the UAE.",
  },
  {
    icon: <BarChart2 size={32} color="#F0B90B" />,
    category: "Trading Partner",
    name: "Binance",
    description:
      "Binance provides deep liquidity access, advanced order types, derivatives infrastructure, and reliable execution quality. This reduces slippage and directly improves our risk control and capital efficiency.",
  },
];

export default function Partners() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Strategic Partnerships
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Partners that support operational excellence
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Strategic partnerships support our operational efficiency and
              execution quality across banking and trading infrastructure.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <Reveal key={partner.name} delay={i * 0.15}>
              <div className="group p-10 rounded-2xl border border-gray-100 bg-background hover:border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col gap-5">
                <div className="w-16 h-16 rounded-2xl bg-pink-light/15 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {partner.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary/60 uppercase tracking-widest mb-1">
                    {partner.category}
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {partner.name}
                  </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
