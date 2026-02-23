"use client";
import { TrendingUp, CreditCard, Megaphone } from "lucide-react";
import { Reveal } from "./ui/Reveal";

const services = [
  {
    icon: <TrendingUp size={28} className="text-primary" />,
    title: "Business Strategy & Market Entry",
    description:
      "We help African companies navigate UAE regulatory requirements, company formation, and develop a winning go-to-market strategy for the Gulf region.",
  },
  {
    icon: <CreditCard size={28} className="text-primary" />,
    title: "FX & Cross-Border Payments",
    description:
      "Seamless currency exchange and payment solutions between African markets and the UAE — AED, USD, NGN, GHS and more, at competitive rates.",
  },
  {
    icon: <Megaphone size={28} className="text-primary" />,
    title: "Marketing & Brand Localisation",
    description:
      "Adapt your brand messaging for MENA audiences. We combine local market insight with creative strategy to make your brand resonate in the UAE.",
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
              What We Do
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Everything you need to succeed in the Gulf
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed">
              Mansu AE provides end-to-end support for African businesses
              entering the UAE market — from strategy to execution.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.1}>
              <div className="group p-8 rounded-2xl border border-gray-100 bg-grey-medium hover:border-primary/20 hover:shadow-lg transition-all duration-300 h-full flex flex-col gap-4">
                <div className="w-14 h-14 rounded-xl bg-pink-light/15 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
