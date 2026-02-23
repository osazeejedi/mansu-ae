"use client";
import { Lightbulb, ShieldCheck, Handshake, MapPin } from "lucide-react";
import { Reveal } from "../../components/ui/Reveal";

const values = [
  {
    icon: <Lightbulb size={26} className="text-primary" />,
    title: "Innovation",
    description:
      "We continuously seek smarter ways to solve our clients' challenges — from product design to payment flows.",
  },
  {
    icon: <ShieldCheck size={26} className="text-primary" />,
    title: "Integrity",
    description:
      "Every engagement is built on transparency, honest advice, and doing right by our clients — always.",
  },
  {
    icon: <Handshake size={26} className="text-primary" />,
    title: "Partnership",
    description:
      "We don't just serve clients — we partner with them. Your success is the metric we measure ourselves by.",
  },
  {
    icon: <MapPin size={26} className="text-primary" />,
    title: "Local Expertise",
    description:
      "Our teams are embedded in the markets we serve. We know the nuances of both Africa and the Gulf — intimately.",
  },
];

export default function Values() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Our Values
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              What drives everything we do
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-light/15 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-bold text-gray-900">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {v.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
